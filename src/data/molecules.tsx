import { Molecule } from "@/types";

function calculatePosition(x: number, y: number): { x: number, y: number } {
    const centerX = 360 / 2;
    const centerY = 300 / 2;
    const offset = 30;
    return {
        x: centerX + x * offset,
        y: centerY + y * offset,
    };
}

export const molecules: Record<string, Molecule> = {
    NaCl: {
        atoms: [
            {
                id: "Na1",
                element: "Na",
                position: calculatePosition(-4, 0),
                bonds: [],
            },
            {
                id: "Cl1",
                element: "Cl",
                position: calculatePosition(0, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
    O2: {
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
    },
    Na2Cl4: {
        isIonic: true,
        atoms: [
            {
                id: "Na1",
                element: "Na",
                position: calculatePosition(-6, 0),
                bonds: [],
            },
            {
                id: "Na2",
                element: "Na",
                position: calculatePosition(-3, 0),
                bonds: [],
            },
            {
                id: "Cl1",
                element: "Cl",
                position: calculatePosition(3, 0),
                bonds: [],
            },
            {
                id: "Cl2",
                element: "Cl",
                position: calculatePosition(6, 0),
                bonds: [],
            },
        ],
        bonds: [],
    },
};