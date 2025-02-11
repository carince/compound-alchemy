import { Item } from '@/types';

export const items: Item[] = [
    { key: 0, name: "Hydrogen", symbol: "H" },
    { key: 1, name: "Oxygen", symbol: "O" },
    { key: 2, name: "Sodium", symbol: "Na" },
    { key: 3, name: "Chlorine", symbol: "Cl" },
    { key: 4, name: "Water", symbol: "H2O" }, // H + O
    { key: 5, name: "Sodium Chloride", symbol: "NaCl" }, // Na + Cl (table salt)
    { key: 6, name: "Hydrogen Peroxide", symbol: "H2O2" }, // H2O + O
    { key: 7, name: "Hydrochloric Acid", symbol: "HCl" }, // H + Cl
    { key: 8, name: "Sodium Hydroxide", symbol: "NaOH" }, // Na + H2O
    { key: 9, name: "Salt Water", symbol: "NaCl + H2O" }, // NaCl + H2O
    { key: 10, name: "Ozone", symbol: "O3" }, // O + O2
    { key: 11, name: "Sodium Bicarbonate", symbol: "NaHCO3" }, // NaOH + CO2
    { key: 12, name: "Carbon Dioxide", symbol: "CO2" }, // C + O2
    { key: 13, name: "Glucose", symbol: "C6H12O6" }, // H2O + CO2 + Sunlight
    { key: 14, name: "Ethanol", symbol: "C2H5OH" }, // Glucose + Fermentation
    { key: 15, name: "Vinegar", symbol: "CH3COOH" }, // Ethanol + O2
    { key: 16, name: "Ammonia", symbol: "NH3" }, // N + H
    { key: 17, name: "Methane", symbol: "CH4" }, // C + H4
    { key: 18, name: "Calcium Carbonate", symbol: "CaCO3" }, // Ca + CO2
    { key: 19, name: "Baking Powder", symbol: "NaHCO3 + Acid" }, // NaHCO3 + CH3COOH
];

export const combinations = [
    { elements: [0, 1], compound: 4 }, // H + O -> Water
    { elements: [2, 3], compound: 5 }, // Na + Cl -> Sodium Chloride
    { elements: [4, 1], compound: 6 }, // Water + O -> Hydrogen Peroxide
    { elements: [0, 3], compound: 7 }, // H + Cl -> Hydrochloric Acid
    { elements: [2, 4], compound: 8 }, // Na + H2O -> Sodium Hydroxide
    { elements: [5, 4], compound: 9 }, // NaCl + H2O -> Salt Water
    { elements: [1, 1], compound: 10 }, // O + O2 -> Ozone
    { elements: [8, 12], compound: 11 }, // NaOH + CO2 -> Sodium Bicarbonate
    { elements: [4, 12, 13], compound: 13 }, // Water + CO2 + Sunlight -> Glucose
    { elements: [13, 10], compound: 14 }, // Glucose + Fermentation -> Ethanol
    { elements: [14, 1], compound: 15 }, // Ethanol + O2 -> Vinegar
    { elements: [0, 16], compound: 16 }, // N + H -> Ammonia
    { elements: [17, 0], compound: 17 }, // C + H4 -> Methane
    { elements: [18, 12], compound: 18 }, // Ca + CO2 -> Calcium Carbonate
    { elements: [11, 15], compound: 19 }, // NaHCO3 + Vinegar -> Baking Powder
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