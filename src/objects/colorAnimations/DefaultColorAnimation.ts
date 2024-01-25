import {AbstractColorAnimation} from "./AbstractColorAnimation";
import {ColorAnimationType} from "./ColorAnimationType";

export default class DefaultColorAnimation extends AbstractColorAnimation {

    constructor(colors: string[]) {
        super(colors);
    }

    animateColor(): string {
        return this.colors[this.index];
    }

    getType(): ColorAnimationType {
        return ColorAnimationType.DEFAULT;
    }

}