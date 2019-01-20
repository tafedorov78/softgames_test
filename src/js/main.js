import * as PIXI from "pixi.js";
import Game from './Game.js';

document.addEventListener("DOMContentLoaded", () => {
    let game = new Main();
    window.game = game;
});

class Main {
    constructor() {
        let options = { antialias: true, roundPixels: true, backgroundColor: 0xc0c7d8 }

        this.safeZone = new PIXI.Rectangle(0, 0, 1080, 1920);
        this.sceneWidth = 1080;
        this.sceneHeight = 1920;

        this.app = new PIXI.Application(this.sceneWidth, this.sceneHeight, options);

        document.body.style.margin = 0;
        document.body.appendChild(this.app.view);

        window.addEventListener('resize', this.onResize.bind(this), false);
        window.addEventListener("orientationchange", function () {
            setTimeout(this.onResize.bind(this), 100);
        }.bind(this), false);
        this.onResize();


        const game = new Game(this.app);
        this.app.stage.addChild(game);
    }

    onResize() {
        let sceneRatio = this.safeZone.width / this.safeZone.height;

        let stageWidth = window.innerWidth;
        let stageHeight = window.innerHeight;
        let stageRatio = stageWidth / stageHeight;
        let scale = 1;

        if (stageRatio <= sceneRatio) {
            scale = stageWidth / this.safeZone.width;
            let gamePosX = -this.safeZone.left * scale;
            let gamePosY = (stageHeight - (this.safeZone.height * scale)) / 2 - this.safeZone.top * scale;
        } else {
            scale = stageHeight / this.safeZone.height;
            let gamePosX = (stageWidth - (this.safeZone.width * scale)) / 2 - this.safeZone.left * scale;
            let gamePosY = -this.safeZone.top * scale;
        }

        let gameWidth = this.sceneWidth * scale;
        let gameHeight = this.sceneHeight * scale;

        let gameScaleX = this.sceneWidth / gameWidth;
        let gameScaleY = this.sceneHeight / gameHeight;
    }
}
