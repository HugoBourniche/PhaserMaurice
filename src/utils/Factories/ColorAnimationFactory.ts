import {ColorAnimationType} from "../../objects/colorAnimations/ColorAnimationType";
import DefaultColorAnimation from "../../objects/colorAnimations/DefaultColorAnimation";
import BlinkColorAnimation from "../../objects/colorAnimations/BlinkColorAnimation";
import RandomColorAnimation from "../../objects/colorAnimations/RandomColorAnimation";
import FadingBlinkColorAnimation from "../../objects/colorAnimations/FadingBlinkColorAnimation";
import FadingColorAnimation from "../../objects/colorAnimations/FadingColorAnimation";

export class ColorAnimationFactory {

    /**
     * Build a proper Color Animation Object thanks to its type
     * @param colorAnimation Type of the color animation, see the enumeration ColorAnimationType
     * @param colors List of colors to use in animation
     */
    public static build(colorAnimation: ColorAnimationType, colors: string[]) {
        switch (colorAnimation) {
            case ColorAnimationType.BLINK: return new BlinkColorAnimation(colors);
            case ColorAnimationType.RANDOM: return new RandomColorAnimation(colors);
            case ColorAnimationType.FADING: return new FadingColorAnimation(colors);
            case ColorAnimationType.FADING_BLINK: return new FadingBlinkColorAnimation(colors);
            case ColorAnimationType.DEFAULT:
            default: return new DefaultColorAnimation(colors);

        }
    }
}