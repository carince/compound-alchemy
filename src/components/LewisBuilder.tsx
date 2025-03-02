"use client"

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Stage, Layer, Circle, Line, Text, Group } from "react-konva";
import { AtomData, BondData, MoleculeWithNames, ValidationMessage } from "@/types";
import { getElementName, getValenceElectrons } from "@/utils/elements";
import { Grid } from "@/components/Canvas/Grid";

export function LEDSBuilder({ currentMolecule, setValidMolecules }: {
    currentMolecule: MoleculeWithNames,
    setValidMolecules: Dispatch<SetStateAction<{
        [x: string]: boolean | undefined;
    }>>
}) {
    const [atomsData, setAtomsData] = useState<Record<string, AtomData>>({});
    const [bondsData, setBondsData] = useState<Record<string, BondData>>({});
    const [validationMessages, setValidationMessages] = useState<ValidationMessage[]>([]);

    const handleAtomClick = (atomId: string) => {
        setAtomsData((prev) => {
            const current = prev[atomId] || { electrons: 0 };
            const maxElectrons = 8;
            const newElectrons =
                current.electrons < maxElectrons ? current.electrons + 1 : 0;

            return {
                ...prev,
                [atomId]: {
                    electrons: newElectrons,
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
        return atomsData[atomId] || { electrons: 0 };
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
            if (possibleValences !== totalValence) {
                messages.push({
                    type: "error",
                    atomId: atom.id,
                    message: `${element} only has ${totalValence} valence electrons. It should have ${possibleValences}!`,
                });
            }
        });

        setValidationMessages(messages);
        setValidMolecules((prev) => {
            return {
                ...prev,
                [currentMolecule.name]: messages.length === 0,
            }
        })
    };

    // Call validation when atom or bond data changes
    useEffect(() => {
        validateStructure();
    }, [atomsData, bondsData, currentMolecule.name]);

    return (
        <div className="bg-base-200 flex flex-col md:flex-row gap-5 p-5 items-center justify-center rounded-lg shadow-lg border border-zinc-800">
            {/* Playground */}
            <div className="Playground">
                <Stage
                    width={400}
                    height={300}
                    className="bg-zinc-400 border border-zinc-800 rounded-xl overflow-hidden shadow-lg"
                >
                    <Grid />
                    <Layer>
                        {/* Render bonds */}
                        {currentMolecule.bonds.map(([fromId, toId]) => {
                            const fromAtom = currentMolecule.atoms.find((a) => a.id === fromId)!;
                            const toAtom = currentMolecule.atoms.find((a) => a.id === toId)!;
                            const bondKey = `${fromId}-${toId}`;
                            const bondData = getBondData(bondKey);

                            return (
                                <Group
                                    key={bondKey}
                                    onClick={() => handleBondClick(bondKey)}
                                    onTap={() => handleBondClick(bondKey)}
                                >
                                    <Line
                                        points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                                        stroke="transparent"
                                        strokeWidth={20}
                                    />
                                    {bondData.type === "single" && (
                                        <Line
                                            points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                                            stroke="black"
                                            strokeWidth={2}
                                        />
                                    )}
                                    {bondData.type === "double" && (
                                        <>
                                            <Line
                                                points={[fromAtom.position.x, fromAtom.position.y - 3, toAtom.position.x, toAtom.position.y - 3]}
                                                stroke="black"
                                                strokeWidth={2}
                                            />
                                            <Line
                                                points={[fromAtom.position.x, fromAtom.position.y + 3, toAtom.position.x, toAtom.position.y + 3]}
                                                stroke="black"
                                                strokeWidth={2}
                                            />
                                        </>
                                    )}
                                    {bondData.type === "triple" && (
                                        <>
                                            <Line
                                                points={[fromAtom.position.x, fromAtom.position.y - 5, toAtom.position.x, toAtom.position.y - 5]}
                                                stroke="black"
                                                strokeWidth={2}
                                            />
                                            <Line
                                                points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                                                stroke="black"
                                                strokeWidth={2}
                                            />
                                            <Line
                                                points={[fromAtom.position.x, fromAtom.position.y + 5, toAtom.position.x, toAtom.position.y + 5]}
                                                stroke="black"
                                                strokeWidth={2}
                                            />
                                        </>
                                    )}
                                </Group>
                            );
                        })}

                        {/* Render atoms and electrons */}
                        {currentMolecule.atoms.map((atom) => {
                            const data = getAtomData(atom.id);

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
                                        radius={25}
                                        fill="white"
                                        stroke="black"
                                        strokeWidth={1}
                                    />

                                    {/* Atom symbol */}
                                    <Text
                                        x={atom.position.x - 20}
                                        y={atom.position.y - 20}
                                        text={atom.element}
                                        fontSize={16}
                                        fontFamily="Arial"
                                        width={40}
                                        height={40}
                                        fill="black"
                                        align="center"
                                        verticalAlign="middle"
                                    />

                                    {/* Render electrons on all sides */}
                                    {(["top", "right", "bottom", "left"] as const).map((side, index) => {
                                        const electronsOnSide = Math.min(
                                            2,
                                            Math.max(0, data.electrons - index * 2)
                                        );

                                        return (
                                            <Group key={side}>
                                                {Array.from({ length: electronsOnSide }).map((_, i) => {
                                                    const offsetX = side === "left" ? -24 : side === "right" ? 24 : 0;
                                                    const offsetY = side === "top" ? -24 : side === "bottom" ? 24 : 0;
                                                    const spacing = i === 0 ? -6 : 6;

                                                    return (
                                                        <Circle
                                                            key={i}
                                                            x={atom.position.x + offsetX + (side === "top" || side === "bottom" ? spacing : 0)}
                                                            y={atom.position.y + offsetY + (side === "left" || side === "right" ? spacing : 0)}
                                                            radius={4}
                                                            fill="gray"
                                                            stroke="black"
                                                            strokeWidth={0.5}
                                                        />
                                                    );
                                                })}
                                            </Group>
                                        );
                                    })}
                                </Group>
                            );
                        })}
                    </Layer>
                </Stage>
            </div>

            {/* Validation messages */}
            <div className="h-full w-[20rem] bg-base-100 p-4 rounded-lg shadow-lg border border-zinc-800 min-w-xs">
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
                            {Object.values(
                                currentMolecule.atoms.reduce((acc, atom) => {
                                    const atomData = getAtomData(atom.id);
                                    const element = atom.element.replace(/[0-9]/g, "");
                                    const possibleValences = getValenceElectrons(element);
                                    const loneElectrons = atomData.electrons;

                                    // Calculate bond orders sum
                                    let bondOrdersSum = 0;
                                    atom.bonds.forEach((connectedId) => {
                                        const bondKey = [atom.id, connectedId].sort().join("-");
                                        const bondData = bondsData[bondKey] || { type: "single" };
                                        bondOrdersSum +=
                                            bondData.type === "single" ? 1 : bondData.type === "double" ? 2 : 3;
                                    });

                                    const totalValence = loneElectrons + bondOrdersSum;
                                    const formalCharge = possibleValences - totalValence;

                                    if (!acc[element]) {
                                        acc[element] = { element, formalCharge, count: 0 };
                                    }
                                    acc[element].formalCharge += formalCharge;
                                    acc[element].count += 1;

                                    return acc;
                                }, {} as Record<string, { element: string; formalCharge: number; count: number }>)
                            ).map(({ element, formalCharge, count }) => (
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