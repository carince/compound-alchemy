import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import { IonicBuilder } from "@/components/Canvas/LewisIonic";
import User from "@/components/User";
import { calculatePosition } from "@/data/molecules";
import { Molecule, UserDataType } from "@/types";
import { usePageTimeTracker } from "@/utils/pageTimeTracker";


export const ionic: Molecule[] = [
    {
        formula: "NaCl",
        atoms: [
            {
                id: "Na1",
                element: "Na",
                position: calculatePosition(-2, 0),
                bonds: [],
            },
            {
                id: "Cl1",
                element: "Cl",
                position: calculatePosition(2, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
    {
        formula: "MgO",
        atoms: [
            {
                id: "Mg1",
                element: "Mg",
                position: calculatePosition(-2, 0),
                bonds: [],
            },
            {
                id: "O1",
                element: "O",
                position: calculatePosition(2, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
    {
        formula: "CaF2",
        atoms: [
            {
                id: "Ca1",
                element: "Ca",
                position: calculatePosition(0, 0),
                bonds: [],
            },
            {
                id: "F1",
                element: "F",
                position: calculatePosition(-3.5, 0),
                bonds: [],
            },
            {
                id: "F2",
                element: "F",
                position: calculatePosition(3.5, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
    {
        formula: "Al2O3",
        atoms: [
            {
                id: "Al1",
                element: "Al",
                position: calculatePosition(-3, 2),
                bonds: [],
            },
            {
                id: "Al2",
                element: "Al",
                position: calculatePosition(-3, -2),
                bonds: [],
            },
            {
                id: "O1",
                element: "O",
                position: calculatePosition(2, 3),
                bonds: [],
            },
            {
                id: "O2",
                element: "O",
                position: calculatePosition(2, -3),
                bonds: [],
            },
            {
                id: "O3",
                element: "O",
                position: calculatePosition(4, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
    {
        formula: "Li2O",
        atoms: [
            {
                id: "Li1",
                element: "Li",
                position: calculatePosition(-3.5, 0),
                bonds: [],
            },
            {
                id: "Li2",
                element: "Li",
                position: calculatePosition(3.5, 0),
                bonds: [],
            },
            {
                id: "O1",
                element: "O",
                position: calculatePosition(0, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
];

const chemicalNames: Record<string, string> = {
    NaCl: "Sodium Chloride",
    MgO: "Magnesium Oxide",
    CaF2: "Calcium Fluoride",
    Al2O3: "Aluminum Oxide",
    Li2O: "Lithium Oxide",
};

export default function GamePage() {
    const [validMolecules, setValidMolecules] = useState<{ [key: string]: boolean | undefined }>({});
    const [_validNames, setValidNames] = useState<{ [key: string]: boolean | undefined }>({});
    const [nameAnswers, setNameAnswers] = useState<{ [key: string]: string }>({});
    const [confirmOpen, setSubmitConfirmOpen] = useState(false);
    const [_submitting, setSubmitting] = useState(false);

    const router = useRouter()
    usePageTimeTracker("1-cou")

    const handleQuizChange = (value: string, moleculeFormula: string) => {
        setNameAnswers((prev) => {
            const updatedAnswers = { ...prev, [moleculeFormula]: value };
            return updatedAnswers;
        });
    };

    const validateNames = () => {
        const valid = Object.keys(chemicalNames).reduce((acc, formula) => {
            console.log(`answer: ${nameAnswers[formula]?.toLowerCase().trim()} | correct: ${chemicalNames[formula].toLowerCase()}`)
            const isValid = nameAnswers[formula]?.toLowerCase().trim() === chemicalNames[formula].toLowerCase();
            acc[formula] = isValid;
            return acc;
        }, {} as { [key: string]: boolean | undefined });

        // Set state for UI updates if needed
        setValidNames((prev) => ({ ...prev, ...valid }));

        // Return the validation results
        return valid;
    };

    const fetchData = async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) return toast.error("An error occured while fetching your data, please reload the website and try again.");

            const data: UserDataType = await res.json();

            if (data.progress.level1.cou.completed) {
                // return router.push('/1/lesson');
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

    const handleSubmit = async () => {
        setSubmitting(true);

        // Get validation results directly
        const nameValidationResults = validateNames();

        const payload = {
            answers: {
                builder: validMolecules,
                naming: nameValidationResults
            }
        }

        console.log("Submitting with validation results:", nameValidationResults);

        try {
            const request = await fetch('/api/user/level/1/cou', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            if (!request.ok) {
                setSubmitting(false);
                return toast.error("An error occurred while submitting your answers. Please try again later.");
            }

            return router.push('/1/lesson');
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitting(false);
            toast.error("Failed to submit answers. Please check your connection and try again.");
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
                <div className="flex flex-col justify-center gap-5 mb-4">

                    <h2 className="text-lg font-bold">I. Create the valid lewis structure of the given compound:</h2>

                    {ionic.map((molecule, index) => (
                        <IonicBuilder key={index} setValidMolecules={setValidMolecules} currentMolecule={molecule} />
                    ))}

                    <h2 className="text-lg font-bold">II. Write the chemical names of the given compound:</h2>

                    <div className="flex flex-col gap-4 mb-4">
                        {Object.keys(chemicalNames).map((formula, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <label className="text-md">
                                    {formula.split(/(\d+)/).map((part, index) =>
                                        /\d+/.test(part) ? <sub key={index}>{part}</sub> : part
                                    )}
                                </label>
                                <input
                                    type="text"
                                    value={nameAnswers[formula] || ""}
                                    onChange={(e) => handleQuizChange(e.target.value, formula)}
                                    className="p-2 rounded bg-base-300"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setSubmitConfirmOpen(true)}
                        className="w-min mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>

                    {confirmOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                            <div className="bg-base-200 p-6 rounded shadow-lg">
                                <p>Are you sure you want to submit your answer?</p>
                                <div className="mt-4 flex justify-center gap-2">
                                    <button
                                        onClick={() => setSubmitConfirmOpen(false)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSubmitConfirmOpen(false);
                                            handleSubmit();
                                        }}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pb-6 sm:pb-0"></div> {/* Bottom padding for scroll area */}
            </div>
        </div>
    );
}