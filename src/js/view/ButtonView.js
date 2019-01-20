import * as PIXI from 'pixi.js';

export default class ButtonView extends PIXI.Container {

    constructor(label, callback) {
        super();
        this.label = label;
        this.callback = callback;
        this.init();
    }

    init() {
        this.textureButton = new PIXI.Graphics()
            .beginFill(0xf46b41)
            .drawCircle(0, 0, 50)
            .endFill().generateCanvasTexture();

        this.textureButtonDown = new PIXI.Graphics()
            .beginFill(0xf49b42)
            .drawCircle(0, 0, 50)
            .endFill().generateCanvasTexture();

        this.textureButtonOver = new PIXI.Graphics()
            .beginFill(0xf4cd41)
            .drawCircle(0, 0, 50)
            .endFill().generateCanvasTexture();

        this.button = new PIXI.Sprite(this.textureButton);
        this.button.buttonMode = true;

        this.button.anchor.set(0.5);
        this.button.x = 100;
        this.button.y = 100;

        this.button.interactive = true;
        this.button.buttonMode = true;

        this.button
            .on('click', this.onButtonDown.bind(this)) // mouse-only
            .on('tap', this.onButtonDown.bind(this)); // touch-only

        this.addChild(this.button);

        var label = new PIXI.Text(this.label);
        label.x = 70;
        label.y = 80;

        this.addChild(label);
    }


    onButtonDown() {
        this.isdown = true;
        this.button.texture = this.textureButtonDown;
        this.alpha = 1;
        this.callback('down');
    }



}




