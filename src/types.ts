
import { Document, Types } from 'mongoose';


export type Item = {
    id?: string
    key: number
    name: string
    symbol: string
    ref?: React.RefObject<HTMLDivElement | null>
    style?: {
        isOverSidebar: number
        x: number
        y: number
    }
}

export type ItemWithRef = Item & { ref: React.RefObject<HTMLDivElement | null> }

export type AtomConfig = {
    id: string;
    element: string;
    position: { x: number; y: number };
    bonds: string[]; // Array of connected atom IDs
};

export type Molecule = {
    formula: string;
    atoms: AtomConfig[];
    bonds: [string, string][]; // Pairs of connected atom IDs
};

export type AtomData = {
    electrons: number;
};

export type BondType = "single" | "double" | "triple";

export type BondData = {
    type: BondType;
};

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

export interface ProgressLevel {
    contentRead: boolean;
    cou: {
        completed: boolean;
        answers: Map<string, string>;
    };
    quiz: {
        completed: boolean;
        score: number;
        answers: Map<string, string>;
    };
}

export interface Progress {
    level1: ProgressLevel;
    level2: ProgressLevel;
    level3: {
        elements: {
            unlocked: number[];
        };
    };
}

export interface UserDataType extends Document {
    userId: Types.ObjectId;
    currentLevel: 1 | 2 | 3;
    progress: Progress;
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
    answer: string;
};

export interface PageTimeData {
    pageId: string;
    totalTimeSpent: number; // in milliseconds  
    lastVisitTimestamp: number;
    firstVisitTimestamp: number;
}
