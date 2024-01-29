import {AbstractColorAnimation} from "../AbstractColorAnimation";
import {generateRandomColor} from "../../../utils/color-utils";
import {ColorAnimationType} from "../ColorAnimationType";

export default class RandomColorAnimation extends AbstractColorAnimation {

    constructor() {
        super([], 0);
    }

    animateColor(): string {
        return generateRandomColor();
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.RANDOM;
    }

}