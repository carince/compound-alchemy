export type Item = {
    id?: string
    key: number
    name: string
    symbol: string
    rect?: DOMRect
    pos?: {
        x: number
        y: number
    }
}