import React, { useRef } from 'react';
import { Item } from '../types';
import { useIsTouchDevice } from '@utils/touch';

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
            ref={item.style ? ref : null}
            className={`flex flex-row items-center text-xs md:text-[16px] leading-5 border-2 border-neutral-200 rounded-xl backdrop-blur-sm select-none ${hover}`}
            style={{ ...pos() }}
            {...item.style ? { ...onProps } : {}}
        >
            <p
                ref={!item.style ? ref : null}
                className='font-extrabold text-center text-primary min-w-14 md:min-w-20 p-2'
                {...!item.style ? { ...onProps } : {}}
            >{item.symbol}</p>
            <p className='font-semibold w-fit break-words p-2 pl-0'>{item.name}</p>
        </div>
    );
}

export default Draggable