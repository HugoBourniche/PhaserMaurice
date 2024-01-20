import ColorAnimationHandler from "./ColorAnimationHandler";
import AnimationData from "./AnimationData";
import Text = Phaser.GameObjects.Text;

export default class AnimatedCharacter {

    private object: Phaser.Physics.Arcade.Group;
    private colorAnimation: ColorAnimationHandler;
    private index: number;
    private startX: number;
    private startY: number;

    constructor(object: Phaser.Physics.Arcade.Group, index: number, startX: number, startY: number, colors: string[]) {
        this.object = object;
        this.index = index;
        this.startX = startX;
        this.startY = startY;
        this.colorAnimation = new ColorAnimationHandler(colors);
    }

    public animate(startingAnimationOfX: number, animationData: AnimationData) {
        const text = (this.object.getChildren()[0] as Text);

        // Start animation
        if (startingAnimationOfX === this.index) {
            this.object.setVelocityY(animationData.velocityY);
        }

        text.setColor(this.colorAnimation.animateColor());

        if (text.y > this.startY + animationData.borderBot) {
            this.object.setVelocityY(-animationData.velocityY);
        } else if (text.y < this.startY + animationData.borderTop) {
            this.object.setVelocityY(animationData.velocityY);
        }
    }
}