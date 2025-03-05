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
        question: "Which of the following statements is true about ionic compounds?",
        options: [
            { value: "ionic-bonds-share", label: "Ionic bonds share electrons between two non-metallic elements" },
            { value: "cations-nonmetals-gain", label: "Cations are formed when nonmetals gain electrons" },
            { value: "anions-nonmetals-share", label: "Anions are formed when nonmetals share electrons" },
            { value: "ionic-metal-nonmetal", label: "Ionic compounds are formed between metal and nonmetal through the transfer of electrons" }
        ],
        answer: "ionic-metal-nonmetal"
    },
    {
        question: "Which of the following elements form ionic bonds?",
        options: [
            { value: "two-nonmetals", label: "Two nonmetals" },
            { value: "two-metals", label: "Two metals" },
            { value: "noble-gases", label: "Noble gases" },
            { value: "metal-nonmetal", label: "Metal and nonmetal" }
        ],
        answer: "metal-nonmetal"
    },
    {
        question: "Based on the octet rule, atoms bond to achieve:",
        options: [
            { value: "uneven-distribution", label: "An uneven distribution of electrons" },
            { value: "filled-inner-shell", label: "A filled inner shell of electrons" },
            { value: "full-outer-shell", label: "A full outer shell of electrons" },
            { value: "partial-outer-shell", label: "A partial outer shell of electrons" }
        ],
        answer: "full-outer-shell"
    },
    {
        question: "Which of the following is true about the conductivity of ionic compounds?",
        options: [
            { value: "no-conduct", label: "They do not conduct electricity at any state" },
            { value: "conduct-dissolved", label: "They conduct electricity when dissolved in water" },
            { value: "conduct-any-state", label: "They conduct electricity at any state" },
            { value: "conduct-solid", label: "They conduct electricity in solid form" }
        ],
        answer: "conduct-dissolved"
    },
    {
        question: "In Lewis structure, what does a single line between two atoms stands for?",
        options: [
            { value: "one-electron", label: "One shared electron" },
            { value: "two-electrons", label: "Two shared electrons" },
            { value: "three-electrons", label: "Three shared electrons" },
            { value: "four-electrons", label: "Four shared electrons" }
        ],
        answer: "two-electrons"
    },
    {
        question: "When drawing the Lewis structure of an ionic compound, which atom gains electrons to achieve eight valence electrons",
        options: [
            { value: "metal-atom", label: "The metal atom" },
            { value: "non-metal-atom", label: "The non-metal atom" },
            { value: "both-atoms", label: "Both metal and non-metal atoms" },
            { value: "neither-atoms", label: "Neither metal or non-metal atoms" }
        ],
        answer: "non-metal-atom"
    },
    {
        question: "In Lewis Structure, which atom is usually in the center?",
        options: [
            { value: "hydrogen", label: "Hydrogen" },
            { value: "first-atom", label: "The first atom in the given compounds" },
            { value: "least-electronegative", label: "The least electronegative atom" },
            { value: "most-electronegative", label: "The most electronegative atom" }
        ],
        answer: "least-electronegative"
    },
    {
        question: "Which of the following elements is never a central atom",
        options: [
            { value: "hydrogen", label: "Hydrogen" },
            { value: "oxygen", label: "Oxygen" },
            { value: "carbon", label: "Carbon" },
            { value: "nitrogen", label: "Nitrogen" }
        ],
        answer: "hydrogen"
    },
    {
        question: "How many electrons are represented by a single bond in a lewis structure",
        options: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" }
        ],
        answer: "2"
    },
    {
        question: "What is the result when magnesium and oxygen bonded together?",
        options: [
            { value: "magnesium-gains", label: "Magnesium gains electrons" },
            { value: "magnesium-loses", label: "Magnesium loses electrons" },
            { value: "oxygen-loses", label: "Oxygen loses electrons" },
            { value: "nothing-happens", label: "Nothing happens" }
        ],
        answer: "magnesium-loses"
    }
];

export default function GamePage() {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    usePageTimeTracker("1-quiz");

    const fetchData = async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) return toast.error("An error occured while fetching your data, please reload the website and try again.");

            const data: UserDataType = await res.json();

            if (data.progress.level1.quiz.completed) {
                return router.push('/1/lesson');
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
            const request = await fetch('/api/user/level/1/quiz', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            if (!request.ok) {
                throw new Error("Failed to submit answers");
            }

            router.push("/1/lesson");
        } catch {
            toast.error("An error occurred while submitting your answers. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="absolute w-full h-full flex flex-col bg-gradient-to-b from-base-100 to-base-200 text-white overflow-hidden">
            <div className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/80 backdrop-blur-sm flex flex-row justify-between p-2 px-3 sm:px-5 md:p-5 gap-3 overflow-hidden shadow-md">
                <Branding className="flex items-center sm:pt-3 md:pt-0" classNameLogo="w-10 sm:w-12" classNameText="hidden md:flex flex-col text-xl" />

                <div className="flex items-center gap-2">
                    <User pictureCn="block w-8 sm:w-9" className="bg-base-300/70 px-3 sm:px-4 rounded-lg gap-3 sm:gap-5 hover:bg-base-300 transition-colors" textCn="text-xs sm:text-sm md:text-md" withLogout={true} />
                </div>
            </div>

            <div className="h-screen overflow-scroll flex flex-col mt-14 sm:mt-16 md:mt-28 p-3 sm:p-5 md:p-8 text-sm max-w-4xl mx-auto w-full">
                <h1 className="text-2xl mb-4">Checking of Understanding #1</h1>
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