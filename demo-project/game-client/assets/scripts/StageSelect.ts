import { _decorator, Button, Component, instantiate, Node, Prefab, Tween } from 'cc';
import { GAMEDATA, PlayMode } from './GameData';
import { SCENEMGR } from './SceneMgr';
const { ccclass, property } = _decorator;

@ccclass('StageSelect')
export class StageSelect extends Component {

    @property({type: Prefab})
    public stageLock: Prefab = null;

    @property({type: Node})
    public arrayNode: Node = null;

    onLoad() {
        
        this.setStage();

    }


    private setStage() {

        const highStage = Number(GAMEDATA.getServerData().highStage);

        for(let j=0; j<4; j++) {
            for(let i=0; i<5; i++) {

                const stageIdx = (j*5)+i;
                const targetNode = this.arrayNode.getChildByName(`Stage${stageIdx}`);

                if(targetNode !== null) {
                    if(highStage < stageIdx) {
                        const lockNode = instantiate(this.stageLock);
                        targetNode.addChild(lockNode);
                        targetNode.getComponent(Button).destroy();
                    } else {
                        this.addButton(targetNode, stageIdx.toString());
                    }
                }
            }
        }
    }

    private addButton(targetNode: Node, customData: string) {
        const clickEventHandler = new Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = 'StageSelect';
        clickEventHandler.handler = 'stageSltCB';
        clickEventHandler.customEventData = customData;
        const button = targetNode.getComponent(Button);
        button.clickEvents.push(clickEventHandler);
        button.transition = 3;
    }

    stageSltCB(event: Event, customEventData: string) {
        const stageNum = parseInt(customEventData)+1;
        
        Tween.stopAll();
        
        GAMEDATA.setPlayMode(PlayMode.STAGE);
        GAMEDATA.setCurStage(stageNum);
        SCENEMGR.nextScene("game", false);
     }

}


