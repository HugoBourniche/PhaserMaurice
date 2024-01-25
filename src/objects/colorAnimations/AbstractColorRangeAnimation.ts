import {buildColorRangeFromList} from "../../utils/color-utils";
import {AbstractColorAnimation} from "./AbstractColorAnimation";

export abstract class AbstractColorRangeAnimation extends AbstractColorAnimation {

    protected colorRange: string[];

    protected constructor(colors: string[], range: number = 5) {
        super(colors);
        this.colorRange = buildColorRangeFromList(colors, range);
    }

}