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

    const cou_completed = userData?.progress.level2.cou.completed;
    const quiz_completed = userData?.progress.level2.quiz.completed;

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
                    className="h-screen w-screen overflow-scroll flex justify-center mt-[56px] md:mt-[100px] "
                >
                    <div className="w-full max-w-4xl flex flex-col p-4 md:p-5 text-sm">
                        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-bold text-blue-400">
                            Writing Chemical Formula
                        </motion.h2>

                        <motion.div variants={itemVariants} className="mb-6">
                            <h3 className="text-lg font-medium mb-3 flex items-center gap-2 bg-base-300/20 p-2 rounded-md">
                                <IoBulbOutline className="text-yellow-400 text-xl flex-shrink-0" />
                                <span>EXAMPLE: Hydrogen + Oxygen (Dihydrogen monoxide)</span>
                            </h3>
                            <div className="bg-base-200/30 rounded-lg p-3 md:p-4 border border-base-300/30">
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>
                                        <span className="font-medium">Write the symbols of the elements involved:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90">
                                            <li>Hydrogen - H</li>
                                            <li>Oxygen - O</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Use the prefixes to identify the subscripts:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90">
                                            <li>Dihydrogen - 2</li>
                                            <li>Monoxide - 1</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-medium">Write the elements together with their subscripts:</span>
                                        <div className="mt-2 p-2 bg-base-300/20 rounded-lg inline-block">
                                            <span className="font-mono">H₂O</span>
                                        </div>
                                        <p className="ml-4 mt-1 opacity-90">
                                            (No need to write for the subscript if it is 1)
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-bold mb-3 text-blue-400">
                            Drawing Lewis Dot Structures of Covalent Compounds
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="border-l-2 border-blue-400 pl-3 py-2 bg-base-300/10 rounded-r-md mb-4"
                        >
                            <h3 className="text-sm font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                                <IoInformationCircleOutline className="text-blue-400 flex-shrink-0" />
                                <span className="leading-tight">Sharing Electrons Between Non-metal Atoms</span>
                            </h3>
                            <p className="mb-2 text-sm opacity-90">
                                Covalent compounds are made by two or more nonmetal atoms, sharing their valence electrons. Shared valence electrons between two nonmetal atoms is called a covalent bond.
                            </p>
                            <p className="text-sm opacity-90">
                                As atoms share their electrons, this allows them to fill the outer shell or what we call the valence shell with its outermost energy.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="border-l-2 border-purple-400 pl-3 py-2 bg-base-300/10 rounded-r-md mb-4">
                            <h3 className="text-sm font-semibold mb-1 sm:mb-2">Properties of Covalent Compounds:</h3>
                            <ul className="text-sm list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                                <li>Exist in solids, liquids, and gases</li>
                                <li>Not very hard/flexible</li>
                                <li>Very low conductivity</li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-6">
                            <h3 className="text-lg font-medium mb-3 flex items-center gap-2 bg-base-300/20 p-2 rounded-md">
                                <IoBulbOutline className="text-yellow-400 text-xl flex-shrink-0" />
                                <span>EXAMPLE: Water (H2O)</span>
                            </h3>

                            <motion.div
                                className="bg-base-200/30 rounded-lg p-3 md:p-4 border border-base-300/30"
                            >
                                <ol className="list-decimal list-inside space-y-3">
                                    <li>
                                        <span className="text-base font-medium">Identify the group of the elements given in the periodic table:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <li>Oxygen (O) - Group 16</li>
                                            <li>Hydrogen (H) - Group 1</li>
                                        </ul>
                                        <Image src="/2/1-1.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Count the number of valence electrons for each element:</span>
                                        <ul className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <li>Oxygen: 6 valence electrons (Group 16)</li>
                                            <li>Hydrogen: 1 valence electron (Group 1)</li>
                                            <li>Since there are 2 hydrogen atoms (subscript 2), multiply: 1 × 2 = 2 electrons</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Count the total number of valence electrons:</span>
                                        <div className="mt-2 p-2 bg-base-300/20 rounded-md inline-block text-center">
                                            <span className="font-mono">H<sub>2</sub>O = 6 + 1(2) = 8 valence electrons</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Arrange the atoms to show specific connections.:</span>
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <span className="text-sm">Because H atoms are almost always terminal, the arrangement within the molecule must be HOH</span>
                                        </div>
                                        <Image src="/2/1-2.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Place a bonding pair of electrons between each pair of adjacent atoms to give a single bond:</span>
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm">
                                            <span className="text-sm">Placing one bonding pair of electrons between the O atom and each H atom gives us:</span>
                                        </div>
                                        <Image src="/2/1-3.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm ">
                                            <span className="text-sm">Leaving us with 4 electrons left over with each H atom a full valence shell of 2 electrons.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Distribute the remaining electrons as lone pairs on the terminal atoms (H), completing their octets:</span>
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm ">
                                            <span className="text-sm">Since H atoms only need 2 electrons, they already have a full valence shell.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Place all remaining electrons on the central atom (O):</span>
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm ">
                                            <span className="text-sm">The remaining 4 electrons will be placed as lone pairs on the O atom.</span>
                                        </div>
                                        <Image src="/2/1-4.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Check if the central atom has an octet:</span>
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm ">
                                            <span className="text-sm">The O atom has 8 electrons around it, fulfilling the octet rule.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="text-base font-medium">Confirm the Lewis structure:</span>
                                        <div className="list-disc list-inside ml-4 mt-1 opacity-90 text-sm ">
                                            <span className="text-sm">The final Lewis structure for H<sub>2</sub>O is:</span>
                                        </div>
                                        <Image src="/2/1-4.png" width={800} height={800} alt="Sodium and Chlorine" className="border border-base-300 rounded-md w-full max-w-60 p-1 my-2" />
                                    </li>
                                </ol>
                            </motion.div>
                        </motion.div>

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
                                Open Covalent Builder
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
                                            <CovalentBuilder
                                                setValidMolecules={setValidMolecules}
                                                currentMolecule={covalent.O2}
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
                                        onClick={() => handleNavigate("/2/cou", canProceedToCOU)}
                                        disabled={!canProceedToCOU && !cou_completed}
                                    >
                                        <span className="font-medium">Checking of Understanding</span>
                                        <span className="text-xs opacity-80">
                                            {cou_completed ? "✓ Completed" : "Check your understanding of Covalent Bonding!"}
                                        </span>
                                    </motion.button>

                                    <motion.button
                                        whileHover={{
                                            backgroundColor: canProceedToQuiz ? "rgba(59, 130, 246, 0.1)" : undefined
                                        }}
                                        className={`p-3 flex justify-between items-center ${quiz_completed ? "text-green-400" : "bg-red-600/20"
                                            }`}
                                        onClick={() => handleNavigate("/2/quiz", canProceedToQuiz)}
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
                                        onClick={() => handleNavigate("/3/", canProceedToNextLevel)}
                                        disabled={!canProceedToNextLevel}
                                    >
                                        <span className="font-medium">Compound Alchemy!</span>
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
            )
            }
        </div >
    );
}