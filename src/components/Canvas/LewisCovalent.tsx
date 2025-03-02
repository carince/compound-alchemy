"use client"

import { useState, useEffect, useCallback, useMemo, Dispatch, SetStateAction } from "react";
import { Stage, Layer, Circle, Line, Text, Group } from "react-konva";
import { AtomData, BondData, MoleculeWithNames, ValidationMessage } from "@/types";
import { getElementName, getValenceElectrons } from "@/utils/elements";
import { Grid } from "@/components/Canvas/Grid";

// Constants for styling and layout
const STYLES = {
    atom: { radius: 30, fill: "white", stroke: "black", strokeWidth: 1 },
    electron: { radius: 6, fill: "gray", stroke: "black", strokeWidth: 0.5 },
    text: { fontSize: 20, fontFamily: "Arial", width: 40, height: 40 },
    bond: { clickWidth: 20, strokeWidth: 2, color: "black", spacing: { single: 0, double: 3, triple: 5 } },
    positions: {
        top: { x: 0, y: -40 },
        bottom: { x: 0, y: 40 },
        right: { x: 40, y: 0 },
        left: { x: -40, y: 0 }
    }
};

export function LewisCovalent({ currentMolecule, setValidMolecules }: {
    currentMolecule: MoleculeWithNames,
    setValidMolecules: Dispatch<SetStateAction<{ [x: string]: boolean | undefined; }>>
}) {
    const [atomsData, setAtomsData] = useState<Record<string, AtomData>>({});
    const [bondsData, setBondsData] = useState<Record<string, BondData>>({});
    const [validationMessages, setValidationMessages] = useState<ValidationMessage[]>([]);

    const handleAtomClick = useCallback((atomId: string) => {
        setAtomsData(prev => {
            const current = prev[atomId] || { electrons: 0 };
            const maxElectrons = 8;
            return {
                ...prev,
                [atomId]: { electrons: (current.electrons < maxElectrons) ? current.electrons + 1 : 0 }
            };
        });
    }, []);

    const handleBondClick = useCallback((bondKey: string) => {
        setBondsData(prev => {
            const current = prev[bondKey] || { type: "single" };
            const nextType = current.type === "single" ? "double" : current.type === "double" ? "triple" : "single";
            return { ...prev, [bondKey]: { type: nextType } };
        });
    }, []);

    const getAtomData = useCallback((atomId: string): AtomData => (
        atomsData[atomId] || { electrons: 0 }
    ), [atomsData]);

    const getBondData = useCallback((bondKey: string): BondData => (
        bondsData[bondKey] || { type: "single" }
    ), [bondsData]);

    const validateStructure = useCallback(() => {
        const messages: ValidationMessage[] = [];

        currentMolecule.atoms.forEach(atom => {
            const element = atom.element.replace(/[0-9]/g, "");
            const possibleValences = getValenceElectrons(element);
            const atomData = getAtomData(atom.id);
            const loneElectrons = atomData.electrons;

            // Fundamental validation
            if (loneElectrons % 2 !== 0) {
                messages.push({
                    type: "error",
                    atomId: atom.id,
                    message: `Odd number of lone electrons (${loneElectrons}) - electrons must pair up!`
                });
            }

            // Calculate bond orders sum
            let bondOrdersSum = 0;
            atom.bonds.forEach(connectedId => {
                const bondKey = [atom.id, connectedId].sort().join("-");
                const bondData = getBondData(bondKey);
                bondOrdersSum += bondData.type === "single" ? 1 : bondData.type === "double" ? 2 : 3;
            });

            const totalValence = loneElectrons + bondOrdersSum;

            // Check against possible valences
            if (possibleValences !== totalValence) {
                messages.push({
                    type: "error",
                    atomId: atom.id,
                    message: `${element} only has ${totalValence} valence electrons. It should have ${possibleValences}!`
                });
            }
        });

        setValidationMessages(messages);
        setValidMolecules(prev => ({
            ...prev,
            [currentMolecule.name]: messages.length === 0
        }));
    }, [atomsData, bondsData, currentMolecule, getAtomData, getBondData, setValidMolecules]);

    // Call validation when atom or bond data changes
    useEffect(() => {
        validateStructure();
    }, [atomsData, bondsData, validateStructure]);

    // Render a bond between atoms
    const renderBond = useCallback(([fromId, toId]: string[]) => {
        const fromAtom = currentMolecule.atoms.find(a => a.id === fromId)!;
        const toAtom = currentMolecule.atoms.find(a => a.id === toId)!;
        const bondKey = [fromId, toId].sort().join("-");
        const bondData = getBondData(bondKey);
        const { type } = bondData;

        return (
            <Group
                key={bondKey}
                onClick={() => handleBondClick(bondKey)}
                onTap={() => handleBondClick(bondKey)}
            >
                {/* Invisible wider line for better click detection */}
                <Line
                    points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                    stroke="transparent"
                    strokeWidth={STYLES.bond.clickWidth}
                />

                {/* Actual visible bond lines */}
                {type === "single" && (
                    <Line
                        points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                        stroke={STYLES.bond.color}
                        strokeWidth={STYLES.bond.strokeWidth}
                    />
                )}
                {type === "double" && (
                    <>
                        <Line
                            points={[
                                fromAtom.position.x,
                                fromAtom.position.y - STYLES.bond.spacing.double,
                                toAtom.position.x,
                                toAtom.position.y - STYLES.bond.spacing.double
                            ]}
                            stroke={STYLES.bond.color}
                            strokeWidth={STYLES.bond.strokeWidth}
                        />
                        <Line
                            points={[
                                fromAtom.position.x,
                                fromAtom.position.y + STYLES.bond.spacing.double,
                                toAtom.position.x,
                                toAtom.position.y + STYLES.bond.spacing.double
                            ]}
                            stroke={STYLES.bond.color}
                            strokeWidth={STYLES.bond.strokeWidth}
                        />
                    </>
                )}
                {type === "triple" && (
                    <>
                        <Line
                            points={[
                                fromAtom.position.x,
                                fromAtom.position.y - STYLES.bond.spacing.triple,
                                toAtom.position.x,
                                toAtom.position.y - STYLES.bond.spacing.triple
                            ]}
                            stroke={STYLES.bond.color}
                            strokeWidth={STYLES.bond.strokeWidth}
                        />
                        <Line
                            points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                            stroke={STYLES.bond.color}
                            strokeWidth={STYLES.bond.strokeWidth}
                        />
                        <Line
                            points={[
                                fromAtom.position.x,
                                fromAtom.position.y + STYLES.bond.spacing.triple,
                                toAtom.position.x,
                                toAtom.position.y + STYLES.bond.spacing.triple
                            ]}
                            stroke={STYLES.bond.color}
                            strokeWidth={STYLES.bond.strokeWidth}
                        />
                    </>
                )}
            </Group>
        );
    }, [currentMolecule.atoms, getBondData, handleBondClick]);

    // Distribute electrons evenly around an atom
    const distributeElectrons = useCallback((totalElectrons: number, sides = 4) => {
        const distribution = Array(sides).fill(0);
        for (let i = 0; i < totalElectrons; i++) {
            // Find side with fewest electrons
            const minIndex = distribution.indexOf(Math.min(...distribution));
            distribution[minIndex]++;
        }
        return distribution;
    }, []);

    // Calculate molecule charge
    const moleculeChargeData = useMemo(() => (
        Object.values(
            currentMolecule.atoms.reduce((acc, atom) => {
                const atomData = getAtomData(atom.id);
                const element = atom.element.replace(/[0-9]/g, "");
                const possibleValences = getValenceElectrons(element);
                const loneElectrons = atomData.electrons;

                // Calculate bond orders sum
                let bondOrdersSum = 0;
                atom.bonds.forEach(connectedId => {
                    const bondKey = [atom.id, connectedId].sort().join("-");
                    const bondData = getBondData(bondKey);
                    bondOrdersSum += bondData.type === "single" ? 1 : bondData.type === "double" ? 2 : 3;
                });

                const totalValence = loneElectrons + bondOrdersSum;
                const formalCharge = possibleValences - totalValence;

                // Group by element
                if (!acc[element]) {
                    acc[element] = { element, formalCharge, count: 0 };
                }
                acc[element].formalCharge += formalCharge;
                acc[element].count += 1;

                return acc;
            }, {} as Record<string, { element: string; formalCharge: number; count: number }>)
        )
    ), [currentMolecule.atoms, getAtomData, getBondData]);

    // Render atoms with electrons - using simple fixed positioning
    const renderAtoms = useMemo(() => (
        currentMolecule.atoms.map(atom => {
            const data = getAtomData(atom.id);
            const electrons = data.electrons;

            // Simple fixed positioning for electrons on each side
            const sides: ("top" | "right" | "bottom" | "left")[] = ["top", "bottom", "left", "right"];
            const maxPerSide = 2; // Maximum 2 electrons per side

            return (
                <Group
                    key={atom.id}
                    onClick={() => handleAtomClick(atom.id)}
                    onTap={() => handleAtomClick(atom.id)}
                >
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
                        x={atom.position.x - 20}
                        y={atom.position.y - 20}
                        text={atom.element}
                        fontSize={STYLES.text.fontSize}
                        fontFamily={STYLES.text.fontFamily}
                        width={STYLES.text.width}
                        height={STYLES.text.height}
                        fill="black"
                        align="center"
                        verticalAlign="middle"
                    />

                    {/* Render electrons on all sides */}
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

                                    return (
                                        <Circle
                                            key={i}
                                            x={atom.position.x + offsetX + spacingX}
                                            y={atom.position.y + offsetY + spacingY}
                                            radius={STYLES.electron.radius}
                                            fill={STYLES.electron.fill}
                                            stroke={STYLES.electron.stroke}
                                            strokeWidth={STYLES.electron.strokeWidth}
                                        />
                                    );
                                })}
                            </Group>
                        );
                    })}
                </Group>
            );
        })
    ), [currentMolecule.atoms, getAtomData, handleAtomClick]);

    return (
        <div className="bg-base-200 flex flex-col md:flex-row p-5 gap-5 w-min items-center justify-center rounded-lg shadow-lg border border-zinc-800">
            {/* Playground */}
            <div className="Playground">
                <Stage
                    width={360}
                    height={300}
                    className="bg-zinc-400 border border-zinc-800 rounded-xl overflow-hidden shadow-lg"
                >
                    <Grid />
                    <Layer>
                        {/* Render bonds */}
                        {currentMolecule.bonds.map(renderBond)}

                        {/* Render atoms */}
                        {renderAtoms}
                    </Layer>
                </Stage>
            </div>

            {/* Validation messages */}
            <div className="h-full w-[20rem] min-w-xs">
                <h3 className="font-bold mb-2">Helper:</h3>
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

                {/* Molecule charge table */}
                <div className="mt-4">
                    <h4 className="font-bold mb-2">Molecule Charge:</h4>
                    <table className="min-w-full bg-base-200 border border-zinc-600 shadow-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border border-zinc-600">Atom</th>
                                <th className="py-2 px-4 border border-zinc-600">Charge</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moleculeChargeData.map(({ element, formalCharge, count }) => (
                                <tr key={element}>
                                    <td className="py-2 px-1 text-center border border-zinc-600">{getElementName(element)} × {count}</td>
                                    <td className="py-2 px-1 text-center border border-zinc-600">{formalCharge}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}