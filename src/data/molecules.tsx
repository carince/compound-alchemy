import { Molecule } from "@/types";

function calculatePosition(x: number, y: number): { x: number, y: number } {
    const centerX = 200;
    const centerY = 150;
    const offset = 25;
    return {
        x: centerX + x * offset,
        y: centerY + y * offset,
    };
}

export const molecules: Record<string, Molecule> = {
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
    CH4: {
        atoms: [
            {
                id: "C1",
                element: "C",
                position: calculatePosition(0, 0),
                bonds: ["H1", "H2", "H3", "H4"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-3, 0),
                bonds: ["C1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(0, 3),
                bonds: ["C1"],
            },
            {
                id: "H3",
                element: "H",
                position: calculatePosition(0, -3),
                bonds: ["C1"],
            },
            {
                id: "H4",
                element: "H",
                position: calculatePosition(3, 0),
                bonds: ["C1"],
            },
        ],
        bonds: [
            ["C1", "H1"],
            ["C1", "H2"],
            ["C1", "H3"],
            ["C1", "H4"],
        ],
    },
    NH3: {
        atoms: [
            {
                id: "N1",
                element: "N",
                position: calculatePosition(0, 0),
                bonds: ["H1", "H2", "H3"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-3, 0),
                bonds: ["N1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(3, 0),
                bonds: ["N1"],
            },
            {
                id: "H3",
                element: "H",
                position: calculatePosition(0, -3),
                bonds: ["N1"],
            },
        ],
        bonds: [
            ["N1", "H1"],
            ["N1", "H2"],
            ["N1", "H3"],
        ],
    },
    C2H4: {
        atoms: [
            {
                id: "C1",
                element: "C",
                position: calculatePosition(-2, 0),
                bonds: ["C2", "H1", "H2"],
            },
            {
                id: "C2",
                element: "C",
                position: calculatePosition(2, 0),
                bonds: ["C1", "H3", "H4"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-4, 2),
                bonds: ["C1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(-4, -2),
                bonds: ["C1"],
            },
            {
                id: "H3",
                element: "H",
                position: calculatePosition(4, 2),
                bonds: ["C2"],
            },
            {
                id: "H4",
                element: "H",
                position: calculatePosition(4, -2),
                bonds: ["C2"],
            },
        ],
        bonds: [
            ["C1", "C2"],
            ["C1", "H1"],
            ["C1", "H2"],
            ["C2", "H3"],
            ["C2", "H4"],
        ],
    },
    C2H2: {
        atoms: [
            {
                id: "C1",
                element: "C",
                position: calculatePosition(-2, 0),
                bonds: ["C2", "H1"],
            },
            {
                id: "C2",
                element: "C",
                position: calculatePosition(2, 0),
                bonds: ["C1", "H2"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-5, 0),
                bonds: ["C1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(5, 0),
                bonds: ["C2"],
            },
        ],
        bonds: [
            ["C1", "C2"],
            ["C1", "H1"],
            ["C2", "H2"],
        ],
    },
    C2H6: {
        atoms: [
            {
                id: "C1",
                element: "C",
                position: calculatePosition(-2, 0),
                bonds: ["C2", "H1", "H2", "H3"],
            },
            {
                id: "C2",
                element: "C",
                position: calculatePosition(2, 0),
                bonds: ["C1", "H4", "H5", "H6"],
            },
            {
                id: "H1",
                element: "H",
                position: calculatePosition(-5, 0),
                bonds: ["C1"],
            },
            {
                id: "H2",
                element: "H",
                position: calculatePosition(-2, -3),
                bonds: ["C1"],
            },
            {
                id: "H3",
                element: "H",
                position: calculatePosition(-2, 3),
                bonds: ["C1"],
            },
            {
                id: "H4",
                element: "H",
                position: calculatePosition(5, 0),
                bonds: ["C2"],
            },
            {
                id: "H5",
                element: "H",
                position: calculatePosition(2, -3),
                bonds: ["C2"],
            },
            {
                id: "H6",
                element: "H",
                position: calculatePosition(2, 3),
                bonds: ["C2"],
            },
        ],
        bonds: [
            ["C1", "C2"],
            ["C1", "H1"],
            ["C1", "H2"],
            ["C1", "H3"],
            ["C2", "H4"],
            ["C2", "H5"],
            ["C2", "H6"],
        ],
    },
};