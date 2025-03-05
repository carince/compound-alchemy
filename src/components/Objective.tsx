import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { HiCheck } from "react-icons/hi";

interface ObjectiveProps {
    objectives: { text: string; targetElement: string }[];
    currentObjective: number;
    onComplete: () => void;
    unlockedElements: any[]; // Replace 'any' with your actual element type
    isCompleted?: boolean;
    progress?: number;
}

export default function Objective({
    objectives,
    currentObjective,
    onComplete,
    unlockedElements,
    isCompleted = false,
    progress = 0
}: ObjectiveProps) {
    const [minimized, setMinimized] = useState(false);
    const [contentVisible, setContentVisible] = useState(true);
    const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

    // Check if current objective is completed by finding target element in unlocked elements
    useEffect(() => {
        const currentTarget = objectives[currentObjective]?.targetElement;
        if (currentTarget && unlockedElements.some(el => el.name === currentTarget)) {
            // Show completion animation
            setShowCompletionAnimation(true);

            // Wait for animation to finish before advancing to next objective
            const timer = setTimeout(() => {
                setShowCompletionAnimation(false);
                onComplete();
            }, 2000); // Give enough time for animation

            return () => clearTimeout(timer);
        }
    }, [currentObjective, objectives, unlockedElements, onComplete]);

    // Handle minimizing with proper animation sequence
    const handleMinimize = () => {
        if (!minimized) {
            // First hide content, then minimize
            setContentVisible(false);
            // Wait for content to animate out before minimizing container
            setTimeout(() => setMinimized(true), 300);
        } else {
            // First maximize, then show content
            setMinimized(false);
            // Wait for container to expand before showing content
            setTimeout(() => setContentVisible(true), 100);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    const containerSizeVariants = {
        minimized: {
            width: "auto",
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        expanded: {
            width: "min(320px, calc(100vw - 32px))",
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                height: { duration: 0.25, ease: "easeInOut" },
                opacity: { duration: 0.2, ease: "easeInOut" }
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.3, ease: "easeInOut", delay: 0.1 }
            }
        }
    };

    return (
        <motion.div
            variants={{
                ...containerVariants,
                minimized: containerSizeVariants.minimized,
                expanded: containerSizeVariants.expanded
            }}
            initial="hidden"
            animate={[
                "visible",
                minimized ? "minimized" : "expanded"
            ]}
            exit="exit"
            className="fixed bottom-4 left-4 z-50 shadow-lg rounded-xl overflow-hidden"
            style={{
                background: showCompletionAnimation
                    ? "rgba(21, 128, 61, 0.95)" // Green background when completed
                    : "rgba(30, 30, 40, 0.95)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(80, 80, 100, 0.4)",
                transition: "background 0.5s ease-in-out"
            }}
        >
            <div className="px-4 py-3 flex items-center justify-between">
                <motion.div
                    className="flex items-center"
                    layout
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {showCompletionAnimation ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="flex items-center"
                        >
                            <HiCheck className="w-5 h-5 text-white mr-2" />
                            <h3 className="font-medium text-white text-sm whitespace-nowrap">COMPLETED!</h3>
                        </motion.div>
                    ) : (
                        <>
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                            <h3 className="font-medium text-primary text-sm whitespace-nowrap">
                                OBJECTIVE {currentObjective + 1}/{objectives.length}
                            </h3>
                        </>
                    )}
                </motion.div>

                {!showCompletionAnimation && (
                    <motion.button
                        layout
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{
                            scale: 1.08,
                            transition: { duration: 0.2, ease: "easeInOut" }
                        }}
                        whileTap={{
                            scale: 0.96,
                            transition: { duration: 0.1, ease: "easeInOut" }
                        }}
                        onClick={handleMinimize}
                        onTouchEnd={(e) => {
                            e.preventDefault();
                            handleMinimize();
                        }}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-base-300 hover:bg-base-200 text-sm text-white ml-3 touch-manipulation"
                    >
                        {minimized ? "+" : "−"}
                    </motion.button>
                )}
            </div>

            {/* Progress bar */}
            {contentVisible && !minimized && !showCompletionAnimation && (
                <AnimatePresence>
                    <motion.div className="h-1 w-full bg-base-300">
                        <motion.div
                            className="h-1 w-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{
                                width: `${progress}%`,
                                transition: { duration: 0.5, ease: "easeInOut" }
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
            )}

            <AnimatePresence initial={false}>
                {contentVisible && !minimized && (
                    <motion.div
                        key="content"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentObjective + (showCompletionAnimation ? "-complete" : "")}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, ease: "easeInOut" }
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -5,
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                                className="p-4"
                            >
                                {showCompletionAnimation ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        className="flex flex-col justify-center items-center py-2"
                                    >
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 10, -10, 0]
                                            }}
                                            transition={{ duration: 0.6, ease: "easeInOut", times: [0, 0.4, 0.8, 1] }}
                                        >
                                            <HiCheck className="w-6 h-6 text-green-700" />
                                        </motion.div>
                                        {isCompleted && (
                                            <p className="text-white text-xs">All objectives completed!</p>
                                        )}
                                    </motion.div>
                                ) : (
                                    <div>
                                        <p className="text-white text-sm leading-relaxed mb-2">
                                            {objectives[currentObjective]?.text}
                                        </p>
                                        <div className="flex justify-between items-center text-xs text-gray-400">
                                            <span>Progress: {progress}%</span>
                                            <span>Objective {currentObjective + 1} of {objectives.length}</span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}