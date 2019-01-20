import Signal from './libs/signals';
import MenuView from './view/MenuView';
import AssetLoader from './AssetLoader';
import Assets from './Assets';
import Commands from './Commands';
import Test1View from './view/Test1View';
import Test2View from './view/Test2View';
import Test3View from './view/Test3View';


export default class Game extends PIXI.Container {

    constructor(application) {
        super();
        Game.app = application;
        this.currentScene = null;
        this.sceneContainer = new PIXI.Container();
        Commands.startSceneSignal.add(this.onStartScene, this);
        AssetLoader.load(Assets.GAME_PACK, this.onCompleteAssetLoading.bind(this));
    }

    onCompleteAssetLoading() {
        this.addChild(new MenuView());
        this.addChild(this.sceneContainer);
    }

    onStartScene(params) {
        this.disposeCurrentScene();
        switch (params) {
            case 1:
                this.currentScene = new Test1View();
                break;
            case 2:
                this.currentScene = new Test2View();
                break;
            case 3:
                this.currentScene = new Test3View();
                break;
        }
        this.sceneContainer.addChild(this.currentScene);
    }

    disposeCurrentScene() {
        if (!this.currentScene) {
            return;
        }
        this.currentScene.dispose();
        this.currentScene.removeChildren();
        this.currentScene.removeAllListeners;
        this.sceneContainer.removeChild(this.currentScene);
        this.currentScene = null;
    }
}