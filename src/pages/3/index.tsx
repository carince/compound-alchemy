"use client"

import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import Branding from "@/components/Branding";
import Draggable from "@/components/Draggable";
import Objective from "@/components/Objective";
import Spawner from "@/components/Spawner";
import User from "@/components/User";
import { items } from "@/utils/combinations";
import { useDrag } from "@/utils/drag";
import { usePageTimeTracker } from "@/utils/pageTimeTracker";

export default function GamePage() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Expanded objectives based on available items
    const [objectives] = useState([
        // Starting with basic elements
        {
            text: "Create Water (H₂O) by combining Hydrogen and Oxygen elements.",
            targetElement: "Water"
        },
        {
            text: "Discover Sodium Chloride (NaCl) - table salt!",
            targetElement: "Sodium Chloride"
        },
        {
            text: "Discover Sodium Oxide (Na₂O).",
            targetElement: "Sodium Oxide"
        },
        {
            text: "Discover Methane (CH₄).",
            targetElement: "Methane"
        },
        {
            text: "Create Carbon Dioxide (CO₂).",
            targetElement: "Carbon Dioxide"
        },
        {
            text: "Create Hydrogen Peroxide (H₂O₂).",
            targetElement: "Hydrogen Peroxide"
        },
        {
            text: "Create Sodium Carbonate (Na₂CO₃).",
            targetElement: "Sodium Carbonate"
        },
        {
            text: "Carbonic Acid (H₂CO₃) by mixing Carbon Dioxide with Water.",
            targetElement: "Carbonic Acid"
        },
    ]);
    const [currentObjective, setCurrentObjective] = useState(0);
    const [showObjective, setShowObjective] = useState(false);
    const [allCompleted, setAllCompleted] = useState(false);

    const { elements, unlockedElements, onSpawnerDragStart, onDragStart } = useDrag({ sidebarRef });

    usePageTimeTracker("3")

    // Add a small delay before showing the objective for a smoother initial load
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowObjective(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const completeObjective = () => {
        if (currentObjective < objectives.length - 1) {
            setCurrentObjective(prev => prev + 1);
        } else {
            // All objectives completed
            setAllCompleted(true);
            setTimeout(() => {
                setShowObjective(false);
            }, 1500);
        }
    };

    // Calculate progress for UI
    const progress = Math.round((currentObjective / objectives.length) * 100);

    return (
        <div className="absolute w-full h-full flex flex-row bg-base-100 text-white overflow-hidden select-none">
            {/* Objective component with AnimatePresence for entry/exit animations */}
            <AnimatePresence>
                {showObjective && (
                    <Objective
                        objectives={objectives}
                        currentObjective={currentObjective}
                        onComplete={completeObjective}
                        unlockedElements={unlockedElements}
                        isCompleted={allCompleted}
                        progress={progress}
                    />
                )}
            </AnimatePresence>

            <div className='Playground flex-grow relative flex items-center justify-center w-full h-full p-2'>
                {/* Keep the existing playground code */}
                <div className="fixed z-10 top-0 left-0 w-full">
                    <AnimatePresence>
                        {elements.map((element, key) => (
                            <Draggable
                                key={key}
                                item={element}
                                onDragStart={(e) => onDragStart(element, e)}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    <motion.picture
                        className="md:w-3/4 flex justify-center select-none"
                        animate={{ opacity: elements.length === 0 ? 1 : 0 }}
                    >
                        <source media="(min-width: 58rem)" srcSet="drag-help.svg" />
                        <img src="/drag-help-mobile.svg" alt="drag-help" />
                    </motion.picture>
                </AnimatePresence>

                <div className="absolute md:hidden left-0 bottom-0 flex p-2 flex-col mt-auto select-none">
                    <span className="text-2xl leading-6 font-bold text-white/25">Compound</span>
                    <span className="text-2xl leading-6 font-bold text-[#4b77d1]/25">Alchemy</span>
                </div>
            </div>

            <div ref={sidebarRef} className="Sidebar right-0 flex-shrink-0 h-full bg-base-200 flex flex-col p-2 py-5 md:p-5 gap-3 overflow-hidden">
                <Branding className="flex justify-center sm:pt-3 md:pt-0" classNameLogo="w-14" classNameText="hidden md:flex flex-col text-2xl " />
                <User pictureCn="hidden md:block w-9" className="hidden md:flex gap-2 md:gap-3" textCn="md:text-md text-sm" withLogout={true} />

                <div className="SpawnerList h-full w-full rounded-2xl border-2 border-base-100 overflow-auto">
                    <div className="flex flex-col p-2 md:p-5 gap-5 justify-center items-center w-full">
                        {unlockedElements.map((element, key) => (
                            <Spawner
                                key={key}
                                item={element}
                                onDragStart={(e) => onSpawnerDragStart(element, e)}
                            />
                        ))}
                    </div>
                </div>

                {allCompleted &&
                    <motion.button
                        className="bg-green-700 text-white text-sm md:text-lg rounded-lg p-2 w-full relative"
                        onClick={() => router.push("/end")}
                        initial={{ scale: 1 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        Ending
                        <span className="absolute inset-0 rounded-lg bg-green-700/50 animate-ping opacity-75"></span>
                    </motion.button>
                }
            </div>
        </div>
    );
}