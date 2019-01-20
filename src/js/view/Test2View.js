import { timingSafeEqual } from "crypto";

export default class Test2View extends PIXI.Container {
    constructor() {
        super();
        this.symbols = [1, 2, 3, 4, 5, 6, 7, 8, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
        if (!PIXI.loader.resources['font']) {
            PIXI.loader
                .add('font', 'assets/font.xml')
                .load(this.onAssetsLoaded.bind(this));
        } else {
            this.onAssetsLoaded();
        }
    }


    onAssetsLoaded() {
        this.bitmapFontText = new PIXI.extras.BitmapText("", { font: "23px font" });
        this.generate();
        this.interval = setInterval(() => this.generate(), 2000);
    }


    generate() {
        let fontSize = Math.ceil(10 + Math.random() * 50);
        this.bitmapFontText.font.size = fontSize;
        this.bitmapFontText.x = 100;
        this.bitmapFontText.y = 200;

        this.addChild(this.bitmapFontText);

        const total = 15 + Math.random() * 30;
        let str = '';
        for (let index = 0; index < total; index++) {
            let char = this.symbols[Math.ceil(Math.random() * this.symbols.length - 1)];
            str += (char);


        }
        this.bitmapFontText.text = str;
    }

    dispose() {
    }
}