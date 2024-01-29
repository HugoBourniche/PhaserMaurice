import {AbstractColorAnimation} from "../AbstractColorAnimation";
import {ColorAnimationType} from "../ColorAnimationType";
import {generateRandomColor} from "../../../utils/color-utils";

export default class BlinkRandomColorAnimation extends AbstractColorAnimation {

    private static color: string;

    constructor(colors: string[], characterPosition: number) {
        super(colors, characterPosition);
    }

    animateColor(): string {
        if (this.characterPosition == 0) {
            BlinkRandomColorAnimation.color = generateRandomColor();
        }
        return BlinkRandomColorAnimation.color;
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.BLINK_RANDOM;
    }

}