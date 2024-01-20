import Phaser from "phaser";
import {DEFAULT_HEIGHT_POSITION, DEFAULT_WIDTH_POSITION} from "../cst";
import AnimatedText from "../objects/AnimatedText";


export default class MainScene extends Phaser.Scene {

    private animatedText: AnimatedText | undefined;

    constructor() {
        super("main-scene");
    }

    preload() {
        this.load.setBaseURL("./assets/");
        this.load.image('maurice', 'images/maurice_draw_colorful.png');
        this.load.image('background-sea', 'images/background-sea.png');
        this.load.spritesheet('maurice-anim', 'images/maurice_anim.png', { frameWidth: 500, frameHeight: 500 });
    }

    create() {
        const background = this.add.image(DEFAULT_WIDTH_POSITION, DEFAULT_HEIGHT_POSITION, 'background-sea');
        background.setScale(2.2, 2);
        background.setY(DEFAULT_HEIGHT_POSITION + 10);
        this.animatedText = new AnimatedText(20, 20, 'Stream is starting', 50, 'sugar', this);

        this.anims.create({
            key:'swim',
            frames: this.anims.generateFrameNumbers('maurice-anim', {}),
            frameRate: 2
        });
        const image = this.physics.add.sprite(400, 300, 'maurice-anim');
        image.setScale(0.2, 0.2);
        image.play({key:'swim', repeat: -1});
        image.setVelocity(200, 50);
        image.setCollideWorldBounds(true, 1, 1);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.animatedText?.animate(time);
    }

}