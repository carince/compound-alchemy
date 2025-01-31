import React, { useRef } from 'react';
import { Item } from '@/types';
import { useIsTouchDevice } from '@/utils/touch';
import { motion, useMotionValue, useMotionValueEvent, useVelocity } from 'motion/react';

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

    const x = useMotionValue(0)
    const xVelocity = useVelocity(x)

    useMotionValueEvent(xVelocity, "change", latest => {
        console.log("Velocity", latest)
    })

    return (
        <motion.div
            ref={item.style ? ref : null}
            className={`flex flex-row items-stretch text-xs md:text-[16px] leading-5 border-2 border-neutral-200 rounded-xl backdrop-blur-sm select-none w-36 md:w-48 transition-shadow ${hover}`}
            style={{ ...pos(), x }}
            {...item.style ? { ...onProps } : {}}
            initial={{ opacity: 0, scale: 1, }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <p
                ref={!item.style ? ref : null}
                className='font-extrabold flex justify-center items-center text-primary min-w-14 md:min-w-20 bg-blue-500/15 m-1 rounded-lg'
                {...!item.style ? { ...onProps } : {}}
            >{item.symbol}</p>
            <p className='font-semibold w-full break-words p-2'>{item.name}</p>
        </motion.div>

    );
}

export default Draggable