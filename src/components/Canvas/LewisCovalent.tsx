"use client"

import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { Circle, Group, Layer, Line, Stage, Text } from "react-konva";

import { AtomData, BondData, Molecule, ValidationMessage } from "@/types";
import { getElementName, getValenceElectrons } from "@/utils/elements";

// Constants for styling and layout
const STYLES = {
    atom: { radius: 30, fill: "white", stroke: "black", strokeWidth: 1 },
    electron: { radius: 6, fill: "gray", stroke: "black", strokeWidth: 0.5 },
    text: { fontSize: 20, fontFamily: "Arial", width: 40, height: 40 },
    bond: { clickWidth: 20, strokeWidth: 2, color: "black", spacing: { single: 0, double: 3, triple: 5 } },
    positions: {
        top: { x: 0, y: -30 },
        bottom: { x: 0, y: 30 },
        right: { x: 30, y: 0 },
        left: { x: -30, y: 0 }
    }
};

// Helper function to determine max bond order between two elements
const getMaxBondOrder = (element1: string, element2: string): number => {
    // Remove any numbers from element symbols
    const cleanElement1 = element1.replace(/[0-9]/g, "");
    const cleanElement2 = element2.replace(/[0-9]/g, "");

    // Common groups
    const group1 = ['H', 'Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'];
    const group2 = ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'];
    const group17 = ['F', 'Cl', 'Br', 'I', 'At'];
    const group16 = ['O', 'S', 'Se', 'Te', 'Po'];
    const group15 = ['N', 'P', 'As', 'Sb', 'Bi'];
    const group14 = ['C', 'Si', 'Ge', 'Sn', 'Pb'];
    const transitionMetals = ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
        'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
        'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg'];

    // Carbon can form triple bonds with C, N; double bonds with O; single bonds with many elements
    if (cleanElement1 === 'C' && cleanElement2 === 'C') return 3;
    if ((cleanElement1 === 'C' && cleanElement2 === 'N') ||
        (cleanElement1 === 'N' && cleanElement2 === 'C')) return 3;
    if ((cleanElement1 === 'C' && cleanElement2 === 'O') ||
        (cleanElement1 === 'O' && cleanElement2 === 'C')) return 2;

    // Nitrogen can form triple bonds with C, N; double bonds with O
    if (cleanElement1 === 'N' && cleanElement2 === 'N') return 3;
    if ((cleanElement1 === 'N' && cleanElement2 === 'O') ||
        (cleanElement1 === 'O' && cleanElement2 === 'N')) return 2;

    // Oxygen typically forms at most double bonds
    if (cleanElement1 === 'O' && cleanElement2 === 'O') return 2; // O2 is special case with resonance

    // Group 17 (halogens) typically form single bonds
    if (group17.includes(cleanElement1) || group17.includes(cleanElement2)) return 1;

    // Group 1 (alkali metals) typically form single bonds
    if (group1.includes(cleanElement1) || group1.includes(cleanElement2)) return 1;

    // Group 2 (alkaline earth metals) typically form single bonds
    if (group2.includes(cleanElement1) || group2.includes(cleanElement2)) return 1;

    // P, S and other heavier elements have more complex bonding patterns
    if (cleanElement1 === 'P' || cleanElement2 === 'P') return 1; // P typically forms single bonds with many elements
    if (cleanElement1 === 'S' || cleanElement2 === 'S') {
        // S can form double bonds with O, but mostly single bonds with others
        if (cleanElement1 === 'O' || cleanElement2 === 'O') return 2;
        return 1;
    }

    // Default to single bond if no specific rule is defined
    return 1;
};

