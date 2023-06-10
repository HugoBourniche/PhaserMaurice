import Phaser from "phaser";

export default class TextStyle {

    private _fontSize: number;
    private _style: Phaser.Types.GameObjects.Text.TextStyle;

    constructor(fontSize: number, fontFamily: string) {
        this._fontSize = fontSize;
        this._style = {fontSize: fontSize + 'px', fontFamily: fontFamily};
    }


    get fontSize(): number {
        return this._fontSize;
    }

    set fontSize(value: number) {
        this._fontSize = value;
        this._style.fontSize = this._fontSize + 'px';
    }

    get style(): Phaser.Types.GameObjects.Text.TextStyle {
        return this._style;
    }

    // set style(value: Phaser.Types.GameObjects.Text.TextStyle) {
    //     this._style = value;
    // }
}
