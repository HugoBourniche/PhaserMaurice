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
        this.load.image('maurice', 'images/maurice_draw_colorful.png')
        this.load.image('background-sea', 'images/background-sea.png')
    }

    create() {
        const background = this.add.image(DEFAULT_WIDTH_POSITION, DEFAULT_HEIGHT_POSITION, 'background-sea');
        background.setScale(2.2, 2);
        background.setY(DEFAULT_HEIGHT_POSITION + 10);
        this.animatedText = new AnimatedText(20, 20, 'Stream is starting', 50, 'sugar', this);

        const image = this.physics.add.image(400, 300, 'maurice');
        image.setScale(0.2, 0.2);
        image.setVelocity(200, 50);
        image.setCollideWorldBounds(true, 1, 1);
    }

    update(time: number, delta: number) {
        super.update(time, delta);
        this.animatedText?.animate(time);
    }

}