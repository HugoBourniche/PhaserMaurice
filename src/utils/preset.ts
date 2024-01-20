import AnimatedText from "../objects/AnimatedText";

export default class Preset {

    public static buildTitleObject(scene: Phaser.Scene, text: string = 'stream is starting') {
        return new AnimatedText(20, 20, text, 50, 'sugar', ["#9AD7EA", "#094464"], scene)
    }
}
