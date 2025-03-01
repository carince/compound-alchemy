import { ElementData } from "@/types";

/**
 * Gets the number of valence electrons for an element based on its periodic table data
 * 
 * @param element The element data from the periodic table
 * @returns The number of valence electrons
 */
export const getValenceElectrons = (element: ElementData): number => {
    // For main group elements (groups 1-18, excluding transition metals)
    if (element.group) {
        // Group 1-2 (s-block) and 13-18 (p-block)
        if (element.group <= 2 || element.group >= 13) {
            // Group 1: 1 valence electron
            // Group 2: 2 valence electrons
            // Group 13: 3 valence electrons
            // Group 14: 4 valence electrons
            // Group 15: 5 valence electrons
            // Group 16: 6 valence electrons
            // Group 17: 7 valence electrons
            // Group 18: 8 valence electrons (except He which has 2)

            if (element.group === 18) {
                return element.symbol === "He" ? 2 : 8;
            } else if (element.group <= 2) {
                return element.group;
            } else {
                return element.group - 10;
            }
        }
    }

    // Fallback: get electrons in outermost shell
    if (element.shells && element.shells.length > 0) {
        return element.shells[element.shells.length - 1];
    }

    // If all else fails
    return 0;
};

/**
 * Example usage for Oxygen:
 * 
 * Oxygen is in group 16, so it has 6 valence electrons
 * Its shells are [2, 6] which confirms 6 electrons in the outermost shell
 */
