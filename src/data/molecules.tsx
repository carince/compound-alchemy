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
    },
    Al2O3: {
        formula: "Al2O3",
        atoms: [
            {
                id: "Al1",
                element: "Al",
                position: calculatePosition(-2, -2),
                bonds: [],
            },
            {
                id: "Al2",
                element: "Al",
                position: calculatePosition(2, -2),
                bonds: [],
            },
            {
                id: "O1",
                element: "O",
                position: calculatePosition(0, 2),
                bonds: [],
            },
            {
                id: "O2",
                element: "O",
                position: calculatePosition(4, 2),
                bonds: [],
            },
            {
                id: "O3",
                element: "O",
                position: calculatePosition(-4, 2),
                bonds: [],
            },
        ],
        bonds: [],
    },
    Mg3N2: {
        formula: "Mg3N2",
        atoms: [
            {
                id: "Mg1",
                element: "Mg",
                position: calculatePosition(-4, -2),
                bonds: [],
            },
            {
                id: "Mg2",
                element: "Mg",
                position: calculatePosition(0, -2),
                bonds: [],
            },
            {
                id: "Mg3",
                element: "Mg",
                position: calculatePosition(4, -2),
                bonds: [],
            },
            {
                id: "N1",
                element: "N",
                position: calculatePosition(-2, 2),
                bonds: [],
            },
            {
                id: "N2",
                element: "N",
                position: calculatePosition(2, 2),
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
    },
    CO2: {
        formula: "CO2",
        atoms: [
            {
                id: "C1",
                element: "C",
                position: calculatePosition(0, 0),
                bonds: ["O1", "O2"],
            },
            {
                id: "O1",
                element: "O",
                position: calculatePosition(-4, 0),
                bonds: ["C1"],
            },
            {
                id: "O2",
                element: "O",
                position: calculatePosition(4, 0),
                bonds: ["C1"],
            },
        ],
        bonds: [
            ["C1", "O1"],
            ["C1", "O2"],
        ],
    },
    H2O: {
        formula: "H2O",
        atoms: [
            {
                id: "O1",
                element: "O",
                position: calculatePosition(0, 0),
                bonds: ["H1", "H2"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-4, 0),
                bonds: ["O1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(4, 0),
                bonds: ["O1"],
            },
        ],
        bonds: [
            ["O1", "H1"],
            ["O1", "H2"],
        ],
    }
};