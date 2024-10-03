import React, { useRef } from 'react';
import { Item } from '../types';
import { useIsTouchDevice } from '../utils/touch';

function Draggable({ item, onDragStart, onDragStop }: React.PropsWithoutRef<{
    item: Item,
    onDragStart: (e: React.MouseEvent | React.TouchEvent) => void,
    onDragStop: (e: React.MouseEvent | React.TouchEvent) => void,
}>) {
    const ref = useRef<HTMLDivElement>(null)

    const onProps =
        useIsTouchDevice()
            ? { onTouchStart: (e: React.TouchEvent) => onDragStart(e), onTouchEnd: (e: React.TouchEvent) => onDragStop(e) }
            : { onMouseDown: (e: React.MouseEvent) => onDragStart(e), onMouseUp: (e: React.MouseEvent) => onDragStop(e) };

    const pos = (): React.CSSProperties => {
        if (!item.style) return {};
        if (!ref.current) return {
            left: `${item.style.x - 50}px`,
            top: `${item.style.y - 25}px`,
            position: "absolute",
        };

        return {
            left: `${item.style.x - (ref.current.getBoundingClientRect().width / 2)}px`,
            top: `${item.style.y - (ref.current.getBoundingClientRect().height / 2)}px`,
            position: "absolute",
        }
    }

    const hover = item.style?.hover
        ? item.style.hover === 1
            ? "shadow-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,1)]"
            : item.style.hover === 2
                ? "shadow-red-500/50 shadow-[0_0_50px_rgba(0,0,0,1)]"
                : ""
        : "";

    return (
        <div
            ref={ref}
            {...onProps}
            className={`p-2 md:py-3 md:px-5 flex flex-row items-center text-xs max-w-28 md:text-xl border-2 border-neutral-200 rounded-xl font-semibold backdrop-blur-sm select-none ${hover}`}
            style={{ ...pos() }}
        >
            <p className='text-blue-600 pr-2'>{item.symbol}</p>
            <p className='break-words'>{item.name}</p>
        </div>
    );
}

export default Draggable