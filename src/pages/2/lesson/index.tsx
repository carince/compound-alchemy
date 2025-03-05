import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import { CovalentBuilder } from "@/components/Canvas/LewisCovalent";
import User from "@/components/User";
import { covalent } from "@/data/molecules";
import { UserDataType } from "@/types";
import { usePageTimeTracker } from "@/utils/pageTimeTracker";


export default function GamePage() {
    const [userData, setUserData] = useState<UserDataType | undefined>(undefined)
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

    usePageTimeTracker("2-lesson")

    return (
        <div className="absolute w-full h-full flex flex-col items-center bg-gradient-to-b from-base-100 to-base-200 text-white overflow-hidden">
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
                        <span className="leading-tight">EXAMPLE 1: H<sub>2</sub>O (Water)</span>
                    </h3>
                    <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                        <ol className="list-decimal list-inside space-y-2 sm:space-y-3">
                            <li className="pl-1">
                                <span className="font-medium">Write the symbols of the elements involved:</span>
                                <ul className="list-disc list-inside mt-1 opacity-90">
                                    <li>Hydrogen - H</li>
                                    <li>Oxygen - O</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <span className="font-medium">Use the prefixes to identify the subscripts:</span>
                                <ul className="list-disc list-inside mt-1 opacity-90">
                                    <li>Dihydrogen - 2</li>
                                    <li>Monoxide - 1</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <span className="font-medium">Write the elements together with their subscripts:</span>
                                <div className="mt-2 p-2 bg-base-300/30 rounded-lg ">
                                    <span className="font-mono text-lg">H<sub>2</sub>O</span>
                                </div>
                                <p className="text-sm opacity-80 mt-1">(No need to write 1 for the subscript)</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-400">
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
                    <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                        <li>Exist in solids, liquids, and gases</li>
                        <li>Not very hard/flexible</li>
                        <li>Very low conductivity</li>
                    </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Types of Covalent Bonding:</h3>
                    <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
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
                        <ol className="list-decimal list-inside space-y-3 sm:space-y-4">
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Identify the group of the elements given in the periodic table:</span>
                                <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                    <li>Oxygen (O) - Group 16</li>
                                    <li>Hydrogen (H) - Group 1</li>
                                </ul>
                                <Image src="/2/1-1.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Count the number of valence electrons for each element:</span>
                                <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                    <li>Oxygen: 6 valence electrons (Group 16)</li>
                                    <li>Hydrogen: 1 valence electron (Group 1)</li>
                                    <li>Since there are 2 hydrogen atoms (subscript 2), multiply: 1 × 2 = 2 electrons</li>
                                </ul>
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Count the total number of valence electrons:</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg">
                                    <span className="font-mono text-base sm:text-lg">H<sub>2</sub>O = 6 + 1(2) = 8 valence electrons</span>
                                </div>
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Arrange the atoms to show specific connections.:</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg">
                                    <span className="text-base sm:text-lg">Because H atoms are almost always terminal, the arrangement within the molecule must be HOH</span>
                                </div>
                                <Image src="/2/1-2.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Place a bonding pair of electrons between each pair of adjacent atoms to give a single bond:</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg">
                                    <span className="text-base sm:text-lg">Placing one bonding pair of electrons between the O atom and each H atom gives us:</span>
                                </div>
                                <Image src="/2/1-3.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg ">
                                    <span className="text-base sm:text-lg">Leaving us with 4 electrons left over with each H atom a full valence shell of 2 electrons.</span>
                                </div>
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Distribute the remaining electrons as lone pairs on the terminal atoms (H), completing their octets:</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg ">
                                    <span className="text-base sm:text-lg">Since H atoms only need 2 electrons, they already have a full valence shell.</span>
                                </div>
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Place all remaining electrons on the central atom (O):</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg ">
                                    <span className="text-base sm:text-lg">The remaining 4 electrons will be placed as lone pairs on the O atom.</span>
                                </div>
                                <Image src="/2/1-4.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Check if the central atom has an octet:</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg ">
                                    <span className="text-base sm:text-lg">The O atom has 8 electrons around it, fulfilling the octet rule.</span>
                                </div>
                            </li>
                            <li className="pl-1 sm:pl-2">
                                <span className="font-medium text-sm sm:text-base">Confirm the Lewis structure:</span>
                                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-base-300/30 rounded-lg ">
                                    <span className="text-base sm:text-lg">The final Lewis structure for H<sub>2</sub>O is:</span>
                                </div>
                                <Image src="/2/1-4.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-gray-600 rounded-lg shadow-lg w-full max-w-80 p-2 my-2 sm:my-3" />
                            </li>
                        </ol>
                    </div>

                    <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">Try It Yourself: Draw the Covalent Lewis Dot Structure</span>
                        </h3>
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
                                            currentMolecule={covalent.O2}
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

                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">Other Activities</span>
                        </h3>
                        <div className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner">
                            <div className="flex flex-col space-y-3 sm:space-y-4">
                                <button
                                    className={`p-5 rounded-lg flex flex-col md:flex-row justify-between shadow-lg transition-transform transform hover:scale-10 ${userData?.progress.level2.cou.completed
                                        ? "bg-green-500/50 hover:bg-green-400/50"
                                        : "bg-base-300 hover:bg-base-300/50"
                                        }`}
                                    onClick={() => {
                                        if (!userData?.progress.level2.cou.completed) {
                                            router.push("/2/cou");
                                        }
                                    }}
                                    disabled={userData?.progress.level2.cou.completed}
                                >
                                    <div className="flex flex-row gap-5 items-center pb-2 border-b border-gray-800 md:p-0 md:border-0">
                                        <IoInformationCircleOutline className="text-blue-400 text-4xl" />
                                        <span>Checking of Understanding</span>
                                    </div>
                                    <p className="pt-2 md:p-0 text-sm sm:text-base text-left">
                                        {userData?.progress.level2.cou.completed ? "You have completed this activity." : "Test your knowledge about covalent bonding!"}
                                    </p>
                                </button>
                                <button
                                    className={`p-5 rounded-lg flex flex-col md:flex-row justify-between shadow-lg transition-transform transform hover:scale-10 ${userData?.progress.level2.quiz.completed
                                        ? "bg-green-500/50 hover:bg-green-400/50"
                                        : userData?.progress.level2.cou.completed ?
                                            "bg-base-300 hover:bg-base-300/50"
                                            : "bg-red-500/50 hover:bg-red-400/50"
                                        }`}
                                    onClick={() => {
                                        if (!userData?.progress.level2.quiz.completed && userData?.progress.level2.cou.completed) {
                                            router.push("/2/quiz");
                                        }
                                    }}
                                    disabled={!userData?.progress.level2.cou.completed || userData?.progress.level2.quiz.completed}
                                >
                                    <div className="flex flex-row gap-5 items-center pb-2 border-b border-gray-800 md:p-0 md:border-0">
                                        <IoInformationCircleOutline className="text-blue-400 text-4xl" />
                                        <span>Quiz</span>
                                    </div>
                                    <p className="pt-2 md:p-0 text-sm sm:text-base text-left">
                                        {userData?.progress.level2.quiz.completed
                                            ? "You have completed this activity."
                                            : !userData?.progress.level2.cou.completed
                                                ? "You need to complete Checking of Understanding to proceed."
                                                : "Complete this activity to proceed."}
                                    </p>
                                </button>
                                <button
                                    className={`p-5 rounded-lg flex flex-col md:flex-row justify-between shadow-lg transition-transform transform hover:scale-10 
                                                        ${!userData?.progress.level2.cou.completed || !userData?.progress.level2.quiz.completed
                                            ? "bg-red-500/50 hover:bg-red-400/50"
                                            : "bg-base-300 hover:bg-base-300/50"
                                        }`}
                                    onClick={() => {
                                        if (userData?.progress.level2.quiz.completed && userData?.progress.level2.cou.completed) {
                                            router.push("/3");
                                        }
                                    }}
                                    disabled={!userData?.progress.level2.cou.completed || !userData?.progress.level2.quiz.completed}
                                >
                                    <div className="flex flex-row gap-5 items-center pb-2 border-b border-gray-800 md:p-0 md:border-0">
                                        <IoInformationCircleOutline className="text-blue-400 text-4xl" />
                                        <span>Creating Own Compounds</span>
                                    </div>
                                    <p className="pt-2 md:p-0 text-sm sm:text-base text-left">
                                        {!userData?.progress.level2.quiz.completed
                                            ? "You have to complete the quiz before going to the next lesson."
                                            : "Proceed to the next lesson."}
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-6 sm:pb-0"></div> {/* Bottom padding for scroll area */}
        </div >
    );
}