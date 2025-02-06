import { UserProfile } from "@auth0/nextjs-auth0/client";
import { nanoid } from "nanoid";
import React, { createRef, useEffect, useState } from "react";
import { toast } from "sonner";

import { Item } from "@/types";
import { averagePosition, combineElements, findIntersections, items } from "@/utils/combinations";
import { disableScroll, enableScroll, useIsTouchDevice } from "@/utils/touch";

import { Logger } from "./logger";

export const useDrag = ({ sidebarRef, user }: { sidebarRef: React.RefObject<HTMLElement | null>, user?: UserProfile }) => {
    const [dragInfo, setDragInfo] = useState({
        id: "",
        x: 0,
        y: 0,
        top: 0,
        left: 0
    });
    const [unlockedElements, setUnlockedElements] = useState<Item[]>(() => {
        const saved = localStorage.getItem('unlockedElements');
        return saved ?
            (JSON.parse(saved) as Item[]).map(item => { return { ...item, ref: createRef<HTMLDivElement>() } }) :
            items.slice(0, 4).map(item => { return { ...item, ref: createRef<HTMLDivElement>() } });
    });
    const [elements, setElements] = useState<Item[]>([]); // State to manage the list of elements
    const isTouchCapable = useIsTouchDevice(); // 

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
        if (!element.id || !element.ref || !element.ref.current) return;
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
        Logger.log("dragStop", "dragging stopped");
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
                    saveUnlockedElements(state.map(item => { return { ...item, ref: undefined } }))
                }

                return state
            });

            // Calculate the new position for the combined element
            const newPos = averagePosition([...otherElements, targetElement]);
            const newElement: Item = {
                ...targetElement,
                ...compound,
                id: nanoid(5),
                ref: createRef<HTMLDivElement>(),
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
    function onSpawnerDragStart(element: Item, e: React.MouseEvent | React.TouchEvent) {
        if (!element.ref || !element.ref.current) return;
        const { top, left } = element.ref.current.getBoundingClientRect();

        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const y = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const newId = nanoid(5);

        setElements((state) => {
            const newElement = {
                ...element,
                id: newId,
                ref: createRef<HTMLDivElement>(),
                style: {
                    x: left,
                    y: top,
                    hover: 0
                }
            };
            return [...state, newElement];
        });

        setDragInfo((state) => {
            return {
                ...state,
                id: newId,
                x,
                y,
                top,
                left
            };
        });
    }

    async function saveUnlockedElements(state: Item[]) {
        if (!user) return

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

    return {
        unlockedElements,
        elements,
        onSpawnerDragStart,
        onDragStart,
    };
}