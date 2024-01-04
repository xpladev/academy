import { _decorator, Button, Component, Label, Node, tween, Vec3 } from 'cc';
import { SCENEMGR } from './SceneMgr';
import { GAMEDATA } from './GameData';
import { Popup, PopupType } from './Popup';

const { ccclass, property } = _decorator;

const VERSION = "v1.1.10-test";



@ccclass('MainMenu')
export class MainMenu extends Component {

    @property({type: Node})
    public selectNode: Node = null;

    @property({type: Node})
    public titleNode: Node = null;

    @property({type: Button})
    public btnInfo: Button = null;

    @property({type: Button})
    public btnTutorial: Button = null;

    @property({type: Button})
    public btnAdvanced: Button = null;

    @property({type: Label})
    public versionLabel: Label = null;


    onLoad() {

        this.btnTutorial.node.on(Button.EventType.CLICK, () => {
            const desc = "<size=33><b>Begin tutorial without saving?</b></size>\n\n\nDive into wallets, tokens, and NFTs\nin 'START HERE' – game-style.";
            new Popup(PopupType.YES_OR_NO, "NOTIFICATIONS", desc, (msg)=>{
                if(msg === "YES") {
                    GAMEDATA.initTutorial();
                    SCENEMGR.nextScene("game", false);
                }
            }).open();
        }, this);

        this.btnAdvanced.node.on(Button.EventType.CLICK, () => {
            SCENEMGR.nextSceneDirectly("login");
        }, this);

        
        this.btnInfo.node.on(Button.EventType.CLICK, ()=>{
            new Popup(PopupType.OK, "JUST LETTING YOU KNOW", 
                "<b><size=33>Gameplay data from\n\n'START HERE' won't be saved.</size></b>\n\n\nHowever, the wallets created\nare real XPLA wallets!",
            ).open();
        }, this);


        this.versionLabel.string = VERSION;
    }

    private btnActionOutIn(outNode: Node, inNode: Node, duration: number, outPos: number, inPos: number, rsvShowNode?: Node) {
        inNode.setPosition(0, outPos);
        inNode.active = true;
        const t1 = tween(outNode.position).to(duration, new Vec3(0, outPos, 0), {
            easing: 'smooth',
            onUpdate: (target:Vec3, ratio:number) => {
                outNode.position = target;
        }}).call( () => {
            outNode.active = false;
        });

        const t2 = tween(inNode.position).to(duration, new Vec3(0, inPos, 0), {
            easing: 'smooth',
            onUpdate: (target:Vec3, ratio:number) => {
                inNode.position = target;
        }}).call( () => {
            if(rsvShowNode !== undefined) {
                rsvShowNode.active = true;
            }
            
        });

        tween(this.node.position).sequence(t1, t2).start();
    }


}


