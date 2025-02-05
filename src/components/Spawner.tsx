import React from 'react';

import { Item } from '@/types';
import { useIsTouchDevice } from '@/utils/touch';

function Spawner({ item, onDragStart }: {
    item: Item,
    onDragStart: (e: React.MouseEvent | React.TouchEvent) => void,
}) {
    const dragProps =
        useIsTouchDevice()
            ? { onTouchStart: (e: React.TouchEvent) => onDragStart(e) }
            : { onMouseDown: (e: React.MouseEvent) => onDragStart(e) };

    return (
        <div
            className="flex flex-col md:flex-row items-stretch text-xs md:text-[16px] leading-5 border-2 border-neutral-400 rounded-xl backdrop-blur-sm select-none w-28 md:w-48 transition-shadow"
        >
            <p
                ref={item.ref}
                className='font-extrabold flex justify-center items-center text-primary min-w-14 md:min-w-20 bg-blue-500/15 m-1 rounded-lg'
                {...dragProps}
            >{item.symbol}</p>
            <p className='font-semibold text-center md:text-left break-words pb-1 px-1 md:p-2'>{item.name}</p>
        </div>

    );
}

export default Spawner