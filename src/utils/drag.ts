import { nanoid } from "nanoid";
import React, { createRef, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Item, ItemWithRef, UserDataType } from "@/types";
import { averagePosition, combineElements, findIntersections, items } from "@/utils/combinations";
import { disableScroll, enableScroll, useIsTouchDevice } from "@/utils/touch";

// Custom throttle function to replace Lodash
function throttle<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - lastCall >= wait) {
            lastCall = now;
            return func(...args);
        }
    };
}

export const useDrag = ({ sidebarRef }: { sidebarRef: React.RefObject<HTMLElement | null> }) => {
    const [dragInfo, setDragInfo] = useState({
        id: "",
        x: 0,
        y: 0,
        top: 0,
        left: 0
    });
    const [unlockedElements, setUnlockedElements] = useState<ItemWithRef[]>(
        items.slice(0, 5)
            .map(item => {
                return { ...item, ref: createRef<HTMLDivElement>() }
            })
    );
    const [elements, setElements] = useState<ItemWithRef[]>([]);
    const isTouchCapable = useIsTouchDevice();

    // Memoize sidebarRect to avoid recalculating on every render
    const sidebarRect = useMemo(() => {
        return sidebarRef.current?.getBoundingClientRect();
    }, [sidebarRef.current]);

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('/api/user/', {
                method: 'GET',
                credentials: 'include',
            });

            if (!res.ok) {
                return toast.error("An error occured while fetching your data, please login again and try again.")
            };

            const data = await res.json() as UserDataType;

            const unlocked = data.progress?.level3?.elements.unlocked;

            if (!unlocked || unlocked.length < 5) {
                return saveUnlockedElements(unlockedElements)
            }

            setUnlockedElements(() => {
                const x = items.filter(
                    (item) => unlocked?.includes(item.key))
                    .map(item => { return { ...item, ref: createRef<HTMLDivElement>() } })

                return [...x]
            });
        } catch (error) {
            console.error(error);
            return null;
        }
    }, [unlockedElements]);

    useEffect(() => {
        fetchData();
    }, []);

    // Throttle the move handler for better performance
    const onMove = useCallback(({ x, y }: { x: number, y: number }) => {
        setElements((state) => {
            if (dragInfo.id === "") return state;

            const dragElement = state.find((el) => el.id === dragInfo.id);
            if (!dragElement) return state;

            const currentSidebarRect = sidebarRef.current?.getBoundingClientRect() || null;
            const targetRect = dragElement.ref?.current?.getBoundingClientRect();

            const isOverSidebar = currentSidebarRect && targetRect &&
                targetRect.right > currentSidebarRect.left ? 1 : 0;

            const newX = dragInfo.left - (dragInfo.x - x);
            const newY = dragInfo.top - (dragInfo.y - y);

            // Only update if position actually changed
            if (dragElement.style &&
                dragElement.style.x === newX &&
                dragElement.style.y === newY &&
                dragElement.style.isOverSidebar === isOverSidebar) {
                return state;
            }

            const updatedElement = {
                ...dragElement,
                style: {
                    x: newX,
                    y: newY,
                    isOverSidebar
                }
            };

            return state
                .map(element => element.id === dragInfo.id ? updatedElement : element);
        });
    }, [dragInfo, sidebarRef]);

    // Wrap the handler with our custom throttle function
    const throttledMove = useMemo(() => throttle(onMove, 16), [onMove]); // ~60fps

    const handleMove = useCallback((e: TouchEvent | MouseEvent) => {
        if (dragInfo.id === "") return;
        if (e.cancelable) e.preventDefault();
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
        throttledMove({ x, y });
    }, [dragInfo.id, throttledMove]);

    const onDragStop = useCallback((e: MouseEvent | TouchEvent) => {
        enableScroll();
        if (e.cancelable) e.preventDefault();
        if (dragInfo.id === "") return;

        const prevDragId = dragInfo.id;
        setDragInfo((state) => ({ ...state, id: "" }));

        // Get the element that was dragged
        const targetElement = elements.find((e) => e.id === prevDragId);
        if (!targetElement) return;

        // Delete the element if it was dragged into the sidebar
        const currentSidebarRect = sidebarRef.current?.getBoundingClientRect();
        const targetRect = targetElement.ref?.current?.getBoundingClientRect();

        if (currentSidebarRect && targetRect &&
            targetRect.right > currentSidebarRect.left) {
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
                .filter((e): e is ItemWithRef => e !== undefined);

            if (otherElements.length === 0) return state;

            // Combine the dragged element with the intersected elements
            const compound = combineElements(targetElement, otherElements);
            if (!compound) return state;

            setUnlockedElements((state) => {
                const notUnlocked = !state.find((e) => e.key === compound.key)

                if (notUnlocked) {
                    const newState = [...state, { ...compound, ref: createRef<HTMLDivElement>() }];
                    saveUnlockedElements(newState);
                    return newState;
                }

                return state;
            });

            // Calculate the new position for the combined element
            const newPos = averagePosition([...otherElements, targetElement]);
            const newElement: ItemWithRef = {
                ...targetElement,
                ...compound,
                id: nanoid(5),
                ref: createRef<HTMLDivElement>(),
                style: {
                    x: newPos.x,
                    y: newPos.y,
                    isOverSidebar: 0
                }
            };

            return [...updatedElements, newElement];
        });
    }, [dragInfo.id, elements, sidebarRef]);

    // Effect to handle drag movements
    useEffect(() => {
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
    }, [handleMove, onDragStop, isTouchCapable]);

    // Set dragId reference and disable scrolling
    const onDragStart = useCallback((element: Item, e: React.MouseEvent | React.TouchEvent) => {
        disableScroll();
        if (!element.id || !element.ref || !element.ref.current) return;
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const y = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const { top, left } = element.ref.current.getBoundingClientRect();

        setDragInfo({
            id: element.id,
            x,
            y,
            top,
            left
        });
    }, []);

    // Spawn a new element when dragging from the sidebar
    const onSpawnerDragStart = useCallback((element: Item, e: React.MouseEvent | React.TouchEvent) => {
        if (!element.ref || !element.ref.current) return;
        const { top, left } = element.ref.current.getBoundingClientRect();

        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const y = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const newId = nanoid(5);

        setElements((state) => {
            const newElement: ItemWithRef = {
                ...element,
                id: newId,
                ref: createRef<HTMLDivElement>(),
                style: {
                    x: left,
                    y: top,
                    isOverSidebar: 0
                }
            };
            return [...state, newElement];
        });

        setDragInfo({
            id: newId,
            x,
            y,
            top,
            left
        });
    }, []);

    const saveUnlockedElements = useCallback(async (state: Item[]) => {
        try {
            const request = await fetch('/api/user/level/3/elements', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    unlocked: state.map(item => item.key)
                })
            });

            if (!request.ok) {
                toast.warning("An error occured while saving your progress.");
            }
        } catch (error) {
            toast.error("Failed to save progress");
            console.error("Save error:", error);
        }
    }, []);

    return {
        unlockedElements,
        elements,
        onSpawnerDragStart,
        onDragStart,
    };
}