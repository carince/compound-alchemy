import { useDroppable } from '@dnd-kit/core';
import { CSSProperties } from 'react';

function Droppable(props: React.PropsWithChildren) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'spawndropper',
    });

    const style: CSSProperties = {
        "color": isOver ? 'red' : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} className="flex flex-col gap-5 items-center justify-center border-2 border-neutral-700/20 rounded-lg h-full w-full">
            {props.children}
        </div>
    );
}

export default Droppable