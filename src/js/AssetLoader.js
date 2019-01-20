export default new class AssetLoader {

    constructor() {
        this.loader = PIXI.loader;
        this.url = "assets/";
    }

    load(manifest, onComplete) {
        for (let i = 0; i < manifest.length; i++) {
            this.loader.add(this.url + manifest[i]);
        }
        this.loader.load((loader, resources) => {
            this.resources = resources;
            if (onComplete) {
                onComplete();
            }
        });
    }

}