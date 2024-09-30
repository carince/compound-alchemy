import React, { CSSProperties } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Item } from '../types';

function Draggable(props: React.PropsWithChildren<{ item: Item }>) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.item.id!,
    });

    const pos = props.item.pos

    const style: CSSProperties = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        position: pos.dropped ? "relative" : "fixed",
        left: pos.dropped ? undefined : `${pos.x}px`,
        top: pos.dropped ? undefined : `${pos.y}px`
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="py-3 px-6 border-2 border-neutral-200 rounded-xl font-semibold backdrop-blur-xl select-none">
            {`${props.item.symbol} ${props.item.name}`}
        </div>
    );
}

export default Draggable