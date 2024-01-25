import {AbstractColorAnimation} from "./AbstractColorAnimation";
import {buildColorRange} from "../../utils/color-utils";
import {ColorAnimationType} from "./ColorAnimationType";

export default class BlinkColorAnimation extends AbstractColorAnimation {

    colorRange: string[];

    constructor(colors: string[]) {
        super(colors);
        this.colorRange = buildColorRange(colors[0], colors[1]);
    }

    animateColor(): string {
        this.index = (this.index + 1)%this.colorRange.length;
        return this.colorRange[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.BLINK;
    }

}