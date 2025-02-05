"use client"

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { createRef, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import Branding from "@/components/Branding";
import Draggable from "@/components/Draggable";
import Spawner from "@/components/Spawner";
import User from "@/components/User";
import { Item, UserType } from "@/types";
import { averagePosition, combineElements, findIntersections, items } from "@/utils/combinations";
import { disableScroll, enableScroll, useIsTouchDevice } from "@/utils/touch";

export default withPageAuthRequired(function Page() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [dragInfo, setDragInfo] = useState({
        id: "",
        x: 0,
        y: 0,
        top: 0,
        left: 0
    }); // Reference to track the currently dragged element's ID
    const [unlockedElements, setUnlockedElements] = useState<Item[]>(() => {
        const saved = localStorage.getItem('unlockedElements');
        return saved ? JSON.parse(saved) : items.slice(0, 4);
    }); // State to manage the list of unlocked elements
    const [elements, setElements] = useState<Item[]>([]); // State to manage the list of elements
    const isTouchCapable = useIsTouchDevice(); // Check if the device supports touch events
    const { user } = useUser();
    const router = useRouter();

    // Effect to handle drag movements
    useEffect(() => {
        const onMove = ({ x, y }: { x: number, y: number }) => {
            setElements((state) => {
                if (dragInfo.id === null) return state;

                const dragElement = state.find((el) => el.id === dragInfo.id);
                if (!dragElement) return state;

                const updatedElement = {
                    ...dragElement,
                    style: {
                        x: dragInfo.left - (dragInfo.x - x),
                        y: dragInfo.top - (dragInfo.y - y),
                        hover: 0
                    }
                };

                state = state
                    .filter((element) => element.id !== dragInfo.id)
                    .concat(updatedElement);

                const intersections = findIntersections(state, dragInfo.id);
                state = state.map((element) => {
                    const targetElement = state.find((e) => e.id === dragInfo.id);

                    const otherElements = intersections
                        .map((id) => elements.find((e) => e.id === id))
                        .filter((e): e is Item => e !== undefined);

                    const compound = combineElements(targetElement!, otherElements);

                    if (intersections.includes(element.id)) {
                        if (compound !== null) {
                            element.style!.hover = 1;
                        } else {
                            element.style!.hover = 2;
                        }
                    } else {
                        element.style!.hover = 0;
                    }
                    return element;
                });

                return state;
            });
        };

        const handleMove = (e: TouchEvent | MouseEvent) => {
            if (dragInfo.id === "") return;
            e.preventDefault();
            const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
            onMove({ x, y });
        };

        if (isTouchCapable) {
            window.addEventListener("touchmove", handleMove, { passive: false });
            window.addEventListener("touchend", onDragStop);
        } else {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("mouseup", onDragStop);
        }

        return () => {
            if (isTouchCapable) {
                window.removeEventListener("touchmove", handleMove);
                window.removeEventListener("touchend", onDragStop);
            } else {
                window.removeEventListener("mousemove", handleMove);
                window.removeEventListener("mouseup", onDragStop);
            }
        };
    }, [elements, dragInfo, isTouchCapable]);

    // Set dragId reference and disable scrolling
    function onDragStart(element: Item, e: React.MouseEvent | React.TouchEvent) {
        if (!element.id) return;
        disableScroll();
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const y = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const { top, left } = element.ref!.current!.getBoundingClientRect();

        setDragInfo((state) => {
            return {
                ...state,
                id: element.id!,
                x,
                y,
                top,
                left
            };
        });
    };

    // Remove dragId reference and enable scrolling
    function onDragStop(e: MouseEvent | TouchEvent) {
        e.preventDefault();
        if (dragInfo.id === "") return;
        enableScroll();

        const prevDragId = dragInfo.id;
        setDragInfo((state) => { return { ...state, id: "" } });

        // Get the element that was dragged
        const targetElement = elements.find((e) => e.id === prevDragId);
        if (!targetElement) return;

        // Delete the element if it was dragged into the sidebar
        const sidebarRect = sidebarRef.current?.getBoundingClientRect();
        const targetRect = targetElement.style;

        if (sidebarRect && targetRect &&
            targetRect.x >= sidebarRect.left && targetRect.x <= sidebarRect.right &&
            targetRect.y >= sidebarRect.top && targetRect.y <= sidebarRect.bottom) {
            setElements((state) => state.filter((e) => e.id !== prevDragId));
            return;
        }

        // Find the elements that intersect with the dragged element and return if none
        const intersectedIds = findIntersections(elements, prevDragId);
        if (intersectedIds.length === 0) return;

        setElements((state) => {
            const updatedElements = state.filter(
                (e) => e.id !== prevDragId && !intersectedIds.includes(e.id)
            );

            const otherElements = intersectedIds
                .map((id) => elements.find((e) => e.id === id))
                .filter((e): e is Item => e !== undefined);

            if (otherElements.length === 0) return state;

            // Combine the dragged element with the intersected elements
            const compound = combineElements(targetElement, otherElements);
            if (!compound) return state;

            setUnlockedElements((state) => {
                const notUnlocked = !state.find((e) => e.key === compound.key)

                if (notUnlocked) {
                    state.push(compound)
                    saveUnlockedElements(state)
                }

                return state
            });

            // Calculate the new position for the combined element
            const newPos = averagePosition([...otherElements, targetElement]);
            const newElement: Item = {
                ...targetElement,
                ...compound,
                ref: createRef(),
                id: nanoid(5),
                style: {
                    x: newPos.x,
                    y: newPos.y,
                    hover: 0
                }
            };

            // Return the updated elements list with the combined element
            return [...updatedElements, newElement];
        });
    }

    // Spawn a new element when dragging from the sidebar
    function onSpawnerDragStart(element: Item, event: React.MouseEvent | React.TouchEvent) {
        setElements((state) => {
            const newId = nanoid(5);
            const newElement = {
                ...element,
                id: newId,
                style: {
                    x: "clientX" in event ? event.clientX : event.touches[0].clientX,
                    y: "clientY" in event ? event.clientY : event.touches[0].clientY,
                    hover: 0
                },
                ref: createRef<HTMLDivElement>()
            };
            setDragInfo((state) => { return { ...state, id: newId } });
            return [...state, newElement];
        });
    }

    // Effect for fetching user data
    useEffect(() => {
        async function checkUserData() {
            if (user) {
                const data = await fetch('/api/user', {
                    method: 'POST',
                    body: JSON.stringify({ email: user.email }),
                })

                const userData: UserType = await data.json()
                if (userData.progress?.pretest.completed) {
                    if (process.env.NODE_ENV === 'development') return
                    router.push('/test');
                }
            } else {
                return router.push('/api/auth/login');
            }
        }

        checkUserData()
    }, []);

    async function saveUnlockedElements(state: Item[]) {
        localStorage.setItem('unlockedElements', JSON.stringify(state));
        const request = await fetch('/api/user/elements', {
            method: 'POST',
            body: JSON.stringify({
                email: user?.email,
                unlocked: state
            })
        })

        if (!request.ok) {
            return toast.warning("An error occured while saving your progress.")
        }
    }

    return (
        <div className="absolute w-full h-full flex flex-row bg-base-100 text-white overflow-hidden">
            <div ref={sidebarRef} className="Sidebar flex-shrink-0 h-full bg-base-200 flex flex-col p-2 md:p-5 gap-5 overflow-hidden">
                <Branding className="flex justify-center sm:pt-3 md:pt-0" logoCn="w-14" textCn="hidden md:flex flex-col text-2xl " />

                {/* <User pictureCn="w-9" className="gap-2 md:gap-3" textCn="md:text-md text-sm" withLogout={true} /> */}

                <button
                    className="bg-primary text-white text-sm md:text-lg rounded-lg p-2 w-full"
                    onClick={() => {
                        return router.push("/test")
                    }}>
                    Posttest
                </button>

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

                <button className="bg-zinc-600 text-white text-sm md:text-lg rounded-lg p-2 w-full" onClick={() => setElements([])}>Settings</button>
                <button className="bg-red-600 text-white text-sm md:text-lg rounded-lg p-2 w-full" onClick={() => setElements([])}>Clear Area</button>
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
                <img
                    src="/drag-help.png" alt="Logo"
                    className={`w-3/4 max-w-96 select-none ${elements.length !== 0 ? "hidden" : ""}`}>
                </img>
                <div className="absolute md:hidden left-0 bottom-0 flex p-2 flex-col mt-auto select-none">
                    <span className="text-2xl leading-6 font-bold text-white/25">Compound</span>
                    <span className="text-2xl leading-6 font-bold text-[#4b77d1]/25">Alchemy</span>
                </div>
            </div>
        </div >
    );
})