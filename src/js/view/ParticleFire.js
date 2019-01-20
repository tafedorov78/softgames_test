import TweenMax, { Linear } from 'gsap';

export default class Test3View extends PIXI.Graphics {
    constructor(index) {
        super();
        const colors = [0xFF4136, 0xFF851B, 0xFFDC00];
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
        this.speed = { x: 0, y: 0 };
        this.scaleOFFset = (1 + Math.random()) * 0.2;
        this.beginFill(colors[index % colors.length])
            .drawCircle(0, 0, 50);
        //TweenMax.to(this.scale, 1, { x: 0, y: 0, onComplete: this.complete.bind(this) });
    }

    complete() {

    }

}
