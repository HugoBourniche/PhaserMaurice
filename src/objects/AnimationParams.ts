import {ColorAnimationType} from "./colorAnimations/ColorAnimationType";

export default class AnimationParams {

    // Position animation params
    velocityY: number = 0;
    velocityX: number = 0;

    borderTop: number = 0;
    borderRight: number = 0;
    borderBot: number = 0;
    borderLeft: number = 0;

    // Color animations params
    colorAnimation: ColorAnimationType = ColorAnimationType.DEFAULT;
    color: string[] = [];
}