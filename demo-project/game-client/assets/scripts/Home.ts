import { _decorator, Button, Component, Node, Tween } from 'cc';
import { Wallet } from './Wallet';
import { Popup, PopupType } from './Popup';
import { SCENEMGR } from './SceneMgr';
import { GAMEDATA, PlayMode } from './GameData';
const { ccclass, property } = _decorator;

@ccclass('Home')
export class Home extends Component {
    
    @property({type: Node})
    public walletNode: Node = null;

    @property({type: Node})
    public stageSelectNode: Node = null;

    @property({type: Button})
    public btnInfinity: Button = null;

    @property({type: Button})
    public btnStage: Button = null;

    @property({type: Button})
    public btnBack: Button = null;

    onLoad() {
        GAMEDATA.setTutorialStage(0);

        this.btnInfinity.node.on(Button.EventType.CLICK, ()=>{
            if(this.walletNode.getComponent(Wallet).isSltNft() === false) {
                this.errPopup();
            } else {
                Tween.stopAll();
                GAMEDATA.setPlayMode(PlayMode.INFINITE);
                SCENEMGR.nextScene("game", false);
            }
        }, this);

        this.btnStage.node.on(Button.EventType.CLICK, ()=>{
            if(this.walletNode.getComponent(Wallet).isSltNft() === false) {
                this.errPopup();
            } else {
                setTimeout(()=>{
                    this.walletNode.active = false;
                    this.stageSelectNode.active = true;
                }, 200);
            }
        }, this);

        this.btnBack.node.on(Button.EventType.CLICK, ()=>{
            this.walletNode.active = true;
            this.stageSelectNode.active = false;
        }, this);

    }

    private errPopup() {
        const desc = "<color=#000000><size=33><b>Select the paddle!</b></size>\n\n\nTo start the game,\nyou need to paddle along!</color>"
        new Popup(PopupType.OK, "NOTIFICATIONS", desc).open();
    }

}


