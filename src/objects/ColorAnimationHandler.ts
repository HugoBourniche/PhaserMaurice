import {buildColorRangeFromList} from "../utils/color-utils";

export default class ColorAnimationHandler {

    private colors: string[];

    private index = 0;
    private colorRange: string[];

    constructor(colors: string[]) {
        this.colors = colors;
        this.colorRange = buildColorRangeFromList(colors);
    }

    public animateColor() {
        return this.colors[(this.index++)%this.colors.length];
    }
}