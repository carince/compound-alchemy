import React, { useState } from "react";
import { IoChevronForward, IoBulbOutline, IoInformationCircleOutline, IoMenuOutline } from "react-icons/io5";

import Branding from "@/components/Branding";
import User from "@/components/User";
import { IonicBuilder } from "@/components/Canvas/LewisIonic";
import { molecules } from "@/data/molecules";
import { MoleculeNames } from "@/types";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function GamePage() {
    const [validMolecules, setValidMolecules] = useState<{ [key in MoleculeNames]?: boolean }>({});
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [ionicBuilderOpen, setIonicBuilderOpen] = useState(false);

    return (
        <div className="absolute w-full h-full flex flex-col bg-gradient-to-b from-base-100 to-base-200 text-white overflow-hidden">
            <div className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/80 backdrop-blur-sm flex flex-row justify-between p-2 px-3 sm:px-5 md:p-5 gap-3 overflow-hidden shadow-md">
                <Branding className="flex items-center sm:pt-3 md:pt-0" classNameLogo="w-10 sm:w-12" classNameText="hidden md:flex flex-col text-xl" />

                <div className="flex items-center gap-2">
                    <button
                        className="md:hidden btn btn-sm btn-ghost rounded-lg"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <IoMenuOutline className="text-2xl" />
                    </button>
                    <User pictureCn="block w-8 sm:w-9" className="bg-base-300/70 px-3 sm:px-4 rounded-lg gap-3 sm:gap-5 hover:bg-base-300 transition-colors" textCn="text-xs sm:text-sm md:text-md" withLogout={true} />
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="fixed z-[9] top-[3.2rem] w-full bg-base-300/95 backdrop-blur-sm md:hidden shadow-lg animate-slideDown">
                    <div className="flex flex-col p-3 py-4 space-y-3">
                        <a href="#" className="px-4 py-2 hover:bg-base-100/30 rounded-lg flex items-center gap-2">
                            <IoChevronForward /> Home
                        </a>
                        <a href="#" className="px-4 py-2 hover:bg-base-100/30 rounded-lg flex items-center gap-2 bg-base-100/20">
                            <IoChevronForward /> Current Lesson
                        </a>
                        <a href="#" className="px-4 py-2 hover:bg-base-100/30 rounded-lg flex items-center gap-2">
                            <IoChevronForward /> All Lessons
                        </a>
                    </div>
                </div>
            )}

            <div className="h-screen overflow-scroll flex flex-col mt-14 sm:mt-16 md:mt-28 p-3 sm:p-5 md:p-8 text-sm max-w-4xl mx-auto w-full">
                <div className="bg-base-300/30 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
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
                            <ol className="list-decimal list-outside ml-4 space-y-3 sm:space-y-4">
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">Identify the metal and non-metal elements:</span>
                                    <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                        <li>Sodium (Na) - Metal (Group 1)</li>
                                        <li>Chlorine (Cl) - Non-metal (Group 17)</li>
                                    </ul>

                                    <Image src="/1/1-1.png" width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                                </li>
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">Identify the valence electrons present in the elements:</span>
                                    <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                        <li>Na: 1 valence electron</li>
                                        <li>Cl: 7 valence electrons</li>
                                    </ul>
                                    <Image src="/1/1-2.png" width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                                </li>
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">Transfer the valence electrons to get a full outer shell:</span>
                                    <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                        <li className="text-sm sm:text-base">Na: Will transfer 1 valence electron</li>
                                        <li className="text-sm sm:text-base">Cl: Will gain the 1 valence electron from Na, which gives it 8 valence electrons (achieving a stable octet)</li>
                                    </ul>
                                    <Image src="/1/1-3.png" width={200} height={200} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                                </li>
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">After transferring, the elements will have charges:</span>
                                    <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
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
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">Try It Yourself: Draw the Lewis Dot Structure</span>
                        </h3>

                        <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
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
                                                currentMolecule={{ ...molecules.NaCl, name: "NaCl" }}
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
                </div>
            </div>

            <div className="pb-6 sm:pb-0"></div> {/* Bottom padding for scroll area */}
        </div>
    );
}