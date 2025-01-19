"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import { posttest, pretest } from '@/utils/questions';
import { Question, User } from '@/types';

export default withPageAuthRequired(function Home() {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(true);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [test, setTest] = useState<number | null>(null);
    const [questions, setQuestions] = useState<null | Question[]>(null);

    useEffect(() => {
        async function getTest() {
            if (!user) return;

            const data = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ email: user.email }),
            });

            const userData: User = await data.json();

            if (userData.progress.pretest.completed) {
                if (userData.progress.posttest.completed) {
                    router.push('/end');
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
    }, [router, user]);

    const handleAnswerChange = (questionIndex: number, optionValue: string) => {
        setAnswers({
            ...answers,
            [questionIndex]: optionValue
        });
    };

    const handleSubmit = () => {
        const allAnswered = questions!.every((_, index) => answers[index] !== undefined);

        if (!allAnswered) {
            alert('Please answer all questions before submitting.');
            return;
        }

        let score = 0;
        questions!.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score += 1;
            }
        });

        fetch('/api/user/test', {
            method: 'POST',
            body: JSON.stringify({
                email: user?.email,
                test,
                score,
                answers
            })
        })

        if (test === 0) {
            router.push('/game');
        } else {
            router.push('/end');
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-base-100">
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

            <div className='Branding flex flex-col items-center justify-center gap-5 mb-5'>
                <div className="flex flex-row items-center">
                    <img src="/logo.png" alt="Logo" className="w-24 h-24 inline-block md:mr-2" />
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-white">Compound</span>
                        <span className="text-4xl font-bold text-[#4b77d1]">Alchemy</span>
                    </div>
                </div>
                <p className="font-semibold">Made with ❤️ by 12 - St. Agatha of Sicily</p>
            </div>

            <div className="Content flex flex-col w-full items-center justify-center gap-5">
                <div className="Header flex flex-row w-3/4 px-5">
                    <p className="text-4xl font-semibold">{test ? "Posttest" : "Pretest"}</p>
                    {
                        isLoading ? (
                            <div className="ml-auto w-52 flex items-center">
                                <p className="pl-2 font-bold text-xl">Loading...</p>
                            </div>
                        ) : (
                            <div className="ml-auto flex flex-row items-center">
                                <img src={user!.picture!} alt={user!.name!} className="aspect-square w-8 rounded-full" />
                                <p className="pl-3 font-bold text-sm">{user!.email!.replace("@ija.edu.ph", "")}</p>
                            </div>
                        )
                    }
                </div>

                {questions && questions.map((question, index) => (
                    <div key={index} className="p-5 bg-base-200 rounded shadow-lg w-3/4 mb-5">
                        <p className="mb-2">{question.question}</p>
                        {question.options.map(option => (
                            <label key={option.value} className="block">
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
                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
        </div>
    );
})