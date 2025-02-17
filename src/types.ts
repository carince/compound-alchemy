import React from "react"

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