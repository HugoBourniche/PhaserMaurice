import Phaser from "phaser";
import TextStyle from "./TextStyle";
import {COLOR_ANIMATION, TIME_50MS} from "../cst";
import AnimationParams from "./AnimationParams";
import AnimatedCharacter from "./AnimatedCharacter";

export default class AnimatedText {

    private scene: Phaser.Scene;
    private readonly textToAnimate: string;
    private readonly startPositionX: number;
    private readonly startPositionY: number;
    private textStyle: TextStyle;

    private readonly characterList: AnimatedCharacter[];
    private previousTime = 0;

    // Variable used to trigger the animation of the characters in a separated time
    private startingAnimationOfX = 0;

    constructor(x: number, y: number, text: string, fontSize: number, fontFamily: string, colors: string[], scene: Phaser.Scene) {
        this.scene = scene;
        this.textToAnimate = text;
        this.startPositionX = x;
        this.startPositionY = y;
        this.textStyle = new TextStyle(fontSize, fontFamily);
        this.characterList = [];
        this.buildCharacters(colors);
    }

    public animate(time: number): void {
        const timeSpent = time - this.previousTime;
        if (timeSpent >= TIME_50MS) { // Every 50ms
            this.previousTime = time;
            this.triggerAnimation();
        }
    }

    private triggerAnimation() {
        // Constants
        const animationData = new AnimationParams();
        animationData.velocityY = 10;
        animationData.borderTop = -5;
        animationData.borderBot = 10;
        animationData.colorAnimation = COLOR_ANIMATION;

        this.animateCharacters(animationData);
        this.startingAnimationOfX++;
    }

    /**
     * Apply animation on all characters
     * @param animationData: Constants about the animation information
     * @private
     */
    private animateCharacters(animationData: AnimationParams) {
        for (let animatedCharacter of this.characterList) {
            animatedCharacter.animate(this.startingAnimationOfX, animationData);
        }
    }

    /**
     * Convert the text string into objects to animate in the game scene
     * @private
     */
    private buildCharacters(colors: string[]): void {
        const charList: string[] = this.textToAnimate.split('');
        let nextXPosition = 0; // Place every character after each other
        for (let i = 0; i < charList.length; i++) {
            // Create text
            const character = this.scene.add.text(this.startPositionX, this.startPositionY, this.textToAnimate[i], this.textStyle.style);
            const x = this.startPositionX + nextXPosition;
            const y =  this.startPositionY;
            character.x = x;
            character.y = y;
            nextXPosition += character.width;
            // Create a Group to apply physics on text
            const soloGroup = this.scene.physics.add.group(character);
            // Build final object and add it to the list
            const animatedCharacter = new AnimatedCharacter(soloGroup, i, x, y, colors);
            this.characterList.push(animatedCharacter);
        }
    }

}