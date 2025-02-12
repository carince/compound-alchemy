import React from "react"

export type Item = {
    id?: string
    key: number
    name: string
    symbol: string
    ref?: React.RefObject<HTMLDivElement | null>
    style?: {
        hover: number
        x: number
        y: number
    }
}

export type ItemWithRef = Item & { ref: React.RefObject<HTMLDivElement | null> }

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
        posttest?: {
            score: number
            answers: {
                [key: string]: number
            }
        }
        elements?: {
            unlocked: number[]
        }
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
    answer: string;
};