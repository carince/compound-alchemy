"use client"

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

import Branding from "@/components/Branding";
import Draggable from "@/components/Draggable";
import Spawner from "@/components/Spawner";
import User from "@/components/User";
import { UserType } from "@/types";
import { useDrag } from "@/utils/drag";

export default withPageAuthRequired(function GamePage() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { user } = useUser();
    const router = useRouter();

    const { elements, unlockedElements, onSpawnerDragStart, onDragStart } = useDrag({ sidebarRef, user });

    // Effect for fetching user data
    useEffect(() => {
        async function checkUserData() {
            if (!user) return router.push('/api/auth/login');
            const data = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ email: user.email }),
            })

            const { progress }: UserType = await data.json()
            if (progress && !progress?.pretest) {
                if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') return
                router.push('/tests');
            }
        }

        checkUserData()
    }, []);

    return (
        <div className="absolute w-full h-full flex flex-row bg-base-100 text-white overflow-hidden">
            <div ref={sidebarRef} className="Sidebar flex-shrink-0 h-full bg-base-200 flex flex-col p-2 md:p-5 gap-3 overflow-hidden">
                <Branding className="flex justify-center sm:pt-3 md:pt-0" logoCn="w-14" textCn="hidden md:flex flex-col text-2xl " />

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

                {/* <button className="bg-zinc-600 text-white text-sm md:text-lg rounded-lg p-2 w-full" onClick={() => setElements([])}>Settings</button>
                <button className="bg-red-600 text-white text-sm md:text-lg rounded-lg p-2 w-full" onClick={() => setElements([])}>Clear Area</button> */}
            </div>

            <div className='Playground flex-grow relative flex items-center justify-center w-full h-full p-2'>
                <div
                    className="fixed z-10 top-0 left-0 w-full">
                    {
                        // Render dynamically added elements as draggable components
                        elements.map((element) => (
                            <Draggable
                                key={element.id}
                                item={element}
                                onDragStart={(e) => onDragStart(element, e)}
                            />
                        ))
                    }
                </div>
                <picture
                    className={`md:w-3/4 flex justify-center select-none ${elements.length !== 0 ? "hidden" : ""}`}
                >
                    <source media="(min-width: 58rem)" srcSet="drag-help.svg" />
                    <img
                        src="/drag-help-mobile.svg" alt="drag-help">
                    </img>
                </picture>
                <div className="absolute md:hidden left-0 bottom-0 flex p-2 flex-col mt-auto select-none">
                    <span className="text-2xl leading-6 font-bold text-white/25">Compound</span>
                    <span className="text-2xl leading-6 font-bold text-[#4b77d1]/25">Alchemy</span>
                </div>
            </div>
        </div >
    );
})