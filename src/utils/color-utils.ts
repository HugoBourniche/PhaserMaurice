import {randomInt} from "./utils";

export function generateRandomColor() {
        const max = 255;
        const red = randomInt(max);
        const gre = randomInt(max);
        const blu = randomInt(max);
        return "#"
            + (red<16?'0':'') + Math.round(red).toString(16)
            + (gre<16?'0':'') + Math.round(gre).toString(16)
            + (blu<16?'0':'') + Math.round(blu).toString(16);
}

/**
 * Build a color range from a list of colors
 * @param colors: First color boundary
 */
export function buildColorRangeFromList(colors: string[]): string[] {
        return colors;
}


/**
 * Build a color range from boundaries
 * @param color1: First color boundary
 * @param color2: Second color boundary
 */
export function buildColorRange(color1: string, color2: string): string[] {
        return [color1, color2];
}