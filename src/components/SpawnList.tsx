import React, { useEffect, useRef, useState } from "react";
import { Item } from "../types";
import { nanoid } from "nanoid";
import Draggable from "./Draggable";
import { disableScroll, enableScroll, useIsTouchDevice } from "../utils/touch";
import { averagePosition, combineElements, findIntersections } from "../utils/combinations";

function SpawnList({ startingElements }: React.PropsWithoutRef<{ startingElements: Item[] }>) {
    const dragId = useRef(""); // Reference to track the currently dragged element's ID
    const [elements, setElements] = useState<Item[]>([]); // State to manage the list of elements
    const isTouchCapable = useIsTouchDevice(); // Check if the device supports touch events

    // Effect to handle drag movements
    useEffect(() => {
        const onMove = ({ x, y }: { x: number, y: number }) => {
            setElements((state) => {
                if (dragId.current === null) return state;

                const dragElement = state.find((el) => el.id === dragId.current);
                if (!dragElement) return state;

                const updatedElement = { ...dragElement, pos: { x, y } };
                state = state
                    .filter((element) => element.id !== dragId.current)
                    .concat(updatedElement);
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
    }, [dragId, isTouchCapable]);

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

        const intersectedIds = findIntersections(elements, prevDragId);
        if (intersectedIds.length === 0) return;

        setElements((state) => {
            const targetElement = state.find((e) => e.id === prevDragId);
            if (!targetElement) return state;

            const updatedElements = state.filter(
                (e) => e.id !== prevDragId && !intersectedIds.includes(e.id)
            );

            const otherElements = intersectedIds
                .map((id) => elements.find((e) => e.id === id))
                .filter((e): e is Item => e !== undefined);

            if (otherElements.length === 0) return state;

            const compound = combineElements(targetElement, otherElements);
            if (!compound) return state;

            const newPos = averagePosition([...otherElements, targetElement]);
            const newElement: Item = {
                ...targetElement,
                ...compound,
                id: nanoid(5),
                pos: newPos
            };

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
                pos: {
                    x: "pageX" in event ? event.pageX : event.touches[0].pageX,
                    y: "pageY" in event ? event.pageY : event.touches[0].pageY,
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
                    startingElements.map((element, key) => (
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