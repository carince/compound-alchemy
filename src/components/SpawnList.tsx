import React, { useEffect, useRef, useState } from "react";
import { Item } from "../types";
import { nanoid } from "nanoid";
import Draggable from "./Draggable";
import { disableScroll, enableScroll, useIsTouchDevice } from "../utils/touch";

function SpawnList({ startingElements }: React.PropsWithoutRef<{ startingElements: Item[] }>) {
    const dragId = useRef("")
    const [elements, setElements] = useState<Item[]>([])
    const isTouchCapable = useIsTouchDevice();

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
        }

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

    function onDragStart(element: Item, e: React.MouseEvent | React.TouchEvent) {
        e.preventDefault();
        if (!element.id) return;
        disableScroll();
        dragId.current = element.id;
    }

    function onDragStop(e: React.MouseEvent | React.TouchEvent) {
        e.preventDefault();
        if (dragId.current === "") return;
        enableScroll();
        dragId.current = "";
    }

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
            <div className="flex flex-col p-5 gap-5 items-center border-2 border-neutral-700/20 rounded-lg h-full w-full">
                {
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
            <div className="absolute z-10 top-0 left-0">
                {
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

export default SpawnList