import { AtomConfig, AtomData, BondData, Molecule, ValidationMessage } from "@/types";
import { useState, useEffect } from "react";


const molecules: Record<string, Molecule> = {
  fiveAtoms: {
    atoms: [
      {
        id: "C1",
        element: "C",
        position: { x: 125, y: 125 },
        bonds: ["O1", "O2", "O3", "O4"],
      },
      { id: "O1", element: "O1", position: { x: 50, y: 50 }, bonds: ["C1"] },
      { id: "O2", element: "O2", position: { x: 200, y: 50 }, bonds: ["C1"] },
      { id: "O3", element: "O3", position: { x: 50, y: 200 }, bonds: ["C1"] },
      { id: "O4", element: "O4", position: { x: 200, y: 200 }, bonds: ["C1"] },
    ],
    bonds: [
      ["C1", "O1"],
      ["C1", "O2"],
      ["C1", "O3"],
      ["C1", "O4"],
    ],
  },
  O2: {
    atoms: [
      {
        id: "O1",
        element: "O",
        position: { x: 100, y: 125 },
        bonds: ["O2"],
      },
      {
        id: "O2",
        element: "O",
        position: { x: 200, y: 125 },
        bonds: ["O1"],
      },
    ],
    bonds: [
      ["O1", "O2"],
    ],
  },
  // Add more molecules here
};

const getValenceElectrons = (element: string): number[] => {
  const baseElement = element.replace(/[0-9]/g, ""); // Remove numbers from element names
  switch (baseElement) {
    case "H":
      return [1];
    case "C":
      return [4];
    case "O":
      return [6]; // Common valence states: 6 (but could be others in different compounds)
    case "N":
      return [5];
    case "F":
      return [7];
    case "Cl":
      return [7];
    default:
      return [];
  }
};

