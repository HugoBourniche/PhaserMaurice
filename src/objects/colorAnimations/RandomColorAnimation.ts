import {AbstractColorAnimation} from "./AbstractColorAnimation";
import {generateRandomColor} from "../../utils/color-utils";
import {ColorAnimationType} from "./ColorAnimationType";

export default class RandomColorAnimation extends AbstractColorAnimation {

    constructor(colors: string[]) {
        super(colors);
    }

    animateColor(): string {
        return generateRandomColor();
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.RANDOM;
    }

}