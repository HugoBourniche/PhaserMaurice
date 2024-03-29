import AnimatedText from "../../objects/AnimatedText";

export default class Preset {

    /**
     * Build an animated text for as the title preset
     * @param scene Phaser Scene where the text will be displayed
     * @param text Text to display, default value = 'stream is starting'
     */
    public static buildTitleObject(scene: Phaser.Scene, text: string = 'stream is starting') {
        return new AnimatedText(20, 20, text, 50, 'sugar', ["#9AD7EA", "#094464"], scene)
    }
}
