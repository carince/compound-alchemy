// compoundLogic.ts
import { Element } from './types';

export interface Compound {
    id: number;
    name: string;
    emoji: string;
    rect?: DOMRect
}

export const compounds: { [key: string]: Compound } = {
    "Hydrogen-Oxygen": { id: 1, name: "Water", emoji: "🌊" },
    "Carbon-Hydrogen": { id: 2, name: "Hydrocarbon", emoji: "🛢️" },
    "Carbon-Oxygen": { id: 3, name: "Carbon Dioxide", emoji: "💨" },
    "Oxygen-Nitrogen": { id: 4, name: "Air", emoji: "🌬️" },
    "Hydrogen-Nitrogen": { id: 5, name: "Ammonia", emoji: "💧💨" },
    "Carbon-Hydrogen-Oxygen": { id: 6, name: "Glucose", emoji: "🍬" },
    "Oxygen-Hydrogen-Nitrogen": { id: 7, name: "Nitrous Oxide", emoji: "💨💧" },
    "Carbon-Hydrogen-Nitrogen": { id: 8, name: "Urea", emoji: "💧🧪" },
    "Hydrogen-Carbon-Oxygen-Nitrogen": { id: 9, name: "Proteins", emoji: "🍗" },
};

export function checkCompound(elements: Element[]): Compound | null {
    if (elements.length < 2) return null;

    // Check for compound by combining element names
    const combinedName = elements.map(el => el.name).sort().join('-');
    return compounds[combinedName] || null;
}
