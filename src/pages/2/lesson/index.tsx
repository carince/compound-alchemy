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
    const [userData, setUserData] = useState<UserDataType | undefined>(undefined)
    const [validMolecules, setValidMolecules] = useState<{ [key: string]: boolean | undefined }>({});
    const [ionicBuilderOpen, setIonicBuilderOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter()

    const fetchData = async () => {
        setIsLoading(true);
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
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            await fetchData();
        };
        fetchUser();
    }, []);

    usePageTimeTracker("2-lesson")

    const handleNavigate = (path: string, isEnabled: boolean | undefined) => {
        if (isEnabled) {
            router.push(path);
        }
    };

    const nacl_completed = validMolecules.NaCl === true;
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
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="Navbar fixed z-10 top-0 h-min w-full bg-base-200/90 backdrop-blur-sm flex flex-row justify-between p-2 px-3 md:p-4 gap-3 overflow-hidden shadow-sm"
            >
                <Branding className="flex items-center " classNameLogo="w-10 md:w-12" classNameText="hidden md:flex flex-col text-xl" />
                <div className="flex items-center gap-2">
                    <User pictureCn="block w-8 md:w-9" className="px-3 sm:px-4 rounded-lg gap-3 sm:gap-5 hover:bg-base-300 transition-colors" textCn="text-xs sm:text-sm md:text-md" withLogout={true} />
                </div>
            </motion.div>

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
                    className="h-screen w-screen max-w-4xl overflow-scroll flex flex-col mt-[56px] md:mt-[100px] p-4 md:p-5 text-sm"
                >
                    <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-bold text-blue-400">
                        Writing Chemical Formula
                    </motion.h2>
                    <motion.div variants={itemVariants} className="mt-6 sm:mt-8 mb-4 sm:mb-6">
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
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">
                        Drawing Lewis Dot Structures of Covalent Compounds
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6"
                    >
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
                    </motion.div>

                    <motion.div variants={itemVariants} className="border-l-4 border-purple-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Properties of Covalent Compounds:</h3>
                        <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                            <li>Exist in solids, liquids, and gases</li>
                            <li>Not very hard/flexible</li>
                            <li>Very low conductivity</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="border-l-4 border-green-500 pl-3 sm:pl-4 py-2 bg-base-300/20 rounded-r-lg mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Types of Covalent Bonding:</h3>
                        <ul className="list-disc list-inside sm:ml-6 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 opacity-90">
                            <li><span className="font-medium">Polar covalent bond</span> - unequal sharing of electrons</li>
                            <li><span className="font-medium">Non-polar covalent bond</span> - equal sharing of electrons</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-6 sm:mt-8 mb-4 sm:mb-6">
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
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-base-200/50 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-inner flex flex-col justify-center"
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 bg-base-300/40 p-2 sm:p-3 rounded-lg">
                            <IoBulbOutline className="text-yellow-400 text-xl sm:text-2xl flex-shrink-0" />
                            <span className="leading-tight">Try It Yourself: Draw the Lewis Dot Structure</span>
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary h-min p-3 rounded-lg"
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
                                    className="fixed h-screen inset-0 z-50 flex justify-center bg-black bg-opacity-50 py-10 overflow-scroll"
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
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-primary h-min p-3 rounded-lg"
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
                                        {cou_completed ? "✓ Completed" :
                                            validMolecules.NaCl && "Available"}
                                    </span>
                                </motion.button>

                                <motion.button
                                    whileHover={{
                                        backgroundColor: canProceedToQuiz ? "rgba(59, 130, 246, 0.1)" : undefined
                                    }}
                                    className={`p-3 flex justify-between items-center ${quiz_completed ? "text-green-400" : ""
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
                                    className="p-3 flex justify-between items-center"
                                    onClick={() => handleNavigate("/3", canProceedToNextLevel)}
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
                </motion.div>
            )}

            <div className="pb-6 sm:pb-0"></div> {/* Bottom padding for scroll area */}
        </div >
    );
}