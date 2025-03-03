import { molecules } from "./data/molecules";

export type AtomConfig = {
    id: string;
    element: string;
    position: { x: number; y: number };
    bonds: string[]; // Array of connected atom IDs
};

export type Molecule = {
    atoms: AtomConfig[];
    bonds: [string, string][]; // Pairs of connected atom IDs
    isIonic?: boolean
};

export type AtomData = {
    electrons: number;
};

export type BondType = "single" | "double" | "triple";

export type BondData = {
    type: BondType;
};

export type MoleculeNames = keyof typeof molecules;

export type MoleculeWithNames = Molecule & { name: MoleculeNames };

export type DraggedElectron = {
    sourceAtomId: string;
    x: number;
    y: number;
};

export type ValidationMessage = {
    type: "error" | "warning" | "info";
    atomId: string;
    message: string;
};

export type ElementData = {
    name: string;
    appearance?: string | null;
    atomic_mass: number;
    boil?: number | null;
    category: string;
    density?: number | null;
    discovered_by?: string | null;
    melt?: number | null;
    molar_heat?: number | null;
    named_by?: string | null;
    number: number;
    period: number;
    group: number;
    phase: string;
    source?: string | null;
    bohr_model_image?: string | null;
    bohr_model_3d?: string | null;
    spectral_img?: string | null;
    summary?: string | null;
    symbol: string;
    xpos: number;
    ypos: number;
    wxpos?: number | null;
    wypos?: number | null;
    shells: number[];
    electron_configuration: string;
    electron_configuration_semantic: string;
    electron_affinity?: number | null;
    electronegativity_pauling?: number | null;
    ionization_energies?: number[] | null;
    "cpk-hex"?: string | null;
    image?: {
        title?: string | null;
        url?: string | null;
        attribution?: string | null;
    } | null;
    block?: string | null;
};

export type UserAuthType = {
    email: string,
    password: string
}

export type UserDataType = {
    userId: string
    progress?: {
        pretest?: {
            score: number
            answers: {
                [key: string]: number
            }
        }
        survey?: {
            score: number
            answers: {
                [key: string]: number
            }
        }
        elements?: {
            unlocked: number[]
        }
        level?: 1 | 2 | 3
    }
}

export type SessionType = {
    userId: string
}

export type Option = {
    value: string;
    label: string;
};

export type QuestionType = {
    question: string;
    options: Option[];
};

export type QuestionTypeWithAnswer = QuestionType & { answer: string | null }

export interface PageTimeData {
    pageId: string;
    totalTimeSpent: number; // in milliseconds
    visits: number;
    lastVisitTimestamp: number;
    firstVisitTimestamp: number;
  }
  