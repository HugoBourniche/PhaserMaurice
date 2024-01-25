import {ColorAnimationType} from "./ColorAnimationType";

export abstract class AbstractColorAnimation {

    protected index: number;
    protected colors: string[];

    protected constructor(colors: string[]) {
        this.index = 0;
        this.colors = colors;
    }

    abstract animateColor(): string;

    abstract getType(): ColorAnimationType;

    public getOriginalColors(): string[] {
        return this.colors;
    }
}