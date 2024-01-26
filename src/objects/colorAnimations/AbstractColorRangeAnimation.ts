import {buildColorRangeFromList} from "../../utils/color-utils";
import {AbstractColorAnimation} from "./AbstractColorAnimation";

export abstract class AbstractColorRangeAnimation extends AbstractColorAnimation {

    protected rangeValue: number;
    protected colorRange: string[];

    protected constructor(colors: string[], characterPosition: number, range: number = 5) {
        super(colors, characterPosition);
        this.rangeValue = range;
        this.colorRange = buildColorRangeFromList(colors, range);
    }

}