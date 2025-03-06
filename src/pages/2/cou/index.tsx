import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import { CovalentBuilder } from "@/components/Canvas/LewisCovalent";
import User from "@/components/User";
import { calculatePosition } from "@/data/molecules";
import { Molecule, UserDataType } from "@/types";
import { usePageTimeTracker } from "@/utils/pageTimeTracker";


export const covalent: Molecule[] = [
    {
        formula: "O2",
        atoms: [
            {
                id: "O1",
                element: "O",
                position: calculatePosition(-2, 0),
                bonds: ["O2"],
            },
            {
                id: "O2",
                element: "O",
                position: calculatePosition(2, 0),
                bonds: ["O1"],
            },
        ],
        bonds: [
            ["O1", "O2"],
        ],
    },
    {
        formula: "CO2",
        atoms: [
            {
                id: "C1",
                element: "C",
                position: calculatePosition(0, 0),
                bonds: ["O1", "O2"],
            },
            {
                id: "O1",
                element: "O",
                position: calculatePosition(-4, 0),
                bonds: ["C1"],
            },
            {
                id: "O2",
                element: "O",
                position: calculatePosition(4, 0),
                bonds: ["C1"],
            },
        ],
        bonds: [
            ["C1", "O1"],
            ["C1", "O2"],
        ],
    },
    {
        formula: "H2O",
        atoms: [
            {
                id: "O1",
                element: "O",
                position: calculatePosition(0, 0),
                bonds: ["H1", "H2"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-4, 0),
                bonds: ["O1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(4, 0),
                bonds: ["O1"],
            },
        ],
        bonds: [
            ["O1", "H1"],
            ["O1", "H2"],
        ],
    },
    {
        formula: "NH3",
        atoms: [
            {
                id: "N1",
                element: "N",
                position: calculatePosition(0, -1),
                bonds: ["H1", "H2", "H3"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-3, -1),
                bonds: ["N1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(3, -1),
                bonds: ["N1"],
            },
            {
                id: "H3",
                element: "H",
                position: calculatePosition(0, 2),
                bonds: ["N1"],
            },
        ],
        bonds: [
            ["N1", "H1"],
            ["N1", "H2"],
            ["N1", "H3"],
        ],
    },
    {
        formula: "PCl3",
        atoms: [
            {
                id: "P1",
                element: "P",
                position: calculatePosition(0, -1),
                bonds: ["Cl1", "Cl2", "Cl3"],
            },
            {
                id: "Cl1",
                element: "Cl",
                position: calculatePosition(-3, -1),
                bonds: ["P1"],
            },
            {
                id: "Cl2",
                element: "Cl",
                position: calculatePosition(3, -1),
                bonds: ["P1"],
            },
            {
                id: "Cl3",
                element: "Cl",
                position: calculatePosition(0, 2),
                bonds: ["P1"],
            },
        ],
        bonds: [
            ["P1", "Cl1"],
            ["P1", "Cl2"],
            ["P1", "Cl3"],
        ],
    }
];

const chemicalNames: Record<string, string> = {
    CO2: "Carbon Dioxide",
    NO: "Nitrogen Monoxide",
    N2O: "Dinitrogen Monoxide",
    S2Cl2: "Disulfur Dichloride",
    Cl2O7: "Dichlorine Heptoxide"
}

export default function GamePage() {
    const [validMolecules, setValidMolecules] = useState<{ [key: string]: boolean | undefined }>({});
    const [_validNames, setValidNames] = useState<{ [key: string]: boolean | undefined }>({});
    const [nameAnswers, setNameAnswers] = useState<{ [key: string]: string }>({});
    const [confirmOpen, setSubmitConfirmOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const router = useRouter()
    usePageTimeTracker("2-cou")

    const fetchData = async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) return toast.error("An error occured while fetching your data, please reload the website and try again.");

            const data: UserDataType = await res.json();

            if (data.progress.level2.cou.completed) {
                return router.push('/2/lesson');
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleQuizChange = (e: React.ChangeEvent<HTMLInputElement>, moleculeFormula: string) => {
        const { value } = e.target;
        setNameAnswers((prev) => ({ ...prev, [moleculeFormula]: value }));
    };

    const validateNames = () => {
        const valid = Object.keys(chemicalNames).reduce((acc, formula) => {
            const isValid = nameAnswers[formula]?.toLowerCase().trim() === chemicalNames[formula].toLowerCase();
            acc[formula] = isValid;
            return acc;
        }, {} as { [key: string]: boolean | undefined });

        setValidNames(valid);
        return valid;
    };

    const handleSubmit = async () => {
        setSubmitting(true);

        const nameValidationResults = validateNames();

        const payload = {
            answers: {
                builder: validMolecules,
                naming: nameValidationResults
            }
        }

        try {
            const request = await fetch('/api/user/level/2/cou', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            if (!request.ok) {
                setSubmitting(false);
                return toast.error("An error occurred while submitting your answers. Please try again later.");
            }

            return router.push('/2/lesson');
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitting(false);
            toast.error("Failed to submit answers. Please check your connection and try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 text-white">
            <div
                className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/90 backdrop-blur-sm flex flex-row justify-between p-2 px-3 md:p-4 gap-3 overflow-hidden shadow-sm"
            >
                <Branding className="flex items-center" classNameLogo="w-8 md:w-10" classNameText="hidden md:flex flex-col text-lg" />

                <div className="flex items-center">
                    <User pictureCn="block w-7 md:w-8" className="px-2 sm:px-3 rounded-lg gap-2 sm:gap-3 hover:bg-base-300/50 transition-colors" textCn="text-xs md:text-sm" withLogout={true} />
                </div>
            </div>

            <div className="container flex flex-col items-center mx-auto max-w-4xl mt-16 p-4 pb-20">
                <h1 className="text-xl text-left font-bold my-6">Checking of Understanding: Covalent Compounds</h1>

                <section className="mb-8">
                    <h2 className="text-md font-semibold mb-4 border-b border-base-300 pb-2">I. Create the valid Lewis Structure for each covalent compound</h2>
                    <div className="space-y-8">
                        {covalent.map((molecule, index) => (
                            <CovalentBuilder key={index} setValidMolecules={setValidMolecules} currentMolecule={molecule} />
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-md font-semibold mb-4 border-b border-base-300 pb-2">II. Write the chemical names of the given compounds</h2>
                    <div className="space-y-4">
                        {Object.keys(chemicalNames).map((formula, index) => (
                            <div key={index} className="flex flex-col">
                                <label className="mb-1 text-sm">
                                    {formula.split(/(\d+)/).map((part, idx) =>
                                        /\d+/.test(part) ? <sub key={idx}>{part}</sub> : part
                                    )}
                                </label>
                                <input
                                    type="text"
                                    value={nameAnswers[formula] || ""}
                                    onChange={(e) => handleQuizChange(e, formula)}
                                    className="p-2 rounded bg-base-300/50 border border-base-300 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter chemical name"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <button
                    onClick={() => setSubmitConfirmOpen(true)}
                    disabled={submitting}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50"
                >
                    {submitting ? "Submitting..." : "Submit"}
                </button>

                {confirmOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                        <div className="bg-base-100 p-5 rounded-lg shadow-xl max-w-sm w-full">
                            <h3 className="mb-4 font-medium">Confirm Submission</h3>
                            <p className="text-sm text-gray-300 mb-4">Are you sure you want to submit your answers? You won't be able to make changes afterward.</p>
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setSubmitConfirmOpen(false)}
                                    className="px-4 py-2 bg-base-300 hover:bg-base-400 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setSubmitConfirmOpen(false);
                                        handleSubmit();
                                    }}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}