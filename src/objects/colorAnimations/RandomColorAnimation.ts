import {AbstractColorAnimation} from "./AbstractColorAnimation";
import {generateRandomColor} from "../../utils/color-utils";
import {ColorAnimationType} from "./ColorAnimationType";

export default class RandomColorAnimation extends AbstractColorAnimation {

    colorRange: string[];

    constructor(colors: string[]) {
        super(colors);
        this.colorRange = colors;
    }

    animateColor(): string {
        return generateRandomColor();
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.RANDOM;
    }

}