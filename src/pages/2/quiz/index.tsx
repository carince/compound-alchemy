import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import Spinner from "@/components/Spinner";
import User from "@/components/User";
import { UserDataType } from "@/types";
import { usePageTimeTracker } from "@/utils/pageTimeTracker";

export type Option = {
    value: string;
    label: string;
};

export type QuestionType = {
    question: string;
    options: Option[];
    answer: string;
};

const questions: QuestionType[] = [
    {
        question: "Covalent compounds are formed by two atoms when it begins to transfer its electrons",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "false"
    },
    {
        question: "In a covalent bond, atoms share their valence electrons to achieve stability.",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "true"
    },
    {
        question: "A nonmetal will donate its electrons to another nonmetal in a covalent bond.",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "false"
    },
    {
        question: "A nonpolar covalent bond involves unequal sharing of electrons between atoms.",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "false"
    },
    {
        question: "Covalent compounds typically do not have high conductivity.",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "true"
    },
    {
        question: "The Lewis structure shows how atoms are connected in a molecule",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "true"
    },
    {
        question: "Hydrogen atom in a lewis structure is always the central atom",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "false"
    },
    {
        question: "A single line in lewis structure represents two shared electrons",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "true"
    },
    {
        question: "In a lewis structure, atoms should be able to follow the octet rule",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "true"
    },
    {
        question: "Lewis structure helps predict the color of the atom",
        options: [
            { value: "true", label: "True" },
            { value: "false", label: "False" }
        ],
        answer: "false"
    }
];

export default function GamePage() {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    usePageTimeTracker("2-quiz");

    const fetchData = async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) return toast.error("An error occured while fetching your data, please reload the website and try again.");

            const data: UserDataType = await res.json();

            if (data.progress.level2.quiz.completed) {
                return router.push('/2/lesson');
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            await fetchData();
        };
        fetchUser();
    }, []);

    const handleAnswerChange = (questionIndex: number, optionValue: string) => {
        setAnswers({
            ...answers,
            [questionIndex]: optionValue
        });
    };

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        const allAnswered = questions.every((_, index) => answers[index] !== undefined);

        if (!allAnswered) {
            return toast.warning('Please answer all questions before submitting.');
        }

        setSubmitting(true);

        let score = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score += 1;
            }
        });

        const payload = {
            answers,
            score
        };

        console.log(JSON.stringify(payload, null, 2));

        try {
            const request = await fetch('/api/user/level/2/quiz', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            if (!request.ok) {
                throw new Error("Failed to submit answers");
            }

            router.push("/2/lesson");
        } catch (error) {
            toast.error("An error occurred while submitting your answers. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="absolute w-full h-full flex flex-col bg-gradient-to-b from-base-100 to-base-200 text-white overflow-hidden">
            <div
                className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/90 backdrop-blur-sm flex flex-row justify-between p-2 px-3 md:p-4 gap-3 overflow-hidden shadow-sm"
            >
                <Branding className="flex items-center" classNameLogo="w-8 md:w-10" classNameText="hidden md:flex flex-col text-lg" />

                <div className="flex items-center">
                    <User pictureCn="block w-7 md:w-8" className="px-2 sm:px-3 rounded-lg gap-2 sm:gap-3 hover:bg-base-300/50 transition-colors" textCn="text-xs md:text-sm" withLogout={true} />
                </div>
            </div>

            <div className="h-screen overflow-scroll flex flex-col mt-14 sm:mt-16 md:mt-28 p-3 sm:p-5 md:p-8 text-sm max-w-4xl mx-auto w-full">
                <h1 className="text-2xl mb-4">Quiz: Covalent Compounds</h1>
                <form onSubmit={handleSubmit} className="Content flex flex-col w-full items-center justify-center gap-5 p-5">
                    {questions.map((question, index) => (
                        <div key={index} className="Question p-5 bg-base-200 rounded shadow-lg sm:w-3/4">
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

                    <button
                        type="submit"
                        className={`px-4 py-2 disabled:bg-zinc-600 bg-blue-500 text-white rounded`}
                        disabled={submitting}
                    >
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
                </form>
            </div>

            <div className="pb-6 sm:pb-0"></div> {/* Bottom padding for scroll area */}
        </div>
    );
}