import {ColorAnimationType} from "./ColorAnimationType";

export abstract class AbstractColorAnimation {

    protected index: number;
    protected colors: string[];
    protected characterPosition: number;

    protected constructor(colors: string[], characterPosition: number) {
        this.index = 0;
        this.colors = colors;
        this.characterPosition = characterPosition;
    }

    abstract animateColor(): string;

    abstract getType(): ColorAnimationType;

    public getOriginalColors(): string[] {
        return this.colors;
    }
}