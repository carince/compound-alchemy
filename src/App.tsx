import React, { useState, useCallback, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';
import { Element } from './types';
import { Compound, checkCompound } from './compoundLogic';

const initialElements: Element[] = [
  { id: 1, name: 'Hydrogen', emoji: '💧' },
  { id: 2, name: 'Oxygen', emoji: '💨' },
  // { id: 3, name: 'Carbon', emoji: '🪨' },
  // { id: 4, name: 'Nitrogen', emoji: '🌬️' },
];

const DraggableElement: React.FC<{
  element: Element;
  onDrop: (element: Element, boundingRect: DOMRect) => void;
}> = ({ element, onDrop }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      onDrop(element, elementRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <Draggable
      onStop={() => {
        if (elementRef.current) {
          onDrop(element, elementRef.current.getBoundingClientRect());
        }
      }}
    >
      <div
        ref={elementRef}
        className="w-32 border-2 border-white p-2 rounded-xl backdrop-blur-sm cursor-grab"
        style={{ position: 'absolute' }}
      >
        {`${element.emoji} ${element.name}`}
      </div>
    </Draggable>
  );
};

function App() {
  const [elements, setElements] = useState<Element[]>([]);
  const [compounds, setCompounds] = useState<Compound[]>([]);

  const handleElementDrop = useCallback(
    (droppedElement: Element, droppedRect: DOMRect) => {
      let overlappingElement: Element | null = null;

      // Check if dropped element overlaps with any existing element
      elements.forEach((element) => {
        if (element.id !== droppedElement.id && element.rect) {
          const existingRect = element.rect;

          const isOverlapping =
            droppedRect.left < existingRect.right &&
            droppedRect.right > existingRect.left &&
            droppedRect.top < existingRect.bottom &&
            droppedRect.bottom > existingRect.top;

          if (isOverlapping) {
            overlappingElement = element;
          }
        }
      });

      if (overlappingElement) {
        // Check for compound
        const compound = checkCompound([droppedElement, overlappingElement]);
        if (compound) {
          // Remove both elements
          setElements((prev) =>
            prev.filter(
              (el) => el.id !== droppedElement.id && el.id !== overlappingElement!.id
            )
          );

          // Add the new compound as a draggable element
          setCompounds((prev) => [...prev, compound]);
        }
      } else {
        // Update the rect of the dropped element
        setElements((prev) =>
          prev.map((el) =>
            el.id === droppedElement.id ? { ...el, rect: droppedRect } : el
          )
        );
      }
    },
    [elements]
  );

  function createDraggable(el: Element) {
    const newArray = [...elements, { ...el, rect: undefined }];
    if (newArray.length === new Set(newArray.map((e) => e.id)).size) {
      setElements((prev) => [...prev, { ...el, rect: undefined }]);
    }
  }

  return (
    <div className="App flex w-screen h-screen">
      <div className="fixed top-0 left-0 z-40 w-64 border-r-2 border-white flex flex-col p-5 h-screen">
        <p className="text-3xl font-bold">Elements</p>
        <div className="flex flex-col gap-5 items-center justify-center h-full">
          {initialElements.map((element) => (
            <div
              key={element.id}
              className="w-32 border-2 border-white p-2 rounded-xl backdrop-blur-sm cursor-move select-none"
              onClick={() => createDraggable(element)}
            >
              {`${element.emoji} ${element.name}`}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-5 ml-64 h-screen w-screen" id="Canvas">
        {elements.map((element) => (
          <DraggableElement
            key={element.id}
            element={element}
            onDrop={handleElementDrop}
          />
        ))}
        {compounds.map((compound) => (
          <DraggableElement element={compound} onDrop={() => { }} />
        ))}
      </div>
    </div>
  );
}

export default App;
