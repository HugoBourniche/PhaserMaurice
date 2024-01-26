import {ColorAnimationType} from "./ColorAnimationType";
import {AbstractColorRangeAnimation} from "./AbstractColorRangeAnimation";

export default class FadingColorAnimation extends AbstractColorRangeAnimation {

    protected isIndexIncreasing: boolean;
    protected colorScale = 20;

    constructor(colors: string[], colorScale: number = 20) {
        super(colors, 0, colorScale);
        this.isIndexIncreasing = true;
        this.colorScale = colorScale;
    }

    animateColor(): string {
        this.index = this.index + (this.isIndexIncreasing ? 1 : -1);

        if (this.index == 0) {
            this.isIndexIncreasing = true;
        } else if (this.index == this.colorRange.length - 1) {
            this.isIndexIncreasing = false;
        }
        return this.colorRange[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.FADING;
    }

}