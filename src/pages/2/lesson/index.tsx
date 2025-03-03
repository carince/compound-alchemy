import React, { useState, useEffect } from "react";
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5";

import Branding from "@/components/Branding";
import User from "@/components/User";
import { CovalentBuilder } from "@/components/Canvas/LewisCovalent";
import { molecules } from "@/data/molecules";
import { MoleculeNames } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { usePageTimeTracking } from "@/utils/pageTimeTracker";

export default function GamePage() {
    const [validMolecules, setValidMolecules] = useState<{ [key in MoleculeNames]?: boolean }>({});
    const [ionicBuilderOpen, setIonicBuilderOpen] = useState(false);

    // Use the page time tracker with a unique page identifier
    useEffect(() => {
        const pageId = 'lesson-page-2';
        return usePageTimeTracking(pageId);
    }, []);

    return (
        <div className="absolute w-full h-full flex flex-col bg-gradient-to-b from-base-100 to-base-200 text-white overflow-hidden">
            <div className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/80 backdrop-blur-sm flex flex-row justify-between p-2 px-3 sm:px-5 md:p-5 gap-3 overflow-hidden shadow-md">
                <Branding className="flex items-center sm:pt-3 md:pt-0" classNameLogo="w-10 sm:w-12" classNameText="hidden md:flex flex-col text-xl" />

                <div className="flex items-center gap-2">
                    <User pictureCn="block w-8 sm:w-9" className="bg-base-300/70 px-3 sm:px-4 rounded-lg gap-3 sm:gap-5 hover:bg-base-300 transition-colors" textCn="text-xs sm:text-sm md:text-md" withLogout={true} />
                </div>
            </div>

            <div className="h-screen overflow-scroll flex flex-col mt-14 sm:mt-16 md:mt-28 p-3 sm:p-5 md:p-8 text-sm max-w-4xl mx-auto w-full">
                <div className="bg-base-300/30 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Drawing Lewis Dot Structures of Covalent Compounds
                    </h2>

                    <div className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                            <IoInformationCircleOutline className="text-blue-400 flex-shrink-0" />
                            <span className="leading-tight">Sharing Electrons Between Non-metal Atoms</span>
                        </h3>
                        <p className="mb-2 text-sm sm:text-base opacity-90">
                            Covalent compounds are made by two or more nonmetal atoms, sharing their valence electrons. Shared valence electrons between two nonmetal atoms is called a covalent bond.
                        </p>
                        <p className="text-sm sm:text-base opacity-90">
                            As atoms share their electrons, this allows them to fill the outer shell or what we call the valence shell with its outermost energy.
                        </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Properties of Covalent Compounds:</h3>
                        <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                            <li>Exist in solids, liquids, and gases</li>
                            <li>Not very hard/flexible</li>
                            <li>Very low conductivity</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Types of Covalent Bonding:</h3>
                        <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                            <li><span className="font-medium">Polar covalent bond</span> - unequal sharing of electrons</li>
                            <li><span className="font-medium">Non-polar covalent bond</span> - equal sharing of electrons</li>
                        </ul>
                    </div>

                    <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">EXAMPLE 1: Methane (CH₄)</span>
                        </h3>

                        <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                            <ol className="list-decimal list-outside ml-4 space-y-3 sm:space-y-4">
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">Identify the group of the elements given in the periodic table:</span>
                                    <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                        <li>Carbon (C) - Group 4</li>
                                        <li>Hydrogen (H) - Group 1</li>
                                    </ul>
                                </li>
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">Count the total number of valence electrons:</span>
                                    <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                        <li>Carbon: 4 valence electrons (Group 4)</li>
                                        <li>Hydrogen: 1 valence electron (Group 1)</li>
                                        <li>Since there are 4 hydrogen atoms (subscript 4), multiply: 1 × 4 = 4 electrons</li>
                                    </ul>
                                </li>
                                <li className="pl-1 sm:pl-2">
                                    <span className="font-medium text-sm sm:text-base">Solve:</span>
                                    <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg inline-block">
                                        <span className="font-mono text-base sm:text-lg">CH₄ = 4 + 1(4) = 8 valence electrons</span>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                                <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                                <span className="leading-tight">EXAMPLE 2: Sulfur Hexafluoride (SF₆)</span>
                            </h3>

                            <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                                <ol className="list-decimal list-outside ml-4 space-y-3 sm:space-y-4">
                                    <li className="pl-1 sm:pl-2">
                                        <span className="font-medium text-sm sm:text-base">Identify the group of the elements given in the periodic table:</span>
                                        <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                            <li>Sulfur (S) - Group 6</li>
                                            <li>Fluorine (F) - Group 7</li>
                                        </ul>
                                    </li>
                                    <li className="pl-1 sm:pl-2">
                                        <span className="font-medium text-sm sm:text-base">Count the total number of valence electrons:</span>
                                        <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                            <li>Sulfur: 6 valence electrons (Group 6)</li>
                                            <li>Fluorine: 7 valence electrons (Group 7)</li>
                                            <li>Since there are 6 fluorine atoms (subscript 6), multiply: 7 × 6 = 42 electrons</li>
                                        </ul>
                                    </li>
                                    <li className="pl-1 sm:pl-2">
                                        <span className="font-medium text-sm sm:text-base">Solve:</span>
                                        <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg inline-block">
                                            <span className="font-mono text-base sm:text-lg">SF₆ = 6 + (7 × 6) = 48 valence electrons</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                                <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                                <span className="leading-tight">EXAMPLE 3: Acetylene (C₂H₂)</span>
                            </h3>

                            <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                                <ol className="list-decimal list-outside ml-4 space-y-3 sm:space-y-4">
                                    <li className="pl-1 sm:pl-2">
                                        <span className="font-medium text-sm sm:text-base">Identify the group of the elements given in the periodic table:</span>
                                        <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                            <li>Carbon (C) - Group 4</li>
                                            <li>Hydrogen (H) - Group 1</li>
                                        </ul>
                                    </li>
                                    <li className="pl-1 sm:pl-2">
                                        <span className="font-medium text-sm sm:text-base">Count the total number of valence electrons:</span>
                                        <ul className="list-disc list-outside ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                            <li>Carbon: 4 valence electrons (Group 4)</li>
                                            <li>Since there are 2 carbon atoms (subscript 2), multiply: 4 × 2 = 8 electrons</li>
                                            <li>Hydrogen: 1 valence electron (Group 1)</li>
                                            <li>Since there are 2 hydrogen atoms (subscript 2), multiply: 1 × 2 = 2 electrons</li>
                                        </ul>
                                    </li>
                                    <li className="pl-1 sm:pl-2">
                                        <span className="font-medium text-sm sm:text-base">Solve:</span>
                                        <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg inline-block">
                                            <span className="font-mono text-base sm:text-lg">C₂H₂ = (4 × 2) + (1 × 2) = 10 valence electrons</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg"></h3>
                                <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                                <span className="leading-tight">Example: Water (H₂O)</span>
                            </h3>

                            <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                                <p className="mb-2 text-sm sm:text-base">
                                    <strong>Non-metal elements:</strong> Hydrogen and Oxygen
                                </p>
                                <p className="mb-2 text-sm sm:text-base">
                                    The subscript 2 in H₂O indicates that there are two hydrogen atoms present and one oxygen atom.
                                </p>
                                <p className="text-sm sm:text-base">
                                    There are two hydrogen atoms since oxygen lacks 2 electrons while hydrogen lacks one, so combining 2 hydrogen atoms with oxygen makes the compound stable.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg mt-8 sm:mt-10">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">Try It Yourself: Draw the Lewis Dot Structure</span>
                        </h3>

                        <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                            <button
                                className="bg-primary h-min p-3 rounded-lg"
                                onClick={() => setIonicBuilderOpen(true)}
                            >
                                Open Covalent Builder
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
                                            <CovalentBuilder
                                                setValidMolecules={setValidMolecules}
                                                currentMolecule={{ ...molecules.O2, name: "O2" }}
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