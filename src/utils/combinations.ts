import { Item } from '../types';

export const items: Item[] = [
    { key: 0, name: "Hydrogen", symbol: "H" },
    { key: 1, name: "Oxygen", symbol: "O" },
    { key: 2, name: "Sodium", symbol: "Na" },
    { key: 3, name: "Chlorine", symbol: "Cl" },
    { key: 4, name: "Water", symbol: "H2O" }, // H + O
    { key: 5, name: "Sodium Chloride", symbol: "NaCl" }, // Na + Cl
    { key: 6, name: "Hydrogen Chloride", symbol: "HCl" }, // H + Cl
    { key: 7, name: "Sodium Oxide", symbol: "Na2O" } // Na + O
];

const combinations = [
    { elements: [0, 1], compound: 4 }, // H + O -> Water
    { elements: [2, 3], compound: 5 }, // Na + Cl -> Sodium Chloride
    { elements: [0, 3], compound: 6 }, // H + Cl -> Hydrogen Chloride
    { elements: [2, 1], compound: 7 }  // Na + O -> Sodium Oxide
];


export function boxesIntersect(a: Item, b: Item): boolean {
    return (
        Math.abs(a.style!.x - b.style!.x) < 80 + 80 &&
        Math.abs(a.style!.y - b.style!.y) < 28 + 28
    );
}

export function findIntersections(elements: Item[], targetId: string): (string | undefined)[] {
    const target = elements.find((el) => el.id === targetId);
    if (!target) return [];
    return elements
        .filter((el) => el.id !== targetId && boxesIntersect(el, target))
        .map((el) => el.id);
}

export function averagePosition(elements: (Item | undefined)[]) {
    const averageX =
        elements.reduce((acc, el) => acc + el!.style!.x, 0) / elements.length;
    const averageY =
        elements.reduce((acc, el) => acc + el!.style!.y, 0) / elements.length;
    return { x: averageX, y: averageY };
}

export function combineElements(target: Item, otherElements: Item[]): Item | null {
    const keys = [target.key, ...otherElements.map(el => el.key)];

    const combination = combinations.find(comb =>
        comb.elements.every(el => keys.includes(el)) && comb.elements.length === keys.length
    );

    if (combination) {
        return items.find(compound => compound.key === combination.compound) || null;
    }

    return null;
}