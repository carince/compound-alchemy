export type Item = {
    id?: string
    key: number
    name: string
    symbol: string
    rect?: DOMRect
    style?: {
        hover: number
        x: number
        y: number
    }
}

export type User = {
    email: string
    progress: {
        pretest: {
            completed: boolean
            score: number
            answers: {
                [key: string]: number
            }
        }
        posttest: {
            completed: boolean
            score: number
            answers: {
                [key: string]: number
            }
        }
        level: number
    }
}

export type Option = {
    value: string;
    label: string;
};

export type Question = {
    question: string;
    options: Option[];
    answer: string;
};