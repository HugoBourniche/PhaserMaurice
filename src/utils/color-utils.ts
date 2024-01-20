import {randomInt} from "./utils";
import chroma from "chroma-js";

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
 * @param startColor: First color boundary
 * @param endColor: Second color boundary
 */
export function buildColorRange(startColor: string, endColor: string): string[] {
        const startChroma = chroma(startColor)
        const endChroma = chroma(endColor)

        return chroma.scale([startChroma, endChroma])
            .colors(5)
}