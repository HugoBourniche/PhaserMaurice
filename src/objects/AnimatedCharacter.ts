import {AbstractColorAnimation} from "./colorAnimations/AbstractColorAnimation";
import AnimationParams from "./AnimationParams";
import {ColorAnimationFactory} from "../utils/Factories/ColorAnimationFactory";
import {ColorAnimationType} from "./colorAnimations/ColorAnimationType";
import Text = Phaser.GameObjects.Text;

export default class AnimatedCharacter {

    // *****************************************************************************************************************
    // ATTRIBUTES
    // *****************************************************************************************************************

    private _object: Phaser.Physics.Arcade.Group;
    private _colorAnimation: AbstractColorAnimation;
    private _index: number;
    private _startX: number;
    private _startY: number;

    // *****************************************************************************************************************
    // CONSTRUCTOR
    // *****************************************************************************************************************

    constructor(object: Phaser.Physics.Arcade.Group, index: number, startX: number, startY: number, colors: string[]) {
        this._object = object;
        this._index = index;
        this._startX = startX;
        this._startY = startY;
        this._colorAnimation = ColorAnimationFactory.build(ColorAnimationType.DEFAULT, colors);
    }

    // *****************************************************************************************************************
    // PUBLIC METHODS
    // *****************************************************************************************************************

    public animate(startingAnimationOfX: number, animationParams: AnimationParams) {
        const text = (this._object.getChildren()[0] as Text);

        // Start animation
        if (startingAnimationOfX === this._index) {
            this._object.setVelocityY(animationParams.velocityY);
        }

        this.animateColor(text, animationParams);
        this.animatePosition(text, animationParams)
    }

    // *****************************************************************************************************************
    // PRIVATE METHODS
    // *****************************************************************************************************************

    private animateColor(text: Text, animationParams: AnimationParams) {
        if (this._colorAnimation.getType() !== animationParams.colorAnimation) {
            if (animationParams.color.length === 0) {
                animationParams.color = this._colorAnimation.getOriginalColors();
            }
            this._colorAnimation = ColorAnimationFactory.build(animationParams.colorAnimation, animationParams.color);
        }
        text.setColor(this._colorAnimation.animateColor());
    }

    private animatePosition(text: Text, animationData: AnimationParams) {
        if (text.y > this._startY + animationData.borderBot) {
            this._object.setVelocityY(-animationData.velocityY);
        } else if (text.y < this._startY + animationData.borderTop) {
            this._object.setVelocityY(animationData.velocityY);
        }
    }


    // *****************************************************************************************************************
    // GETTER / SETTER
    // *****************************************************************************************************************

    get object(): Phaser.Physics.Arcade.Group {
        return this._object;
    }

    set object(value: Phaser.Physics.Arcade.Group) {
        this._object = value;
    }

    get colorAnimation(): AbstractColorAnimation {
        return this._colorAnimation;
    }

    set colorAnimation(value: AbstractColorAnimation) {
        this._colorAnimation = value;
    }

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }

    get startX(): number {
        return this._startX;
    }

    set startX(value: number) {
        this._startX = value;
    }

    get startY(): number {
        return this._startY;
    }

    set startY(value: number) {
        this._startY = value;
    }

}