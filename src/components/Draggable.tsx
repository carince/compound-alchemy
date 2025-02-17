import { AnimatePresence, motion } from 'motion/react';
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
        }
    }

    return (
        <motion.div
            className="absolute flex flex-row items-stretch text-xs md:text-[16px] leading-5 border-2 border-neutral-400 rounded-xl backdrop-blur-sm select-none w-36 md:w-48"
            style={{ ...pos() }}
            ref={item.ref}
            key={item.id}
            {...dragProps}
            initial={{ opacity: 0, scale: 0, }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
        >
            <AnimatePresence>
                {item.style?.isOverSidebar === 1 && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-red-500/50 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
            <p
                className='font-extrabold flex justify-center items-center text-primary min-w-14 md:min-w-20 bg-blue-500/15 m-1 rounded-lg'
            >{item.symbol}</p>
            <p className='font-semibold w-full break-words p-2'>{item.name}</p>
        </motion.div>
    );
}

export default Draggable