const LEDSGridBuilder = () => {
  const [currentMolecule] = useState<Molecule>(molecules.O2);
  const [atomsData, setAtomsData] = useState<Record<string, AtomData>>({});
  const [bondsData, setBondsData] = useState<Record<string, BondData>>({});
  const [validationMessages, setValidationMessages] = useState<ValidationMessage[]>([]);

  const getBondDirection = (
    from: AtomConfig,
    to: AtomConfig
  ): "top" | "right" | "bottom" | "left" => {
    const dx = to.position.x - from.position.x;
    const dy = to.position.y - from.position.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? "right" : "left";
    }
    return dy > 0 ? "bottom" : "top";
  };

  // Restore getOccupiedSides
  const getOccupiedSides = (
    atom: AtomConfig
  ): ("top" | "right" | "bottom" | "left")[] => {
    return atom.bonds.map((connectedId) => {
      const connectedAtom = currentMolecule.atoms.find(
        (a) => a.id === connectedId
      )!;
      return getBondDirection(atom, connectedAtom);
    });
  };

  const handleAtomClick = (atomId: string) => {
    setAtomsData((prev) => {
      const current = prev[atomId] || { electrons: 0, occupiedSides: [] };
      const maxElectrons = 6;
      const newElectrons =
        current.electrons < maxElectrons ? current.electrons + 1 : 0;

      return {
        ...prev,
        [atomId]: {
          electrons: newElectrons,
          occupiedSides: current.occupiedSides,
        },
      };
    });
  };

  const handleBondClick = (bondKey: string) => {
    setBondsData((prev) => {
      const current = prev[bondKey] || { type: "single" };
      const nextType =
        current.type === "single"
          ? "double"
          : current.type === "double"
            ? "triple"
            : "single";

      return {
        ...prev,
        [bondKey]: { type: nextType },
      };
    });
  };

  const getAtomData = (atomId: string): AtomData => {
    return atomsData[atomId] || { electrons: 0, occupiedSides: [] };
  };

  const getBondData = (bondKey: string): BondData => {
    return bondsData[bondKey] || { type: "single" };
  };

  const validateStructure = () => {
    const messages: ValidationMessage[] = [];

    currentMolecule.atoms.forEach((atom) => {
      const element = atom.element.replace(/[0-9]/g, "");
      const possibleValences = getValenceElectrons(element);
      const atomData = getAtomData(atom.id);
      const loneElectrons = atomData.electrons;

      // Fundamental validation
      if (loneElectrons % 2 !== 0) {
        messages.push({
          type: "error",
          atomId: atom.id,
          message: `Odd number of lone electrons (${loneElectrons}) - electrons must pair up!`,
        });
      }

      // Calculate bond orders sum
      let bondOrdersSum = 0;
      atom.bonds.forEach((connectedId) => {
        const bondKey = [atom.id, connectedId].sort().join("-");
        const bondData = bondsData[bondKey] || { type: "single" };
        bondOrdersSum +=
          bondData.type === "single" ? 1 : bondData.type === "double" ? 2 : 3;
      });

      const totalValence = loneElectrons + bondOrdersSum;

      // Check against possible valences
      if (!possibleValences.includes(totalValence)) {
        messages.push({
          type: "error",
          atomId: atom.id,
          message: `${element} has ${totalValence} valence electrons (common: ${possibleValences.join(
            "/"
          )})`,
        });
      }
    });

    setValidationMessages(messages);
  };

  useEffect(() => {
    validateStructure();
  }, [atomsData, bondsData]);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {/* Validation messages */}
      <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
        <h3 className="font-bold mb-2">Structure Feedback:</h3>
        {validationMessages.length === 0 ? (
          <div className="text-green-600">✓ Valid structure!</div>
        ) : (
          validationMessages.map((msg, index) => (
            <div
              key={index}
              className={`text-sm ${msg.type === "error" ? "text-red-600" : "text-yellow-600"}`}
            >
              <strong>{msg.atomId}</strong>: {msg.message}
            </div>
          ))
        )}
      </div>

      {/* Render bonds */}
      {currentMolecule.bonds.map(([fromId, toId]) => {
        const fromAtom = currentMolecule.atoms.find((a) => a.id === fromId)!;
        const toAtom = currentMolecule.atoms.find((a) => a.id === toId)!;
        const fromCenter = {
          x: fromAtom.position.x + 27,
          y: fromAtom.position.y + 27,
        };
        const toCenter = {
          x: toAtom.position.x + 27,
          y: toAtom.position.y + 27,
        };
        const bondKey = `${fromId}-${toId}`;
        const bondData = getBondData(bondKey);

        return (
          <div
            key={bondKey}
            onClick={() => handleBondClick(bondKey)}
            style={{
              position: "absolute",
              left: fromCenter.x,
              top: fromCenter.y,
              width: Math.sqrt(
                Math.pow(toCenter.x - fromCenter.x, 2) +
                Math.pow(toCenter.y - fromCenter.y, 2)
              ),
              transform: `rotate(${Math.atan2(
                toCenter.y - fromCenter.y,
                toCenter.x - fromCenter.x
              )}rad)`,
              transformOrigin: "0 0",
              cursor: "pointer",
            }}
          >
            {bondData.type === "single" && (
              <div className="absolute h-[2px] bg-black w-full" />
            )}
            {bondData.type === "double" && (
              <>
                <div className="absolute h-[2px] bg-black top-[-3px] w-full" />
                <div className="absolute h-[2px] bg-black top-[3px] w-full" />
              </>
            )}
            {bondData.type === "triple" && (
              <>
                <div className="absolute h-[2px] bg-black top-[-5px] w-full" />
                <div className="absolute h-[2px] bg-black w-full" />
                <div className="absolute h-[2px] bg-black top-[5px] w-full" />
              </>
            )}
          </div>
        );
      })}

      {/* Render atoms and electrons */}
      {currentMolecule.atoms.map((atom) => {
        const data = getAtomData(atom.id);
        const occupiedSides = getOccupiedSides(atom);
        const availableSides = (
          ["top", "right", "bottom", "left"] as const
        ).filter((side) => !occupiedSides.includes(side));

        return (
          <div
            key={atom.id}
            className="absolute w-14 h-14 rounded-full bg-white border-black border-[0.5px]"
            style={{
              left: atom.position.x,
              top: atom.position.y,
            }}
            onClick={() => handleAtomClick(atom.id)}
          >
            <p className="w-full h-full flex justify-center items-center select-none">
              {atom.element}
            </p>

            {/* Render electrons */}
            {availableSides.map((side, index) => {
              const electronsOnSide = Math.min(
                2,
                Math.max(0, data.electrons - index * 2)
              );

              return (
                <div
                  key={side}
                  className="absolute flex gap-1"
                  style={{
                    ...getElectronPosition(side),
                    flexDirection:
                      side === "top" || side === "bottom" ? "row" : "column",
                  }}
                >
                  {Array.from({ length: electronsOnSide }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-zinc-500 border-[0.2px] rounded-full"
                    />
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// Helper function for electron positioning
const getElectronPosition = (side: string): React.CSSProperties => {
  switch (side) {
    case "top":
      return { top: "-3px", left: "50%", transform: "translateX(-50%)" };
    case "right":
      return { right: "-3px", top: "50%", transform: "translateY(-50%)" };
    case "bottom":
      return { bottom: "-3px", left: "50%", transform: "translateX(-50%)" };
    case "left":
      return { left: "-3px", top: "50%", transform: "translateY(-50%)" };
    default:
      return {};
  }
};

export default LEDSGridBuilder;