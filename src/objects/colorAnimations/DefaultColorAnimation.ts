import {AbstractColorAnimation} from "./AbstractColorAnimation";
import {buildColorRange} from "../../utils/color-utils";
import {ColorAnimationType} from "./ColorAnimationType";

export default class DefaultColorAnimation extends AbstractColorAnimation {

    colorRange: string[];

    constructor(colors: string[]) {
        super(colors);
        this.colorRange = buildColorRange(colors[0], colors[1]);
    }

    animateColor(): string {
        return this.colorRange[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.DEFAULT;
    }

}