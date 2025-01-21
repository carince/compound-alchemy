"use client"

import { useState, useEffect, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { toast } from "sonner"

import { posttest, pretest } from '@/utils/questions';
import { QuestionType, UserType } from '@/types';

import User from '@/components/User';
import Branding from '@/components/Branding';
import { fadeIn, fadeOut } from '@/utils/transitions';
import Spinner from '@/components/Spinner';


export default withPageAuthRequired(function Home() {
    const { user } = useUser();
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(true);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [test, setTest] = useState<number | null>(null);
    const [questions, setQuestions] = useState<null | QuestionType[]>(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fadeIn();

        async function getTest() {
            if (!user) return;

            const data = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ email: user.email }),
            });

            const userData: UserType = await data.json();

            if (userData.progress.pretest.completed) {
                if (userData.progress.posttest.completed) {
                    // router.push('/end');
                    setTest(1);
                    setQuestions(posttest);
                } else {
                    setTest(1);
                    setQuestions(posttest);
                }
            } else {
                setTest(0);
                setQuestions(pretest);
            }
        }

        getTest();
    });

    const handleAnswerChange = (questionIndex: number, optionValue: string) => {
        setAnswers({
            ...answers,
            [questionIndex]: optionValue
        });
    };

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        const allAnswered = questions!.every((_, index) => answers[index] !== undefined);

        if (!allAnswered) {
            return toast.warning('Please answer all questions before submitting.');
        }

        setSubmitting(true);

        let score = 0;
        questions!.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score += 1;
            }
        });

        const request = await fetch('/api/user/test', {
            method: 'POST',
            body: JSON.stringify({
                email: user?.email,
                test,
                score,
                answers
            })
        })

        if (!request.ok) {
            setSubmitting(false)
            return toast.error("An error occured while submitting your answers. Please try again later.")
        }

        if (test === 0) {
            router.push('/game');
        } else {
            router.push('/end');
        }

        fadeOut()
    };

    return (
        <div className="h-screen w-screen bg-base-100 flex flex-col items-center py-10 gap-10">
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                    <div className="bg-base-200 p-5 w-3/4 rounded shadow-lg text-center">
                        <p className="mb-4 break-words text-left">
                            Thank you for your participation in our research study. Your contributions are invaluable in helping us achieve the objectives of this project.<br /><br />
                            As we proceed with the tests, we kindly remind you of the importance of completing them honestly and independently. This study aims to gather accurate and reliable data, which is only possible if all participants provide genuine responses.<br /><br />
                            <span className="underline">Cheating or seeking external assistance</span> may compromise the results and, ultimately, the validity of our findings. We trust in your integrity and commitment to contributing meaningfully to this research.<br /><br />
                            Thank you for your cooperation and dedication to this study ❤️.
                        </p>
                        <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-blue-500 text-white rounded">Close</button>
                    </div>
                </div>
            )}

            <div className='Branding flex flex-col items-center justify-center gap-2'>
                <Branding logoCn='w-16' textCn='text-3xl pl-2' />
                <p className="text-sm">Made with ❤️ by 12 - St. Agatha of Sicily</p>
            </div>

            <div className="Content flex flex-col w-full items-center justify-center gap-5">
                <div className="Header flex flex-row w-3/4 px-5 justify-between">
                    <p className="text-4xl font-semibold">{test ? "Posttest" : "Pretest"}</p>
                    <User pictureCn="w-9" className="gap-3" />
                </div>

                {questions && questions.map((question, index) => (
                    <div key={index} className="Question p-5 bg-base-200 rounded shadow-lg w-3/4">
                        <p className="QuestionText font-semibold mb-2">{`${index + 1}.) ${question.question}`}</p>
                        {question.options.map(option => (
                            <label key={option.value} className="QuestionChoices block">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option.value}
                                    checked={answers[index] === option.value}
                                    onChange={() => handleAnswerChange(index, option.value)}
                                    className="mr-2"
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                ))}

                <button onClick={handleSubmit} className={`px-4 py-2 disabled:bg-zinc-600 bg-blue-500 text-white rounded`} disabled={submitting}>
                    {
                        submitting ? (
                            <div className='flex gap-3 items-center'>
                                <Spinner size="w-8" strokeCn="stroke-white" />
                                Submitting...
                            </div>
                        ) : (
                            "Submit"
                        )
                    }
                </button>
            </div>
        </div>
    );
})