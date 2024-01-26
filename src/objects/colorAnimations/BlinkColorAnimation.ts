import {AbstractColorAnimation} from "./AbstractColorAnimation";
import {ColorAnimationType} from "./ColorAnimationType";

export default class BlinkColorAnimation extends AbstractColorAnimation {

    constructor(colors: string[]) {
        super(colors, 0);
    }

    animateColor(): string {
        this.index = (this.index + 1)%this.colors.length;
        return this.colors[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.BLINK;
    }

}