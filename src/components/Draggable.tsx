import { motion } from 'motion/react';
import React from 'react';

import { Item } from '@/types';
import { useIsTouchDevice } from '@/utils/touch';

function Draggable({ item, onDragStart }: {
    item: Item,
    onDragStart: (e: React.MouseEvent | React.TouchEvent) => void,
}) {
    const dragProps =
        useIsTouchDevice()
            ? { onTouchStart: (e: React.TouchEvent) => onDragStart(e) }
            : { onMouseDown: (e: React.MouseEvent) => onDragStart(e) };

    const pos = (): React.CSSProperties => {
        if (!item.style) return {};
        return {
            left: `${item.style.x}px`,
            top: `${item.style.y}px`,
            position: "absolute",
        }
    }

    let hover = "";
    switch (item.style?.hover) {
        case 1:
            hover = "shadow-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,1)]";
            break;
        case 2:
            hover = "shadow-red-500/50 shadow-[0_0_50px_rgba(0,0,0,1)]";
            break;
        default:
            hover = "";
            break;
    }

    return (
        <motion.div
            className={`flex flex-row items-stretch text-xs md:text-[16px] leading-5 border-2 border-neutral-400 rounded-xl backdrop-blur-sm select-none w-36 md:w-48 transition-shadow ${hover}`}
            style={{ ...pos() }}
            ref={item.ref}
            {...dragProps}
            initial={{ opacity: 0, scale: 1, }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <p
                className='font-extrabold flex justify-center items-center text-primary min-w-14 md:min-w-20 bg-blue-500/15 m-1 rounded-lg'
            >{item.symbol}</p>
            <p className='font-semibold w-full break-words p-2'>{item.name}</p>
        </motion.div>

    );
}

export default Draggable