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
        if (!item.pos) return {};
        if (!ref.current) return {
            left: `${item.pos.x - 50}px`,
            top: `${item.pos.y - 25}px`,
            position: "absolute",
        };

        return {
            left: `${item.pos.x - (ref.current.getBoundingClientRect().width / 2)}px`,
            top: `${item.pos.y - (ref.current.getBoundingClientRect().height / 2)}px`,
            position: "absolute",
        }
    }


    return (
        <div
            ref={ref}
            {...onProps}
            className="p-2 md:py-3 md:px-5 inline-block text-xs md:text-xl text-center border-2 border-neutral-200 rounded-xl font-semibold backdrop-blur-sm select-none whitespace-nowrap"
            style={{ ...pos() }}
        >
            <p className='text-blue-600 inline-block pr-2'>{item.symbol}</p>{item.name}
        </div >
    );
}

export default Draggable