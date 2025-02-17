"use client"

import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

import Branding from "@/components/Branding";
import Draggable from "@/components/Draggable";
import Spawner from "@/components/Spawner";
import User from "@/components/User";
import { useDrag } from "@/utils/drag";

export default function GamePage() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { elements, unlockedElements, onSpawnerDragStart, onDragStart } = useDrag({ sidebarRef });

    return (
        <div className="absolute w-full h-full flex flex-row bg-base-100 text-white overflow-hidden">
            <div className='Playground flex-grow relative flex items-center justify-center w-full h-full p-2'>
                <div
                    className="fixed z-10 top-0 left-0 w-full">
                    <AnimatePresence>
                        {
                            // Render dynamically added elements as draggable components
                            elements.map((element, key) => (
                                <Draggable
                                    key={key}
                                    item={element}
                                    onDragStart={(e) => onDragStart(element, e)}
                                />
                            ))
                        }
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    <motion.picture
                        className="md:w-3/4 flex justify-center select-none"
                        animate={{ opacity: elements.length === 0 ? 1 : 0 }}
                    // exit={{ opacity: 0 }}
                    >
                        <source media="(min-width: 58rem)" srcSet="drag-help.svg" />
                        <img
                            src="/drag-help-mobile.svg" alt="drag-help">
                        </img>
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
                        {
                            // Render starting elements as draggable components but with no position
                            unlockedElements.map((element, key) => (
                                <Spawner
                                    key={key}
                                    item={element}
                                    onDragStart={(e) => onSpawnerDragStart(element, e)}
                                />
                            ))
                        }
                    </div>
                </div>

                <button
                    className="bg-primary text-white text-sm md:text-lg rounded-lg p-2 w-full"
                    onClick={() => {
                        return router.push("/tests")
                    }}>
                    Posttest
                </button>
            </div>
        </div >
    );
}