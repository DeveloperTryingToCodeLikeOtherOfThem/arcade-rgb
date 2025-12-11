namespace rgb {
    export type Color = { r: number, g: number, b: number }

    /** 
     * Create a color object
     */
    export function create(r: number, g: number, b: number): Color {
        return { r: clamp(r), g: clamp(g), b: clamp(b) }
    }

    /*
     Convert a Color object to a single 24-bit number
    */
    export function toNumber(c: Color): number {
        return (c.r << 16) | (c.g << 8) | c.b
    }

    /**
     * Convert a 24-bit number back to Color
    */ 
    export function fromNumber(n: number): Color {
        return {
            r: (n >> 16) & 0xFF,
            g: (n >> 8) & 0xFF,
            b: n & 0xFF
        }
    }

    function clamp(v: number): number {
        return Math.max(0, Math.min(255, v))
    }
}
