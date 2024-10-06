import { Item } from '../types';

export const items: Item[] = [
    { key: 0, name: "Hydrogen", symbol: "H" },
    { key: 1, name: "Oxygen", symbol: "O" },
    { key: 2, name: "Sodium", symbol: "Na" },
    { key: 3, name: "Chlorine", symbol: "Cl" },
    { key: 4, name: "Water", symbol: "H2O" }, // H + O
    { key: 5, name: "Sodium Chloride", symbol: "NaCl" }, // Na + Cl
    { key: 6, name: "Hydrogen Chloride", symbol: "HCl" }, // H + Cl
    { key: 7, name: "Sodium Oxide", symbol: "Na2O" }, // Na + O
    { key: 8, name: "Hydrogen Peroxide", symbol: "H2O2" }, // H + O2
    { key: 9, name: "Sodium Hydroxide", symbol: "NaOH" }, // Na + H2O
    { key: 10, name: "Chlorine Dioxide", symbol: "ClO2" }, // Cl + O2
    { key: 11, name: "Methane", symbol: "CH4" }, // C + H
    { key: 12, name: "Carbon", symbol: "C" },
    { key: 13, name: "Carbon Dioxide", symbol: "CO2" }, // C + O2
    { key: 14, name: "Ammonia", symbol: "NH3" }, // N + H
    { key: 15, name: "Nitrogen", symbol: "N" },
    { key: 16, name: "Nitrogen Dioxide", symbol: "NO2" } // N + O2
];

const combinations = [
    { elements: [0, 1], compound: 4 }, // H + O -> Water
    { elements: [2, 3], compound: 5 }, // Na + Cl -> Sodium Chloride
    { elements: [0, 3], compound: 6 }, // H + Cl -> Hydrogen Chloride
    { elements: [2, 1], compound: 7 }, // Na + O -> Sodium Oxide
    { elements: [2, 4], compound: 9 }, // Na + H2O -> Sodium Hydroxide
    { elements: [3, 1], compound: 10 }, // Cl + O2 -> Chlorine Dioxide
    { elements: [12, 0], compound: 11 }, // C + H -> Methane
    { elements: [12, 1], compound: 13 }, // C + O2 -> Carbon Dioxide
    { elements: [15, 0], compound: 14 }, // N + H -> Ammonia
    { elements: [15, 1], compound: 16 } // N + O2 -> Nitrogen Dioxide
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