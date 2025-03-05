import { Item } from '@/types';

export const items: Item[] = [
    { key: 0, name: "Hydrogen", symbol: "H" },
    { key: 1, name: "Oxygen", symbol: "O" },
    { key: 2, name: "Sodium", symbol: "Na" },
    { key: 3, name: "Chlorine", symbol: "Cl" },
    { key: 4, name: "Carbon", symbol: "C" },
    { key: 5, name: "Water", symbol: "H2O" },
    { key: 6, name: "Sodium Chloride", symbol: "NaCl" },
    { key: 7, name: "Sodium Oxide", symbol: "Na2O" },
    { key: 8, name: "Sodium Peroxide", symbol: "Na2O2" },
    { key: 9, name: "Sodium Hypochlorite", symbol: "NaClO" },
    { key: 10, name: "Sodium Hydroxide", symbol: "NaOH" },
    { key: 11, name: "Sodium Carbonate", symbol: "Na2CO3" },
    { key: 12, name: "Sodium Hydride", symbol: "NaH" },
    { key: 13, name: "Hydrogen Chloride", symbol: "HCl" },
    { key: 14, name: "Chlorine Dioxide", symbol: "ClO2" },
    { key: 15, name: "Methane", symbol: "CH₄" },
    { key: 16, name: "Carbon Dioxide", symbol: "CO2" },
    { key: 17, name: "Hydrogen Peroxide", symbol: "H2O2" },
    { key: 18, name: "Hypochlorous Acid", symbol: "HOCl" },
    { key: 19, name: "Dichlorine Monoxide", symbol: "Cl2O" },
    { key: 20, name: "Carbonic Acid", symbol: "H2CO3" },
];

export const combinations = [
    // Basic elemental combinations
    { elements: [0, 1], compound: 5 },   // H + O -> H2O (Water)
    { elements: [2, 3], compound: 6 },   // Na + Cl -> NaCl (Sodium Chloride)
    { elements: [2, 0], compound: 12 },  // Na + H -> NaH (Sodium Hydride)
    { elements: [2, 1], compound: 7 },   // Na + O -> Na2O (Sodium Oxide)
    { elements: [0, 3], compound: 13 },  // H + Cl -> HCl (Hydrogen Chloride)
    { elements: [4, 0], compound: 15 },  // C + H -> CH4 (Methane)
    { elements: [4, 1], compound: 16 },  // C + O -> CO2 (Carbon Dioxide)
    { elements: [3, 1], compound: 14 },  // Cl + O -> ClO2 (Chlorine Dioxide)

    // Compound-based combinations
    { elements: [5, 2], compound: 10 },  // H2O + Na -> NaOH (Sodium Hydroxide)
    { elements: [5, 1], compound: 17 },  // H2O + O -> H2O2 (Hydrogen Peroxide)
    { elements: [5, 3], compound: 18 },  // H2O + Cl -> HOCl (Hypochlorous Acid)
    { elements: [6, 1], compound: 9 },   // NaCl + O -> NaClO (Sodium Hypochlorite)
    { elements: [6, 1], compound: 7 },   // NaCl + O -> Na2O (Sodium Oxide)
    { elements: [7, 1], compound: 8 },   // Na2O + O -> Na2O2 (Sodium Peroxide)
    { elements: [7, 16], compound: 11 }, // Na2O + CO2 -> Na2CO3 (Sodium Carbonate)
    { elements: [16, 5], compound: 20 }, // CO2 + H2O -> H2CO3 (Carbonic Acid)

    // Additional Combinations
    { elements: [10, 3], compound: 9 },  // NaOH + Cl -> NaClO (Sodium Hypochlorite)
    { elements: [13, 1], compound: 18 }, // HCl + O -> HOCl (Hypochlorous Acid)
    { elements: [14, 3], compound: 19 }, // ClO2 + Cl -> Cl2O (Dichlorine Monoxide)
    { elements: [17, 3], compound: 18 }, // H2O2 + Cl -> HOCl (Hypochlorous Acid)
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