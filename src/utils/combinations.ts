import { Item } from '@/types';

export const items: Item[] = [
    { key: 0, name: "Hydrogen", symbol: "H" },
    { key: 1, name: "Oxygen", symbol: "O" },
    { key: 2, name: "Sodium", symbol: "Na" },
    { key: 3, name: "Chlorine", symbol: "Cl" },
    { key: 4, name: "Carbon", symbol: "C" },
    { key: 5, name: "Water", symbol: "H2O" }, // H + O
    { key: 6, name: "Sodium Chloride", symbol: "NaCl" }, // Na + Cl
    { key: 7, name: "Sodium Oxide", symbol: "Na2O" }, // Na + O
    { key: 8, name: "Sodium Peroxide", symbol: "Na2O2" }, // Na2O + O
    { key: 9, name: "Sodium Hypochlorite", symbol: "NaClO" }, // Na + O + Cl
    { key: 10, name: "Sodium Hydroxide", symbol: "NaOH" }, // H2O + Na2O
    { key: 11, name: "Sodium Carbonate", symbol: "Na2CO3" }, // Na2O + CO2
    { key: 12, name: "Sodium Hydride", symbol: "NaH" }, // Na + H
    { key: 13, name: "Hydrogen Chloride", symbol: "HCl" }, // H + Cl
    { key: 14, name: "Chlorine Dioxide", symbol: "ClO2" }, // Cl + O
    { key: 15, name: "Methane", symbol: "CH4" },
    { key: 16, name: "Carbon Dioxide", symbol: "CO2" }, // C + O2
    { key: 17, name: "Hydrogen Peroxide", symbol: "H2O2" }, // H2O + O
    { key: 18, name: "Hypochlorous Acid", symbol: "HOCl" }, // H2O + Cl
    { key: 19, name: "Dichlorine Monoxide", symbol: "Cl2O" }, // Cl + O
    { key: 20, name: "Carbonic Acid", symbol: "H2CO3" } // CO2 + H2O
];

export const combinations = [
    { elements: [0, 1], compound: 5 }, // H + O -> H2O
    { elements: [4, 1], compound: 16 }, // C + O2 -> CO2
    { elements: [2, 3], compound: 6 }, // Na + Cl -> NaCl
    { elements: [2, 1], compound: 7 }, // Na + O -> Na2O
    { elements: [7, 1], compound: 8 }, // Na2O + O -> Na2O2
    { elements: [2, 3], compound: 9 }, // Na + Cl -> NaClO (adjusted to keep two elements)
    { elements: [5, 7], compound: 10 }, // H2O + Na2O -> NaOH
    { elements: [7, 16], compound: 11 }, // Na2O + CO2 -> Na2CO3
    { elements: [2, 0], compound: 12 }, // Na + H -> NaH
    { elements: [0, 3], compound: 13 }, // H + Cl -> HCl
    { elements: [3, 1], compound: 14 }, // Cl + O -> ClO2
    { elements: [0, 16], compound: 15 }, // C + H -> CH4
    { elements: [5, 1], compound: 17 }, // H2O + O -> H2O2
    { elements: [5, 3], compound: 18 }, // H2O + Cl -> HOCl
    { elements: [3, 1], compound: 19 }, // Cl + O -> Cl2O
    { elements: [16, 5], compound: 20 } // CO2 + H2O -> H2CO3
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