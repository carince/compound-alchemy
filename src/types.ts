import { UniqueIdentifier } from "@dnd-kit/core"

export type Item = {
    id?: UniqueIdentifier
    name: string
    symbol: string
    pos: {
        dropped: boolean
        x: number
        y: number
    }
}