import Particle from './Particle';

export default class Test3View extends PIXI.Container {

    constructor() {
        super();

        this.particles = [];
        this.max = 10;
        this.container = new PIXI.Container();

        this.build();
    }

    build() {
        for (let index = 0; index < this.max; index++) {
            const particle = new Particle();
            this.particles.push(particle);
            this.container.addChild(particle);
        }
        this.container.x = 300;
        this.container.y = 500;
        this.addChild(this.container);
        this.blurFilter = new PIXI.filters.BlurFilter();
        this.blurFilter.strength = 20;
        this.container.filters = [this.blurFilter];
    }

    dispose() {
    }
}