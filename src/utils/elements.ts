import { periodicTable } from "@/data/periodicTable";

export function getValenceElectrons(elementSymbol: string): number {
    // Find the element in the periodic table
    const element = periodicTable.find((el) => el.symbol === elementSymbol);

    if (!element) {
        throw new Error(`Element with symbol ${elementSymbol} not found.`);
    }

    // Use the full electron configuration (e.g., "1s2 2s2 2p4")
    const electronConfig = element.electron_configuration;

    // Split the configuration into individual orbitals
    const orbitals = electronConfig.split(" ");

    // Get the outermost shell number (e.g., "2" for "2s2 2p4")
    const outermostShellNumber = Math.max(
        ...orbitals.map((orbital) => {
            const shellNumberMatch = orbital.match(/\d+/);
            if (!shellNumberMatch) {
                throw new Error(`Invalid orbital format: ${orbital}`);
            }
            return parseInt(shellNumberMatch[0], 10);
        })
    );

    // Sum electrons in all orbitals of the outermost shell
    let valenceElectrons = 0;
    orbitals.forEach((orbital) => {
        const shellNumberMatch = orbital.match(/\d+/);
        if (!shellNumberMatch) {
            throw new Error(`Invalid orbital format: ${orbital}`);
        }
        const shellNumber = parseInt(shellNumberMatch[0], 10);

        if (shellNumber === outermostShellNumber) {
            const electronsMatch = orbital.match(/\d+$/);
            if (!electronsMatch) {
                throw new Error(`Invalid orbital format: ${orbital}`);
            }
            const electrons = parseInt(electronsMatch[0], 10);
            valenceElectrons += electrons;
        }
    });

    return valenceElectrons;
};

export function getElementName(elementSymbol: string): string {
    // Find the element in the periodic table
    const element = periodicTable.find((el) => el.symbol === elementSymbol);

    if (!element) {
        throw new Error(`Element with symbol ${elementSymbol} not found.`);
    }

    return element.name;
};