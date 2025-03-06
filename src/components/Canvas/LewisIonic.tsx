"use client"

import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Circle, Group, Layer, Line, Stage, Text } from "react-konva";

import { AtomData, Molecule, ValidationMessage } from "@/types";
import { getValenceElectrons, isMetal } from "@/utils/elements";

// Constants for styling and layout
const STYLES = {
  atom: { radius: 30, fill: "white", stroke: "black", strokeWidth: 1 },
  electron: {
    radius: 6,
    fill: "gray",
    stroke: "black",
    strokeWidth: 0.5,
    draggingFill: "blue",
    hitboxSize: 30
  },
  bracket: {
    size: 45,
    strokeWidth: 2,
    donorColor: "#FF6B6B",   // Red for cations
    acceptorColor: "#4ECDC4", // Teal for anions
    neutralColor: "transparent"
  },
  text: { fontSize: 20, fontFamily: "Arial, monospace", width: 40, height: 40 },
  positions: {
    top: { x: 0, y: -30 },
    bottom: { x: 0, y: 30 },
    right: { x: 30, y: 0 },
    left: { x: -30, y: 0 }
  }
};

// Interface for electron being dragged
interface DraggingElectron {
  atomId: string;
  electronIndex: number;
  side: "top" | "right" | "bottom" | "left";
  sideIndex: number;
}

