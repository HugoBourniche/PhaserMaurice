import {ColorAnimationType} from "./ColorAnimationType";
import {AbstractColorRangeAnimation} from "./AbstractColorRangeAnimation";

export default class FadingColorAnimation extends AbstractColorRangeAnimation {

    isIndexIncreasing: boolean;

    constructor(colors: string[]) {
        super(colors, 20);
        this.isIndexIncreasing = true;
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