import {ColorAnimationType} from "../ColorAnimationType";
import {buildColorRangeFromList, generateRandomColor} from "../../../utils/color-utils";
import {AbstractColorRangeAnimation} from "../AbstractColorRangeAnimation";

export default class FadingRandomColorAnimation extends AbstractColorRangeAnimation {

    private static staticColorRange: string[] = [];

    constructor(characterPosition: number) {
        super([generateRandomColor(), generateRandomColor()], characterPosition, 50);
        this.updateColors();
    }

    animateColor(): string {
        this.index = (this.index + 1)%this.colorRange.length;

        if (this.index == 0) {
            this.updateColors();
        }
        return this.colorRange[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.FADING_RANDOM;
    }

    private updateColors() {
        if (this.characterPosition == 0) {
            this.colors[0] = this.colors[1];
            this.colors[1] = generateRandomColor();
            this.colorRange = buildColorRangeFromList(this.colors, this.rangeValue);
            FadingRandomColorAnimation.staticColorRange = this.colorRange;
        } else { // Use same color range for every other characters
            this.colorRange = FadingRandomColorAnimation.staticColorRange;
        }
    }

}