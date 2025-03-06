import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import { IonicBuilder } from "@/components/Canvas/LewisIonic";
import User from "@/components/User";
import { ionic } from "@/data/molecules";
import { UserDataType } from "@/types";
import { usePageTimeTracker } from "@/utils/pageTimeTracker";

// Animation variants for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function GamePage() {
    const [userData, setUserData] = useState<UserDataType | undefined>(undefined);
    const [validMolecules, setValidMolecules] = useState<{ [key: string]: boolean | undefined }>({});
    const [ionicBuilderOpen, setIonicBuilderOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) {
                toast.error("An error occurred while fetching your data, please reload the website and try again.");
                return null;
            }

            const data: UserDataType = await res.json();
            setUserData(data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch user data");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    usePageTimeTracker("1-lesson");

    const handleNavigate = (path: string, isEnabled: boolean | undefined) => {
        if (isEnabled) {
            router.push(path);
        }
    };

    const cou_completed = userData?.progress.level1.cou.completed;
    const quiz_completed = userData?.progress.level1.quiz.completed;

    // Check if user can proceed to COU
    const canProceedToCOU = !cou_completed;
    // Check if user can proceed to quiz
    const canProceedToQuiz = cou_completed && !quiz_completed;
    // Check if user can proceed to next level
    const canProceedToNextLevel = cou_completed && quiz_completed;

    return (
        <div className="absolute w-full h-full flex flex-col items-center bg-base-100 text-white overflow-hidden">
            {/* Minimalist Navbar */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/90 backdrop-blur-sm flex flex-row justify-between p-2 px-3 md:p-4 gap-3 overflow-hidden shadow-sm"
            >
                <Branding className="flex items-center" classNameLogo="w-8 md:w-10" classNameText="hidden md:flex flex-col text-lg" />

                <div className="flex items-center">
                    <User pictureCn="block w-7 md:w-8" className="px-2 sm:px-3 rounded-lg gap-2 sm:gap-3 hover:bg-base-300/50 transition-colors" textCn="text-xs md:text-sm" withLogout={true} />
                </div>
            </motion.div>

            {/* Loading State */}
            {isLoading ? (
                <div className="h-screen w-screen flex items-center justify-center mt-[56px] md:mt-[64px]">
                    <motion.div
                        animate={{
                            rotate: 360,
                            transition: { duration: 1.5, ease: "linear", repeat: Infinity }
                        }}
                        className="w-12 h-12 border-2 border-blue-400 border-t-transparent rounded-full"
                    />
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-screen w-screen overflow-scroll flex justify-center mt-[56px] md:mt-[100px]"
                >
                    <div className="w-full max-w-4xl flex flex-col p-4 md:p-5 text-sm">
                        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-bold text-blue-400">
                            Writing Chemical Formula
                        </motion.h2>

                        <motion.div variants={itemVariants} className="mb-6">
                            <h3 className="text-lg font-medium mb-3 flex items-center gap-2 bg-base-300/20 p-2 rounded-md">
                                <IoBulbOutline className="text-yellow-400 text-xl flex-shrink-0" />
                                <span>EXAMPLE 1: MgO (Magnesium oxide)</span>
                            </h3>
                            <div className="bg-base-200/30 rounded-lg p-3 md:p-4 border border-base-300/30">
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>
                                        <span className="font-medium">Identify the given elements:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90">
                                            <li>Magnesium - Mg</li>
                                            <li>Oxygen - O</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Determine their charges:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90">
                                            <li>Magnesium (Mg) forms +2 ions (Mg²⁺)</li>
                                            <li>Oxygen (O) forms -2 ions (O²⁻)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Balance the charges:</span>
                                        <p className="ml-4 mt-1 opacity-90">
                                            Mg²⁺ O²⁻ - simplify to MgO
                                        </p>
                                        <div className="mt-2 p-2 bg-base-300/20 rounded-lg inline-block">
                                            <span className="font-mono">MgO</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-bold mb-3 text-blue-400">
                            Drawing Lewis Dot Structures
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className="border-l-2 border-blue-400 pl-3 py-2 bg-base-300/10 rounded-r-md mb-4"
                        >
                            <h3 className="text-base font-medium mb-1 flex items-center gap-2">
                                <IoInformationCircleOutline className="text-blue-400 flex-shrink-0" />
                                <span>Valence Electrons Transfer</span>
                            </h3>
                            <p className="opacity-90 text-sm">
                                In ionic bonds, the metal loses electrons to become a positively charged cation, whereas the nonmetal accepts those electrons to become a negatively charged anion.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-6">
                            <h3 className="text-lg font-medium mb-3 flex items-center gap-2 bg-base-300/20 p-2 rounded-md">
                                <IoBulbOutline className="text-yellow-400 text-xl flex-shrink-0" />
                                <span>EXAMPLE: Sodium chloride (NaCl)</span>
                            </h3>

                            <motion.div
                                className="bg-base-200/30 rounded-lg p-3 md:p-4 border border-base-300/30"
                            >
                                <ol className="list-decimal list-inside space-y-3">
                                    <li>
                                        <span className="font-medium">Identify elements:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <li>Sodium (Na) - Metal (Group 1)</li>
                                            <li>Chlorine (Cl) - Non-metal (Group 17)</li>
                                        </ul>

                                        <Image src="/1/1-1.png" priority width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                    <li>
                                        <span className="font-medium">Identify valence electrons:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <li>Na: 1 valence electron</li>
                                            <li>Cl: 7 valence electrons</li>
                                        </ul>
                                        <Image src="/1/1-2.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                    <li>
                                        <span className="font-medium">Transfer electrons:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <li>Na transfers 1 electron</li>
                                            <li>Cl gains 1 electron to achieve stable octet</li>
                                        </ul>
                                        <Image src="/1/1-3.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                    <li>
                                        <span className="font-medium">After electron transfer:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <li>Na⁺ (lost one electron)</li>
                                            <li>Cl⁻ (gained one electron)</li>
                                        </ul>
                                        <div className="mt-2 p-2 bg-base-300/20 rounded-md inline-block text-center">
                                            <span className="font-mono">[Na]<sup>+</sup> [Cl]<sup>-</sup></span>
                                        </div>
                                        <Image src="/1/1-4.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                </ol>
                            </motion.div>

                            <div className="mt-6"></div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-base-200/30 rounded-lg p-3 md:p-4 border border-base-300/30 flex flex-col justify-center"
                            >
                                <h3 className="text-lg font-medium mb-3 flex items-center gap-2 bg-base-300/20 p-2 rounded-md">
                                    <IoBulbOutline className="text-yellow-400 text-xl flex-shrink-0" />
                                    <span>Practice: Validate the Lewis Structure</span>
                                </h3>
                                <motion.button

                                    whileTap={{ scale: 0.98 }}
                                    className="bg-blue-600 hover:bg-blue-600/90 transition-colors p-2 rounded-md text-white"
                                    onClick={() => setIonicBuilderOpen(true)}
                                >
                                    Open Ionic Builder
                                </motion.button>
                                <AnimatePresence>
                                    {ionicBuilderOpen && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed h-screen inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70 py-10 overflow-scroll"
                                        >
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.9, opacity: 0 }}
                                                className="bg-base-200 flex flex-col h-min rounded-lg w-min"
                                            >
                                                <IonicBuilder
                                                    setValidMolecules={setValidMolecules}
                                                    currentMolecule={ionic.NaCl}
                                                />
                                                <motion.button
                                                    whileTap={{ scale: 0.98 }}
                                                    className="bg-blue-600 hover:bg-blue-600/90 transition-colors p-2 m-3 rounded-md"
                                                    onClick={() => setIonicBuilderOpen(false)}
                                                >
                                                    Close
                                                </motion.button>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-medium mb-3 flex items-center gap-2 bg-base-300/20 p-2 rounded-md overflow-hidden">
                                <IoInformationCircleOutline className="text-blue-400 text-xl flex-shrink-0" />
                                <span>Progress Path</span>
                            </h3>
                            <div className="bg-base-200/30 rounded-lg border border-base-300/30">
                                <div className="flex flex-col divide-y divide-base-300/30">
                                    <motion.button
                                        whileHover={{
                                            backgroundColor: canProceedToCOU ? "rgba(59, 130, 246, 0.1)" : undefined
                                        }}
                                        className={`p-3 flex justify-between items-center ${cou_completed ? "text-green-400" : ""
                                            }`}
                                        onClick={() => handleNavigate("/1/cou", canProceedToCOU)}
                                        disabled={!canProceedToCOU && !cou_completed}
                                    >
                                        <span className="font-medium">Checking of Understanding</span>
                                        <span className="text-xs opacity-80">
                                            {cou_completed ? "✓ Completed" : "Check your understanding of Ionic Bonding!"}
                                        </span>
                                    </motion.button>

                                    <motion.button
                                        whileHover={{
                                            backgroundColor: canProceedToQuiz ? "rgba(59, 130, 246, 0.1)" : undefined
                                        }}
                                        className={`p-3 flex justify-between items-center ${quiz_completed ? "text-green-400" : "bg-red-600/20"
                                            }`}
                                        onClick={() => handleNavigate("/1/quiz", canProceedToQuiz)}
                                        disabled={!canProceedToQuiz && !quiz_completed}
                                    >
                                        <span className="font-medium">Quiz</span>
                                        <span className="text-xs opacity-80">
                                            {quiz_completed ? "✓ Completed" :
                                                cou_completed ? "Available" : "Complete COU first"}
                                        </span>
                                    </motion.button>

                                    <motion.button
                                        whileHover={{
                                            backgroundColor: canProceedToNextLevel ? "rgba(59, 130, 246, 0.1)" : undefined
                                        }}
                                        className="p-3 flex justify-between items-center disabled:bg-red-600/20"
                                        onClick={() => handleNavigate("/2/lesson", canProceedToNextLevel)}
                                        disabled={!canProceedToNextLevel}
                                    >
                                        <span className="font-medium">Covalent Bonding</span>
                                        <span className="text-xs opacity-80">
                                            {canProceedToNextLevel ? "Available" : "Complete Quiz first"}
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="pb-6"></div> {/* Bottom padding for scroll area */}
                </motion.div>
            )}
        </div>
    );
}