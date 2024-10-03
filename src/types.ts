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