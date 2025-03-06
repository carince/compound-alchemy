import { Molecule } from "@/types";

export function calculatePosition(x: number, y: number): { x: number, y: number } {
    const centerX = 360 / 2;
    const centerY = 360 / 2;
    const offset = 30;
    return {
        x: centerX + x * offset,
        y: centerY + y * offset,
    };
}

export const ionic: Record<string, Molecule> = {
    NaCl: {
        formula: "NaCl",
        atoms: [
            {
                id: "Na1",
                element: "Na",
                position: calculatePosition(-2, 0),
                bonds: [],
            },
            {
                id: "Cl1",
                element: "Cl",
                position: calculatePosition(2, 0),
                bonds: [],
            },
        ],
        bonds: [],
    }
}

export const covalent: Record<string, Molecule> = {
    O2: {
        formula: "O2",
        atoms: [
            {
                id: "O1",
                element: "O",
                position: calculatePosition(-2, 0),
                bonds: ["O2"],
            },
            {
                id: "O2",
                element: "O",
                position: calculatePosition(2, 0),
                bonds: ["O1"],
            },
        ],
        bonds: [
            ["O1", "O2"],
        ],
    }
};