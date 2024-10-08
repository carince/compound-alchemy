import React, { useEffect, useRef, useState } from "react";
import { Item } from "../types";
import { nanoid } from "nanoid";
import Draggable from "./Draggable";
import { disableScroll, enableScroll, useIsTouchDevice } from "../utils/touch";
import { averagePosition, combineElements, findIntersections } from "../utils/combinations";

function SpawnList({ startingElements, sidebarRef }: React.PropsWithoutRef<{ startingElements: Item[], sidebarRef: React.RefObject<HTMLDivElement> }>) {
    const dragId = useRef(""); // Reference to track the currently dragged element's ID
    const [unlockedElements, setUnlockedElements] = useState<Item[]>(startingElements); // State to manage the list of unlocked elements
    const [elements, setElements] = useState<Item[]>([]); // State to manage the list of elements
    const isTouchCapable = useIsTouchDevice(); // Check if the device supports touch events

    // Effect to handle drag movements
    useEffect(() => {
        const onMove = ({ x, y }: { x: number, y: number }) => {
            setElements((state) => {
                if (dragId.current === null) return state;

                const dragElement = state.find((el) => el.id === dragId.current);
                if (!dragElement) return state;

                const updatedElement = { ...dragElement, style: { x, y, hover: 0 } };
                state = state
                    .filter((element) => element.id !== dragId.current)
                    .concat(updatedElement);

                const intersections = findIntersections(state, dragId.current);
                state = state.map((element) => {
                    const targetElement = state.find((e) => e.id === dragId.current);

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

        const onTouch = (e: TouchEvent) => {
            if (dragId.current === "") return;
            e.preventDefault();
            const touch = e.targetTouches[0];
            onMove({ x: touch.pageX, y: touch.pageY });
        };

        const onMouse = (e: MouseEvent) => {
            if (dragId.current === "") return;
            e.preventDefault();
            onMove({ x: e.pageX, y: e.pageY });
        };

        if (isTouchCapable) {
            window.addEventListener("touchmove", onTouch, { passive: false });
        } else {
            window.addEventListener("mousemove", onMouse);
        }

        return () => {
            if (isTouchCapable) {
                window.removeEventListener("touchmove", onTouch);
            } else {
                window.removeEventListener("mousemove", onMouse);
            }
        };
    }, [elements, dragId, isTouchCapable]);

    // Function to handle the start of a drag event
    function onDragStart(element: Item, e: React.MouseEvent | React.TouchEvent) {
        e.preventDefault();
        if (!element.id) return;
        disableScroll();
        dragId.current = element.id;
    }

    // Function to handle the end of a drag event
    function onDragStop(e: React.MouseEvent | React.TouchEvent) {
        e.preventDefault();
        if (dragId.current === "") return;
        enableScroll();

        const prevDragId = dragId.current;
        dragId.current = "";

        // Get the element that was dragged
        const targetElement = elements.find((e) => e.id === prevDragId);
        if (!targetElement) return;

        // Delete the element if it was dragged into the sidebar
        const sidebarRect = sidebarRef.current?.getBoundingClientRect();
        if (sidebarRect) {
            const targetRect = targetElement.style;
            if (
                targetRect &&
                targetRect.x >= sidebarRect.left &&
                targetRect.x <= sidebarRect.right &&
                targetRect.y >= sidebarRect.top &&
                targetRect.y <= sidebarRect.bottom
            ) {
                setElements((state) => state.filter((e) => e.id !== prevDragId));
            }
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
                if (!state.find((e) => e.key === compound.key)) {
                    return state.concat(compound);
                }
                return state;
            });

            // Calculate the new position for the combined element
            const newPos = averagePosition([...otherElements, targetElement]);
            const newElement: Item = {
                ...targetElement,
                ...compound,
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

    // Function to handle the start of a drag event for a new element
    function onSpawnerDragStart(element: Item, event: React.MouseEvent | React.TouchEvent) {
        setElements((state) => {
            const newId = nanoid(5);
            const newElement = {
                ...element,
                id: newId,
                style: {
                    x: "pageX" in event ? event.pageX : event.touches[0].pageX,
                    y: "pageY" in event ? event.pageY : event.touches[0].pageY,
                    hover: 0
                },
            };
            dragId.current = newId;
            return [...state, newElement];
        });
    }

    return (
        <div className="SpawnerList flex h-full w-full">
            <div className="flex flex-col p-5 gap-5 items-center md:border-2 border-neutral-700/20 rounded-lg h-full w-full">
                {
                    // Render starting elements as draggable components
                    unlockedElements.map((element, key) => (
                        <Draggable
                            key={key}
                            item={element}
                            onDragStart={(e) => onSpawnerDragStart(element, e)}
                            onDragStop={onDragStop}
                        />
                    ))
                }
            </div>
            <div className="absolute z-10 top-0 left-0 w-full">
                {
                    // Render dynamically added elements as draggable components
                    elements.map((element) => (
                        <Draggable
                            key={element.id}
                            item={element}
                            onDragStart={(e) => onDragStart(element, e)}
                            onDragStop={onDragStop}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SpawnList;