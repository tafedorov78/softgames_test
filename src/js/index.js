import * as PIXI from 'pixi.js';

import Game from './src/js/Game.js';

let options = { antialias: true, roundPixels: true, backgroundColor: 0xc0c7d8 }

let safeZone = new PIXI.Rectangle(0, 0, 1080, 1920);
let sceneWidth = 1080;
let sceneHeight = 1920;

let app = new PIXI.Application(sceneWidth, sceneHeight, options);

document.body.style.margin = 0;
document.body.appendChild(app.view);

window.addEventListener('resize', onResize.bind(this), false);
window.addEventListener("orientationchange", function () {
    setTimeout(this.onResize.bind(this), 100);
}.bind(this), false);
onResize();


const game = new Game(app);
app.stage.addChild(game);


function onResize() {
    let sceneRatio = safeZone.width / safeZone.height;

    let stageWidth = window.innerWidth;
    let stageHeight = window.innerHeight;
    let stageRatio = stageWidth / stageHeight;
    let scale = 1;

    if (stageRatio <= sceneRatio) {
        scale = stageWidth / safeZone.width;
        let gamePosX = -safeZone.left * scale;
        let gamePosY = (stageHeight - (safeZone.height * scale)) / 2 - safeZone.top * scale;
    } else {
        scale = stageHeight / safeZone.height;
        let gamePosX = (stageWidth - (safeZone.width * scale)) / 2 - safeZone.left * scale;
        let gamePosY = -safeZone.top * scale;
    }

    let gameWidth = sceneWidth * scale;
    let gameHeight = sceneHeight * scale;

    let gameScaleX = sceneWidth / gameWidth;
    let gameScaleY = sceneHeight / gameHeight;


    //this._updateFloats();
}
