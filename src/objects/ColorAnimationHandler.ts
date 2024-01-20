import {buildColorRange} from "../utils/color-utils";

export default class ColorAnimationHandler {

    private colors: string[];

    private index = 0;
    private colorRange: string[];

    constructor(colors: string[]) {
        this.colors = colors;
        this.colorRange = buildColorRange(colors[0], colors[1]);
    }

    public animateColor() {
        return this.colorRange[(this.index++)%this.colorRange.length];
    }
}