export function IonicBuilder({ currentMolecule, setValidMolecules }: {
  currentMolecule: Molecule,
  setValidMolecules: Dispatch<SetStateAction<{ [x: string]: boolean | undefined; }>>
}) {
  const [atomsData, setAtomsData] = useState<Record<string, AtomData>>({});
  const [validationMessages, setValidationMessages] = useState<ValidationMessage[]>([]);
  const [draggingElectron, setDraggingElectron] = useState<DraggingElectron | null>(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const stageRef = useRef<any>(null);

  // Initialize atoms with their correct valence electrons
  useEffect(() => {
    const initialAtomData = Object.fromEntries(
      currentMolecule.atoms.map(atom => {
        const element = atom.element.replace(/[0-9]/g, "");
        return [atom.id, { electrons: getValenceElectrons(element) }];
      })
    );
    setAtomsData(initialAtomData);
  }, [currentMolecule.atoms]);

  // Helper functions
  const getAtomData = useCallback((atomId: string): AtomData => (
    atomsData[atomId] || { electrons: 0 }
  ), [atomsData]);

  const getIdealElectronCount = useCallback((element: string): number => (
    element === "H" || element === "He" ? 2 : 8
  ), []);

  // Validate ionic structure
  const validateStructure = useCallback(() => {
    const messages: ValidationMessage[] = [];
    let totalCharge = 0;

    currentMolecule.atoms.forEach((atom) => {
      const element = atom.element.replace(/[0-9]/g, "");
      const originalValence = getValenceElectrons(element);
      const atomData = getAtomData(atom.id);
      const currentElectrons = atomData.electrons;
      const charge = originalValence - currentElectrons;
      const idealElectrons = getIdealElectronCount(element);

      totalCharge += charge;

      // Validate based on metal/non-metal status
      if (isMetal(element)) {
        if (currentElectrons !== 0 && currentElectrons !== idealElectrons) {
          messages.push({
            type: "error",
            atomId: atom.id,
            message: `${element} should have 0 or ${idealElectrons} electrons (currently has ${currentElectrons}).`
          });
        }
      } else if (currentElectrons !== idealElectrons) {
        messages.push({
          type: "error",
          atomId: atom.id,
          message: `${element} should have ${idealElectrons} electrons for a full shell (currently has ${currentElectrons}).`
        });
      }
    });

    if (totalCharge !== 0) {
      messages.push({
        type: "error",
        atomId: "molecule",
        message: `Total charge (${totalCharge}) must be zero for a stable ionic compound.`
      });
    }

    setValidationMessages(messages);
    setValidMolecules(prev => ({
      ...prev,
      [currentMolecule.formula]: messages.length === 0
    }));
  }, [atomsData, currentMolecule, getAtomData, getIdealElectronCount, setValidMolecules]);

  // Validate structure on load
  useEffect(() => {
    validateStructure();
  }, [atomsData]);

  // Event handlers for electron dragging
  const handleDragStart = useCallback((atomId: string, side: "top" | "right" | "bottom" | "left", sideIndex: number, electronIndex: number) => {
    if (stageRef.current) {
      const pos = stageRef.current.getPointerPosition();
      setDragPos(pos);
      setDraggingElectron({ atomId, side, sideIndex, electronIndex });
    }
  }, []);

  const handleDragMove = useCallback(() => {
    if (stageRef.current && draggingElectron) {
      setDragPos(stageRef.current.getPointerPosition());
    }
  }, [draggingElectron]);

  // Find atom at position (for electron drop)
  const findAtomAtPosition = useCallback((pos: { x: number, y: number }) => (
    currentMolecule.atoms.find(atom => {
      const dx = atom.position.x - pos.x;
      const dy = atom.position.y - pos.y;
      return Math.sqrt(dx * dx + dy * dy) <= STYLES.atom.radius;
    })
  ), [currentMolecule.atoms]);

  const handleDragEnd = useCallback(() => {
    if (!draggingElectron) return;

    const droppedAtom = findAtomAtPosition(dragPos);

    if (droppedAtom && droppedAtom.id !== draggingElectron.atomId) {
      // Transfer electron from one atom to another
      setAtomsData(prev => {
        const sourceAtomData = { ...prev[draggingElectron.atomId] };
        const targetAtomData = { ...prev[droppedAtom.id] };

        if (sourceAtomData.electrons > 0) {
          sourceAtomData.electrons--;
        }

        if (targetAtomData.electrons < 8) {
          targetAtomData.electrons = (targetAtomData.electrons || 0) + 1;
        } else {
          // Return the electron to the source if the target already has 8 electrons
          sourceAtomData.electrons++;
        }

        return {
          ...prev,
          [draggingElectron.atomId]: sourceAtomData,
          [droppedAtom.id]: targetAtomData
        };
      });
    }

    setDraggingElectron(null);
  }, [draggingElectron, dragPos, findAtomAtPosition]);

  // Render brackets for an atom
  const renderBrackets = useCallback((x: number, y: number, color: string) => (
    <>
      {/* Left bracket */}
      <Line
        points={[
          x - STYLES.bracket.size, y - STYLES.bracket.size,
          x - STYLES.bracket.size + 8, y - STYLES.bracket.size,
          x - STYLES.bracket.size, y - STYLES.bracket.size,
          x - STYLES.bracket.size, y + STYLES.bracket.size,
          x - STYLES.bracket.size + 8, y + STYLES.bracket.size
        ]}
        stroke={color}
        strokeWidth={STYLES.bracket.strokeWidth}
      />
      {/* Right bracket */}
      <Line
        points={[
          x + STYLES.bracket.size, y - STYLES.bracket.size,
          x + STYLES.bracket.size - 8, y - STYLES.bracket.size,
          x + STYLES.bracket.size, y - STYLES.bracket.size,
          x + STYLES.bracket.size, y + STYLES.bracket.size,
          x + STYLES.bracket.size - 8, y + STYLES.bracket.size
        ]}
        stroke={color}
        strokeWidth={STYLES.bracket.strokeWidth}
      />
    </>
  ), []);

  // Render atoms with memoization for better performance
  const renderAtoms = useMemo(() => {
    return currentMolecule.atoms.map((atom) => {
      const element = atom.element.replace(/[0-9]/g, "");
      const data = getAtomData(atom.id);
      const electrons = data.electrons;
      const originalValence = getValenceElectrons(element);

      // Determine if atom is donor or acceptor
      const isDonor = electrons < originalValence;
      const isAcceptor = electrons > originalValence;
      const bracketColor = isDonor
        ? STYLES.bracket.donorColor
        : isAcceptor
          ? STYLES.bracket.acceptorColor
          : STYLES.bracket.neutralColor;

      // Simple fixed positioning for electrons on each side
      const sides: ("top" | "right" | "bottom" | "left")[] = ["top", "right", "bottom", "left"];
      const maxPerSide = 2; // Maximum 2 electrons per side

      return (
        <Group key={atom.id}>
          {/* Brackets */}
          {renderBrackets(atom.position.x, atom.position.y, bracketColor)}

          {/* Charge indicator - only show when there's a charge */}
          {(isDonor || isAcceptor) && (
            <Text
              x={atom.position.x + STYLES.bracket.size - 25}
              y={atom.position.y - STYLES.bracket.size + 5}
              text={isDonor ? `+${originalValence - electrons}` : `-${electrons - originalValence}`}
              fontSize={16}
              fontFamily="Courier New"
              fill={bracketColor}
              fontStyle="bold"
            />
          )}

          {/* Atom circle */}
          <Circle
            x={atom.position.x}
            y={atom.position.y}
            radius={STYLES.atom.radius}
            fill={STYLES.atom.fill}
            stroke={STYLES.atom.stroke}
            strokeWidth={STYLES.atom.strokeWidth}
          />

          {/* Atom symbol */}
          <Text
            x={atom.position.x - STYLES.text.width / 2}
            y={atom.position.y - STYLES.text.height / 2}
            text={atom.element}
            fontSize={STYLES.text.fontSize}
            fontFamily={STYLES.text.fontFamily}
            width={STYLES.text.width}
            height={STYLES.text.height}
            fill="black"
            align="center"
            verticalAlign="middle"
          />

          {/* Render electrons on all sides in a fixed pattern */}
          {sides.map((side, sideIndex) => {
            // Calculate how many electrons to show on this side
            const electronCount = Math.min(
              maxPerSide,
              Math.max(0, electrons - sideIndex * maxPerSide)
            );

            if (electronCount <= 0) return null;

            return (
              <Group key={side}>
                {Array.from({ length: electronCount }).map((_, i) => {
                  const offsetX = STYLES.positions[side].x;
                  const offsetY = STYLES.positions[side].y;
                  const spacing = i === 0 ? -10 : 10;

                  // Adjust spacing based on side
                  const spacingX = side === "top" || side === "bottom" ? spacing : 0;
                  const spacingY = side === "left" || side === "right" ? spacing : 0;

                  // Check if this electron is being dragged
                  const isBeingDragged =
                    draggingElectron &&
                    draggingElectron.atomId === atom.id &&
                    draggingElectron.side === side &&
                    draggingElectron.sideIndex === i;

                  if (isBeingDragged) return null;

                  return (
                    <Circle
                      key={i}
                      x={atom.position.x + offsetX + spacingX}
                      y={atom.position.y + offsetY + spacingY}
                      radius={STYLES.electron.radius}
                      fill={STYLES.electron.fill}
                      stroke={STYLES.electron.stroke}
                      strokeWidth={STYLES.electron.strokeWidth}
                      onMouseDown={() => handleDragStart(atom.id, side, i, sideIndex * maxPerSide + i)}
                      onTouchStart={() => handleDragStart(atom.id, side, i, sideIndex * maxPerSide + i)}
                      hitStrokeWidth={STYLES.electron.hitboxSize}
                    />
                  );
                })}
              </Group>
            );
          })}
        </Group>
      );
    });
  }, [currentMolecule.atoms, getAtomData, draggingElectron, handleDragStart, renderBrackets]);

  // The rest of the component remains unchanged
  // Create the status table data
  const atomStatusData = useMemo(() => (
    currentMolecule.atoms.map(atom => {
      const element = atom.element.replace(/[0-9]/g, "");
      const atomData = getAtomData(atom.id);
      const valence = getValenceElectrons(element);
      const current = atomData.electrons;
      const charge = valence - current;
      const idealElectrons = getIdealElectronCount(element);
      const isStable = current === 0 || current === idealElectrons;

      return {
        id: atom.id,
        element: atom.element,
        charge,
        current,
        idealElectrons,
        isStable,
      };
    })
  ), [currentMolecule.atoms, getAtomData, getIdealElectronCount]);

  return (
    <div className="bg-base-300 flex flex-col md:flex-row gap-3 md:p-3 w-min items-center justify-center rounded-lg shadow-lg">
      {/* Playground */}
      <div className="Playground">
        <Stage
          ref={stageRef}
          width={360}
          height={360}
          className="bg-zinc-600 border border-zinc-800 rounded-xl overflow-hidden shadow-lg"
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <Layer>
            {renderAtoms}

            {/* Render dragging electron */}
            {draggingElectron && (
              <Circle
                x={dragPos.x}
                y={dragPos.y}
                radius={STYLES.electron.radius}
                fill={STYLES.electron.draggingFill}
                stroke={STYLES.electron.stroke}
                strokeWidth={STYLES.electron.strokeWidth}
              />
            )}
          </Layer>
        </Stage>
      </div>



      {/* Validation panel */}
      <div className="pb-5 md:pb-0 h-full w-[20rem] min-w-xs">
        {/* Instructions */}
        <div className="my-3 p-2 bg-blue-100 border border-blue-300 rounded">
          <p className="text-sm text-blue-800">
            <strong>Instructions:</strong> Drag electrons (grey dots) between atoms to try to create a valid structure!
          </p>
        </div>

        <h3 className="font-bold mb-2">Status:</h3>
        {validationMessages.length === 0 ? (
          <div className="text-green-600">✓ Valid structure!</div>
        ) : (
          validationMessages.map((msg, index) => (
            <div
              key={index}
              className={`text-sm ${msg.type === "error" ? "text-red-500" : "text-yellow-600"}`}
            >
              <strong>{msg.atomId}</strong>: {msg.message}
            </div>
          ))
        )}

        {/* Ionic Structure Status Table */}
        <div className="mt-4">
          <h4 className="font-bold mb-2">Ionic Structure Status:</h4>
          <table className="min-w-full bg-base-200 border border-zinc-600 shadow-lg">
            <thead>
              <tr>
                <th className="py-2 px-3 border border-zinc-600">Element</th>
                <th className="py-2 px-3 border border-zinc-600">Charge</th>
              </tr>
            </thead>
            <tbody>
              {atomStatusData.map(atom => (
                <tr key={atom.id}>
                  <td className="py-2 px-3 text-center border border-zinc-600 font-medium">
                    {atom.element} ({atom.id})
                  </td>
                  <td className={`py-2 px-3 text-center border border-zinc-600 
                    ${atom.charge > 0 ? 'text-red-600 font-bold' :
                      atom.charge < 0 ? 'text-blue-600 font-bold' : 'text-green-600 font-bold'}`}>
                    {atom.charge > 0 ? `+${atom.charge}` : atom.charge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}