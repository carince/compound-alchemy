import React from 'react';
import { Layer, Rect } from 'react-konva';

export function Grid() {
    const width = 360;
    const height = 300;
    const boxSize = 30;

    const boxes = [];
    for (let i = 0; i < width / boxSize; i++) {
        for (let j = 0; j < height / boxSize; j++) {
            boxes.push(
                <Rect
                    key={`${i}-${j}`}
                    x={i * boxSize}
                    y={j * boxSize}
                    width={boxSize}
                    height={boxSize}
                    fill="transparent"
                    stroke="black"
                    strokeWidth={1}
                    opacity={.1}
                />
            );
        }
    }

    return (
        <Layer>
            {boxes}
        </Layer>
    );
};

export default Grid;