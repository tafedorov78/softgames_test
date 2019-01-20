import TweenMax, { Linear } from 'gsap';

export default class Test1View extends PIXI.Container {
    constructor() {
        super();
        this.startX = 750;
        this.posY1 = 200;
        this.posY2 = 500;
        this.cards = [];
        this.buildStack();
        this.swapCards();
    }

    buildStack() {
        let cardX = this.startX;
        for (let index = 0; index < 144; index++) {
            const card = new PIXI.Sprite.fromImage('assets/card.jpg');
            card.y = this.posY1;
            card.x = cardX;
            this.cards.push(card);
            this.addChild(card);
            cardX -= 5;
        }
    }

    swapCards() {
        this.counter = this.cards.length - 1;
        this.interval = setInterval(() => this.moveCard(), 1000);
        this.cardX = this.startX;
    }

    moveCard() {
        if (this.counter < 0) {
            clearInterval(this.interval);
            return;
        }
        const card = this.cards[this.counter];
        this.addChild(card);
        TweenMax.to(card, 2, { x: this.cardX, y: this.posY2 })
        this.cardX -= 5;
        this.counter--;
    }


    dispose() {
        clearInterval(this.interval);
    }
}