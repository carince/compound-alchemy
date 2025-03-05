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


export default function GamePage() {
    const [userData, setUserData] = useState<UserDataType | undefined>(undefined);
    const [validMolecules, setValidMolecules] = useState<{ [key: string]: boolean | undefined }>({});
    const [ionicBuilderOpen, setIonicBuilderOpen] = useState(false);

    const router = useRouter()

    const fetchData = async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) return toast.error("An error occured while fetching your data, please reload the website and try again.");

            const data: UserDataType = await res.json();

            setUserData(data);
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

    usePageTimeTracker("1-lesson");

    return (
        <div className="absolute w-full h-full flex flex-col items-center bg-base-100 text-white overflow-hidden">
            <div className="Navbar fixed z-10 top-0 h-min w-full bg-base-200 flex flex-row justify-between p-2 px-3 md:p-5 gap-3 overflow-hidden shadow-md">
                <Branding className="flex items-center " classNameLogo="w-10 md:w-12" classNameText="hidden md:flex flex-col text-xl" />

                <div className="flex items-center gap-2">
                    <User pictureCn="block w-8 md:w-9" className="px-3 sm:px-4 rounded-lg gap-3 sm:gap-5 hover:bg-base-300 transition-colors" textCn="text-xs sm:text-sm md:text-md" withLogout={true} />
                </div>
            </div>

            <div className="h-screen w-screen max-w-4xl overflow-scroll flex flex-col mt-[56px] md:mt-[100px] p-5 text-sm sm:text-base">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
                    Writing Chemical Formula
                </h2>
                <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                        <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                        <span className="leading-tight">EXAMPLE 1: MgO (Magnesium oxide)</span>
                    </h3>
                    <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                        <ol className="list-decimal list-inside space-y-2 sm:space-y-3">
                            <li className="pl-1">
                                <span className="font-medium">Identify the given elements:</span>
                                <ul className="list-disc list-inside mt-1 opacity-90">
                                    <li>Magnesium - Mg</li>
                                    <li>Oxygen - O</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <span className="font-medium">Determine their charges:</span>
                                <ul className="list-disc list-inside mt-1 opacity-90">
                                    <li>Magnesium (Mg) forms +2 ions (Mg²⁺)</li>
                                    <li>Oxygen (O) forms -2 ions (O²⁻)</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <span className="font-medium">Balance the charges:</span>
                                <p className="ml-4 mt-1 opacity-90">
                                    Mg²⁺ O²⁻ - simplify to the simplest ratio which is MgO
                                </p>
                                <div className="mt-2 p-2 bg-base-300/30 rounded-lg inline-block">
                                    <span className="font-mono text-lg">MgO</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-400">
                    Drawing Lewis Dot Structures of Ionic Compounds
                </h2>

                <div className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                        <IoInformationCircleOutline className="text-blue-400 flex-shrink-0" />
                        <span className="leading-tight">Valence Electrons are transferred from metal to non-metal</span>
                    </h3>
                    <p className="mb-2 text-sm sm:text-base opacity-90">
                        In ionic bonds, the metal loses electrons to become a positively charged cation, whereas the nonmetal accepts those electrons to become a negatively charged anion.
                    </p>
                    <p className="text-sm sm:text-base opacity-90">
                        <span className="font-semibold">Brackets:</span> to show that the valence electrons are transferred and not shared.
                    </p>
                </div>

                <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                        <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                        <span className="leading-tight">EXAMPLE 1: Sodium chloride (NaCl)</span>
                    </h3>

                    <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                        <ol className="list-decimal list-inside space-y-3 sm:space-y-4">
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Identify the metal and non-metal elements:</span>
                                <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                    <li>Sodium (Na) - Metal (Group 1)</li>
                                    <li>Chlorine (Cl) - Non-metal (Group 17)</li>
                                </ul>

                                <Image src="/1/1-1.png" priority width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Identify the valence electrons present in the elements:</span>
                                <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                    <li>Na: 1 valence electron</li>
                                    <li>Cl: 7 valence electrons</li>
                                </ul>
                                <Image src="/1/1-2.png" width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Transfer the valence electrons to get a full outer shell:</span>
                                <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                    <li className="text-sm sm:text-base">Na: Will transfer 1 valence electron</li>
                                    <li className="text-sm sm:text-base">Cl: Will gain the 1 valence electron from Na, which gives it 8 valence electrons (achieving a stable octet)</li>
                                </ul>
                                <Image src="/1/1-3.png" width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">After transferring, the elements will have charges:</span>
                                <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                    <li className="text-sm sm:text-base">Na⁺ (since it lost one electron)</li>
                                    <li className="text-sm sm:text-base">Cl⁻ (since it gained one electron)</li>
                                </ul>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg inline-block text-center">
                                    <span className="font-mono text-base sm:text-lg">= [Na]<sup>+</sup> [Cl]<sup>-</sup></span>
                                </div>
                                <Image src="/1/1-4.png" width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                        </ol>
                    </div>

                    <div className="mt-8 sm:mt-10"></div>

                    <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">Try It Yourself: Draw the Lewis Dot Structure</span>
                        </h3>
                        <button
                            className="bg-primary h-min p-3 rounded-lg"
                            onClick={() => setIonicBuilderOpen(true)}
                        >
                            Open Ionic Builder
                        </button>
                        <AnimatePresence>
                            {ionicBuilderOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed h-screen inset-0 z-50 flex justify-center bg-black bg-opacity-50 py-10 overflow-scroll"
                                >
                                    <div className="bg-base-200 flex flex-col h-min rounded-lg w-min">
                                        <IonicBuilder
                                            setValidMolecules={setValidMolecules}
                                            currentMolecule={ionic.NaCl}
                                        />
                                        <button
                                            className="bg-primary h-min p-3 rounded-lg"
                                            onClick={() => setIonicBuilderOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                        <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                        <span className="leading-tight">Other Activities</span>
                    </h3>
                    <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                        <div className="flex flex-col space-y-3 sm:space-y-4">
                            <button
                                className={`p-5 rounded-lg flex flex-col md:flex-row justify-between shadow-lg transition-transform transform hover:scale-10 ${userData?.progress.level1.cou.completed
                                    ? "bg-green-500/50 hover:bg-green-400/50"
                                    : "bg-base-300 hover:bg-base-300/50"
                                    }`}
                                onClick={() => {
                                    if (!userData?.progress.level1.cou.completed) {
                                        router.push("/1/cou");
                                    }
                                }}
                                disabled={userData?.progress.level1.cou.completed}
                            >
                                <div className="flex flex-row gap-5 items-center pb-2 border-b border-gray-800 md:p-0 md:border-0">
                                    <IoInformationCircleOutline className="text-blue-400 text-4xl" />
                                    <span>Checking of Understanding</span>
                                </div>
                                <p className="pt-2 md:p-0 text-sm sm:text-base text-left">
                                    {userData?.progress.level1.cou.completed
                                        ? "You have completed this activity."
                                        : validMolecules.NaCl === false
                                            ? "You need to correctly draw the Lewis structure for NaCl first."
                                            : "Check your understanding of Ionic Bonding!"}
                                </p>
                            </button>
                            <button
                                className={`p-5 rounded-lg flex flex-col md:flex-row justify-between shadow-lg transition-transform transform hover:scale-10 ${userData?.progress.level1.quiz.completed
                                    ? "bg-green-500/50 hover:bg-green-400/50"
                                    : userData?.progress.level1.cou.completed ?
                                        "bg-base-300 hover:bg-base-300/50"
                                        : "bg-red-500/50 hover:bg-red-400/50"
                                    }`}
                                onClick={() => {
                                    if (!userData?.progress.level1.quiz.completed && userData?.progress.level1.cou.completed) {
                                        router.push("/1/quiz");
                                    }
                                }}
                                disabled={!userData?.progress.level1.cou.completed || userData?.progress.level1.quiz.completed}
                            >
                                <div className="flex flex-row gap-5 items-center pb-2 border-b border-gray-800 md:p-0 md:border-0">
                                    <IoInformationCircleOutline className="text-blue-400 text-4xl" />
                                    <span>Quiz</span>
                                </div>
                                <p className="pt-2 md:p-0 text-sm sm:text-base text-left">
                                    {userData?.progress.level1.quiz.completed
                                        ? "You have completed this activity."
                                        : !userData?.progress.level1.cou.completed
                                            ? "You need to complete Checking of Understanding to proceed."
                                            : "Complete this activity to proceed."}
                                </p>
                            </button>
                            <button
                                className={`p-5 rounded-lg flex flex-col md:flex-row justify-between shadow-lg transition-transform transform hover:scale-10 
                                    ${!userData?.progress.level1.cou.completed || !userData?.progress.level1.quiz.completed
                                        ? "bg-green-500/50 hover:bg-green-400/50"
                                        : userData?.progress.level1.cou.completed ?
                                            "bg-base-300 hover:bg-base-300/50"
                                            : "bg-red-500/50 hover:bg-red-400/50"
                                    }`}
                                onClick={() => {
                                    if (userData?.progress.level1.quiz.completed && userData?.progress.level1.cou.completed) {
                                        router.push("/2/lesson");
                                    }
                                }}
                                disabled={!userData?.progress.level1.cou.completed || !userData?.progress.level1.quiz.completed}
                            >
                                <div className="flex flex-row gap-5 items-center pb-2 border-b border-gray-800 md:p-0 md:border-0">
                                    <IoInformationCircleOutline className="text-blue-400 text-4xl" />
                                    <span>Covalent Bonding</span>
                                </div>
                                <p className="pt-2 md:p-0 text-sm sm:text-base text-left">
                                    {!userData?.progress.level1.quiz.completed
                                        ? "You have to complete the quiz before going to the next lesson."
                                        : "Proceed to the next lesson."}
                                </p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pb-6 sm:pb-0"></div> {/* Bottom padding for scroll area */}
            </div>
        </div>
    );
}