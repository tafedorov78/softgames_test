import * as PIXI from 'pixi.js';
import Commands from '../Commands';
import ButtonView from './ButtonView';

export default class MenuView extends PIXI.Container {

    constructor() {
        super();
        this.buttons = [];
        this.init();
    }

    init() {
        const button1 = new ButtonView('1', this.onButton1Pressed.bind(this));
        button1.x = 0;
        this.addChild(button1);

        const button2 = new ButtonView('2', this.onButton2Pressed.bind(this));
        button2.x = 120;
        this.addChild(button2);

        const button3 = new ButtonView('3', this.onButton3Pressed.bind(this));
        button3.x = 240;
        this.addChild(button3);
    }

    onButton1Pressed(state) {
        if (state == 'down') {
            Commands.startSceneSignal.dispatch(1);
        }
    }
    onButton2Pressed(state) {
        if (state == 'down') {
            Commands.startSceneSignal.dispatch(2);
        }
    }
    onButton3Pressed(state) {
        if (state == 'down') {
            Commands.startSceneSignal.dispatch(3);
        }
    }

}