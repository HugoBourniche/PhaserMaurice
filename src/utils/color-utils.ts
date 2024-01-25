import * as chroma from "chroma.ts";

export function generateRandomColor(): string {
        return chroma.random().toString();
}

/**
 * Build a color range from a list of colors
 * @param colors: First color boundary
 */
export function buildColorRangeFromList(colors: string[], scaleRange: number = 10): string[] {
        if (colors.length === 0) {
                return ['#FFFFFF'];
        }
        return chroma.scale(colors)
            .colors(scaleRange);
}


/**
 * Build a color range from boundaries
 * @param startColor: First color boundary
 * @param endColor: Second color boundary
 */
export function buildColorRange(startColor: string, endColor: string): string[] {
        return buildColorRangeFromList([startColor, endColor]);
}