export function CovalentBuilder({ currentMolecule, setValidMolecules }: {
    currentMolecule: Molecule,
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

                // Get connected atom
                const connectedAtom = currentMolecule.atoms.find(a => a.id === connectedId)!;

                // Check if bond order is valid between these elements
                const maxBondOrder = getMaxBondOrder(atom.element, connectedAtom.element);
                const currentBondOrder = bondData.type === "single" ? 1 : bondData.type === "double" ? 2 : 3;

                if (currentBondOrder > maxBondOrder) {
                    messages.push({
                        type: "error",
                        atomId: atom.id,
                        message: `${atom.element} cannot form a ${bondData.type} bond with ${connectedAtom.element}. Maximum is ${maxBondOrder === 1 ? 'single' : maxBondOrder === 2 ? 'double' : 'triple'}.`
                    });
                }

                bondOrdersSum += currentBondOrder;
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
            [currentMolecule.formula]: messages.length === 0
        }));
    }, [atomsData, bondsData, currentMolecule, getAtomData, getBondData, setValidMolecules]);

    // Call validation when atom or bond data changes
    useEffect(() => {
        // Use a ref to track if we've validated this specific data already
        const timer = setTimeout(() => {
            validateStructure();
        }, 0);

        return () => clearTimeout(timer);
    }, [validateStructure]);

    // Update validation whenever atom or bond data changes
    useEffect(() => {
        const timer = setTimeout(() => {
            validateStructure();
        }, 0);

        return () => clearTimeout(timer);
    }, [Object.keys(atomsData).length, Object.values(atomsData).map(a => a.electrons).join(','),
    Object.keys(bondsData).length, Object.values(bondsData).map(b => b.type).join(',')]);

    // Render a bond between atoms
    const renderBond = useCallback(([fromId, toId]: string[]) => {
        const fromAtom = currentMolecule.atoms.find(a => a.id === fromId)!;
        const toAtom = currentMolecule.atoms.find(a => a.id === toId)!;
        const bondKey = [fromId, toId].sort().join("-");
        const bondData = getBondData(bondKey);
        const { type } = bondData;

        // Calculate bond direction vector
        const dx = toAtom.position.x - fromAtom.position.x;
        const dy = toAtom.position.y - fromAtom.position.y;

        // Calculate bond angle and perpendicular offsets
        const angle = Math.atan2(dy, dx);
        const perpAngle = angle + Math.PI / 2;

        // Calculate offset vectors perpendicular to the bond
        const getOffsetPoints = (spacing: number) => {
            const offsetX = spacing * Math.cos(perpAngle);
            const offsetY = spacing * Math.sin(perpAngle);

            return {
                fromX: fromAtom.position.x + offsetX,
                fromY: fromAtom.position.y + offsetY,
                toX: toAtom.position.x + offsetX,
                toY: toAtom.position.y + offsetY
            };
        };

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
                        {/* First line (negative offset) */}
                        {(() => {
                            const offset = getOffsetPoints(-STYLES.bond.spacing.double);
                            return (
                                <Line
                                    points={[offset.fromX, offset.fromY, offset.toX, offset.toY]}
                                    stroke={STYLES.bond.color}
                                    strokeWidth={STYLES.bond.strokeWidth}
                                />
                            );
                        })()}

                        {/* Second line (positive offset) */}
                        {(() => {
                            const offset = getOffsetPoints(STYLES.bond.spacing.double);
                            return (
                                <Line
                                    points={[offset.fromX, offset.fromY, offset.toX, offset.toY]}
                                    stroke={STYLES.bond.color}
                                    strokeWidth={STYLES.bond.strokeWidth}
                                />
                            );
                        })()}
                    </>
                )}
                {type === "triple" && (
                    <>
                        {/* First line (negative offset) */}
                        {(() => {
                            const offset = getOffsetPoints(-STYLES.bond.spacing.triple);
                            return (
                                <Line
                                    points={[offset.fromX, offset.fromY, offset.toX, offset.toY]}
                                    stroke={STYLES.bond.color}
                                    strokeWidth={STYLES.bond.strokeWidth}
                                />
                            );
                        })()}

                        {/* Middle line (no offset) */}
                        <Line
                            points={[fromAtom.position.x, fromAtom.position.y, toAtom.position.x, toAtom.position.y]}
                            stroke={STYLES.bond.color}
                            strokeWidth={STYLES.bond.strokeWidth}
                        />

                        {/* Third line (positive offset) */}
                        {(() => {
                            const offset = getOffsetPoints(STYLES.bond.spacing.triple);
                            return (
                                <Line
                                    points={[offset.fromX, offset.fromY, offset.toX, offset.toY]}
                                    stroke={STYLES.bond.color}
                                    strokeWidth={STYLES.bond.strokeWidth}
                                />
                            );
                        })()}
                    </>
                )}
            </Group>
        );
    }, [currentMolecule.atoms, getBondData, handleBondClick]);

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
                    height={360}
                    className="bg-zinc-600 border border-zinc-800 rounded-xl overflow-hidden shadow-lg"
                >
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
                {/* Instructions */}
                <div className="my-3 p-2 bg-blue-100 border border-blue-300 rounded">
                    <p className="text-sm text-blue-800">
                        <strong>Instructions:</strong> Press the atoms to spawn electrons, and the bonds to switch bond types to try to create a valid structure!
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

                {/* Molecule charge table */}
                <div className="mt-4">
                    <h4 className="font-bold mb-2">Formal Charges:</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-base-200 border border-zinc-600 shadow-lg">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border border-zinc-600">Atom</th>
                                    <th className="py-2 px-4 border border-zinc-600">Charge</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentMolecule.atoms.map(atom => {
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

                                    return (
                                        <tr key={atom.id}>
                                            <td className="py-2 px-1 text-center border border-zinc-600">
                                                {getElementName(element)} ({atom.id})
                                            </td>
                                            <td className={`py-2 px-1 text-center border border-zinc-600 font-bold ${formalCharge > 0 ? 'text-red-600' :
                                                formalCharge < 0 ? 'text-blue-600' :
                                                    'text-green-600'
                                                }`}>
                                                {formalCharge > 0 && '+'}{formalCharge !== 0 ? formalCharge : 'neutral'}
                                            </td>
                                        </tr>
                                    );
                                })}
                                <tr className="">
                                    <td className="py-2 px-1 text-center border border-zinc-600 font-bold">Total</td>
                                    <td className={`py-2 px-1 text-center border border-zinc-600 font-bold ${moleculeChargeData.reduce((sum, { formalCharge }) => sum + formalCharge, 0) > 0 ? 'text-red-600' :
                                        moleculeChargeData.reduce((sum, { formalCharge }) => sum + formalCharge, 0) < 0 ? 'text-blue-600' :
                                            'text-green-600'
                                        }`}>
                                        {(() => {
                                            const total = moleculeChargeData.reduce((sum, { formalCharge }) => sum + formalCharge, 0);
                                            return total > 0 ? `+${total}` : total < 0 ? total : 'neutral';
                                        })()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between text-xs mt-2 px-1">
                        <span className="text-blue-600">■ Negative</span>
                        <span className="text-green-600">■ Neutral</span>
                        <span className="text-red-600">■ Positive</span>
                    </div>
                </div>
            </div>
        </div>
    );
}