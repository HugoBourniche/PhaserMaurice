import {ColorAnimationType} from "./ColorAnimationType";
import {AbstractColorRangeAnimation} from "./AbstractColorRangeAnimation";

export default class FadingBlinkColorAnimation extends AbstractColorRangeAnimation {

    constructor(colors: string[]) {
        super(colors, 0);
    }

    animateColor(): string {
        this.index = (this.index + 1)%this.colorRange.length;
        return this.colorRange[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.FADING_BLINK;
    }

}