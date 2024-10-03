import { Item } from '../types';

const combinations: { [key: string]: string } = {
    '0-1': 'Water', // Hydrogen (0) + Oxygen (1) = Water
    // Add more combinations as needed
};

export function combineElements(element1: Item, element2: Item): string | null {
    const key1 = element1.key;
    const key2 = element2.key;

    const combinationKey = `${Math.min(key1, key2)}-${Math.max(key1, key2)}`;

    return combinations[combinationKey] || null;
}