import { _decorator, BlockInputEvents, Canvas, Component, director, instantiate, Label, Node, Prefab, resources, Sprite, SpriteFrame, tween, UIOpacity, UITransform } from 'cc';
import { UTILS } from './Utils';
const { ccclass, property } = _decorator;

@ccclass('SceneMgr')
export class SceneMgr extends Component {

    private static instance: SceneMgr = null;
    private loadingIdx: number = 0;

    private loadingStr: string[] = [
        "XPLA means 'Explore and Play,' embodying the vision of encouraging users to explore and play in our web 3.0 space.",
        "XPLA is built by Content Creators, enabling diverse creators to build their Web 3.0 universe with limitless imagination!",
        "XPLA ACADEMY: Your fast-track from zero to hero in onboarding your game to XPLA!",
        "XPLA ACADEMY: Your whimsical journey to XPLA mastery - wallets, transactions, tokens, NFTs, Convert, and Web 3.0 game creation!",
        "Hope you have a peaceful day! 💻☕️",
    ];


    public static getInstance(): SceneMgr {
        if(SceneMgr.instance === null) {
            SceneMgr.instance = new SceneMgr;
        }

        return SceneMgr.instance
    }

    public nextSceneDirectly(scene: string) {
        resources.loadScene(scene, (err, sceneAsset) => {
            if(sceneAsset.scene !== null) {
                director.runScene(sceneAsset);
            }
        })
    }


    public nextScene(scene: string, loadingTip: boolean) {
        if(loadingTip) {
            const loadingStrLen = this.loadingStr.length-1;
            this.loadingIdx = UTILS.getRandomInt(0, loadingStrLen);
        } else {
            this.loadingIdx = -1;
        }

        this.fadeOut(scene, loadingTip);
    }

    private fadeOut(scene: string, loadingTip: boolean) {
        const canvas = director.getScene().getComponentInChildren(Canvas);
        this.addNode(canvas.node, 0, loadingTip, true);
        this.node.addComponent(BlockInputEvents);

        let delaySec = 0.3;
        if(loadingTip) {
            delaySec = this.loadingIdx === 4 ? 1.2 : 3;
        }
        let op = this.node.getComponent(UIOpacity);
        tween(op).to(0.5, {opacity:255}).delay(delaySec).call(() => {

            resources.loadScene(scene, (err, sceneAsset) => {
                if(sceneAsset.scene !== null) {
                    const canvas = sceneAsset.scene.getComponentInChildren(Canvas);
                    this.addNode(canvas.node, 255, loadingTip, false);
                    this.fadeIn(loadingTip);
                    director.runScene(sceneAsset);
                }
            })
        }).start();

    }

    private fadeIn(loadingTip: boolean) {
        const delaySec = loadingTip ? 0.5 : 0.3;
        let op = this.node.getComponent(UIOpacity);
        tween(op).to(delaySec, {opacity:0}).call(()=>{
            this.node.removeFromParent();
        }).start();
    }

    private addNode(parent: Node, op_val: number, loadingTip: boolean, isFirst: boolean) {
        this.node = new Node("Loading");
        parent.addChild(this.node);
        this.node.setSiblingIndex(9999);

        let parent_t = parent.getComponent(UITransform);
        let uiTransform = this.node.addComponent(UITransform);
        uiTransform.setContentSize(parent_t.width, parent_t.height);
        uiTransform.setAnchorPoint(0.5,0.5);

        
        if(loadingTip) {
            const path = "prefabs/loading";
            
            resources.load(path, Prefab, (error, prefab) => {
                const loadingNode = instantiate(prefab);
                loadingNode.getChildByName("Label").getComponent(Label).string = this.loadingStr[this.loadingIdx];
                this.node.addChild(loadingNode);

                if(isFirst) {
                    resources.load("prefabs/loading_character", Prefab, (error, prefab) => {
                        const characterNode = instantiate(prefab);
                        loadingNode.addChild(characterNode);
                        characterNode.setPosition(loadingNode.getChildByName("Character").getPosition());
                        let toSec = this.loadingIdx === 4 ? 1.5 : 3.6;
                        tween(characterNode).to(toSec, {angle: 360}).start();
                    });
                }
            });
        } else {
            let spriteFrame = this.node.addComponent(Sprite);
            const path = "textures/fade_bg/spriteFrame";
            resources.load(path, SpriteFrame, null, (error, sf) => {
                spriteFrame.spriteFrame = sf;
            });
        }

        let op = this.node.addComponent(UIOpacity);
        op.opacity = op_val;

    }

}

export const SCENEMGR = SceneMgr.getInstance();

