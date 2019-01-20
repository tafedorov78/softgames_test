import Game from '../Game';

export default class Test3View extends PIXI.Graphics {
    constructor() {
        super();
        this.index = 0;
        this.init();
        this.start();
    }

    init() {
        this.clear();
        this.alpha = 1;
        this.speedY = 1 - Math.random() * 3;
        this.speed = 2 + Math.random() * 3;
        this.x = Math.random() * 0;
        this.y = Math.random() * 0;
        this.size = 30 + Math.random() * 100;
        const colors = [0xff2a00];
        this.beginFill(colors[Math.ceil(Math.random() * colors.length - 1)])
            .drawCircle(0, 0, this.size);
        this.width = this.size;
        this.height = this.size;
        this.flag = false;
    }

    start() {
        Game.app.ticker.add((dt) => {
            this.x -= this.speedY;
            this.alpha -= 0.03;
            this.height += this.speed;

            if (!this.flag) {
                if (this.height > 50) {
                    this.flag = true;
                }
                this.width -= this.speed;
            }

            if (this.flag) {
                this.height -= this.speed;
                this.y -= this.speed;
                this.width -= this.speed;

            }

            if (this.width < 0.05) {
                this.init();
            }
        });
    }

}
