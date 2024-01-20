import Phaser from "phaser";
import TextStyle from "./TextStyle";
import Text = Phaser.GameObjects.Text;
import {TIME_50MS} from "../cst";
import AnimationData from "./AnimationData";

export default class AnimatedText {

    private context: Phaser.Scene;
    private readonly textToAnimate: string;
    private readonly startPositionX: number;
    private readonly startPositionY: number;
    private textStyle: TextStyle;

    private readonly characterList: Phaser.Physics.Arcade.Group[];
    private previousTime = 0;

    // Variable used to trigger the animation of the characters in a separated time
    private startingAnimationOfX = 0;

    constructor(x: number, y: number, text: string, fontSize: number, fontFamily: string, context: Phaser.Scene) {
        this.context = context;
        this.textToAnimate = text;
        this.startPositionX = x;
        this.startPositionY = y;
        this.textStyle = new TextStyle(fontSize, fontFamily);
        this.characterList = [];
        this. buildCharacters();
    }

    public animate(time: number): void {
        // Every second
        const timeSpent = time - this.previousTime;
        if (timeSpent >= TIME_50MS) {
            this.previousTime = time;
            this.triggerAnimation();
        }
    }

    private triggerAnimation() {
        // Constants
        const animationData = new AnimationData();
        animationData.velocityY = 10;
        animationData.borderTop = -5;
        animationData.borderBot = 10;

        // Animate characters individually
        for (let i = 0; i < this.characterList.length; i++) {
            this.animateCharacter(i, animationData);
        }
        this.startingAnimationOfX++;
    }

    private animateCharacter(index: number, animationData: AnimationData) {
        const characterObject = this.characterList[index];
        const text = (characterObject.getChildren()[0] as Text);

        // Start animation
        if (this.startingAnimationOfX === index) {
            characterObject.setVelocityY(animationData.velocityY);
        }

        // text.setColor(generateRandomColor());

        if (text.y > this.startPositionY + animationData.borderBot) {
            characterObject.setVelocityY(-animationData.velocityY);
        } else if (text.y < this.startPositionY + animationData.borderTop) {
            characterObject.setVelocityY(animationData.velocityY);
        }
    }

    private buildCharacters(): void {
        const charList: string[] = this.textToAnimate.split('');
        let nextXPosition = 0; // Place every character after each other
        for (let i = 0; i < charList.length; i++) {
            // Create text
            const character = this.context.add.text(this.startPositionX, this.startPositionY, this.textToAnimate[i], this.textStyle.style);
            character.x = this.startPositionX + nextXPosition;
            nextXPosition += character.width;
            // Create a Group to apply physics on text
            const soloGroup = this.context.physics.add.group(character);
            this.characterList.push(soloGroup);
        }
    }

}