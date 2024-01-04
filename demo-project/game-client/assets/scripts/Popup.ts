import { _decorator, BlockInputEvents, Button, Canvas, Component, director, EditBox, 
        instantiate, Label, math, Node, Prefab, resources, RichText, Sprite, SpriteFrame, 
        tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

export enum PopupType {
    OK = 0,
    YES_OR_NO,
    ALERT_SIMPLE,
    ALERT_SIMPLE_ANI,
    ALERT_AUTO_REMOVE,
}

@ccclass('Popup')
export class Popup extends Component {

    private popupUI: Node = null;
    private title: string = null;
    private descript: string | undefined = undefined;
    private clipboardStr: string | undefined = undefined;
    private popupType: PopupType = null;
    private callback: (msg?: string) => void;


    constructor(type: PopupType, title: string, descript?: string, 
        callback?: (msg?: string) => void, clipboardStr?: string) {
        super();

        this.popupType = type;
        this.title = title;
        this.descript = "<color=#000000>" + descript + "</color>";
        this.callback = callback;
        this.clipboardStr = clipboardStr;

        this.node = new Node("Popup");
    }

    public open() {

        if(this.popupType !== PopupType.ALERT_AUTO_REMOVE) {
            const popupBgNode = new Node("PopupBg")
            resources.load("textures/popup_back_bg/spriteFrame", SpriteFrame, null, (error, sf) => {
                popupBgNode.addComponent(Sprite).spriteFrame = sf;
            });

            this.node.addChild(popupBgNode);
            popupBgNode.addComponent(BlockInputEvents);
        }

        let path = "";
        if(this.popupType >= PopupType.ALERT_SIMPLE && this.popupType <= PopupType.ALERT_AUTO_REMOVE) {
            path = "prefabs/popup_alert";
        } else {
            path = "prefabs/popup_ui";
        }
        resources.load(path, Prefab, (error, prefab) => {
            this.popupUI = instantiate(prefab);
            this.node.addChild(this.popupUI);
            const canvas = director.getScene().getComponentInChildren(Canvas);
            canvas.node.addChild(this.node);
            this.node.setSiblingIndex(9998);
            let isScaleEff = true;
            if(this.popupType === PopupType.ALERT_AUTO_REMOVE || this.clipboardStr !== undefined) {
                isScaleEff = false;
            }

            if(isScaleEff) {
                this.popupUI.scale = new Vec3(0.3, 0.3, 0);
                tween(this.popupUI).to(
                    0.1, 
                    {scale: new Vec3(1.2,1.2,0)}).to(
                    0.1, 
                    {scale: new Vec3(1,1,0)}
                ).call(()=>{
                    this.addContent();
                }
                ).start();
            } else {
                this.addContent();
            }
        })         
    }

    public close(msg?: string) {

        if(this.callback !== undefined) {
            this.callback(msg);
        }

        this.node.removeFromParent();
    }

    private addContent() {

        this.popupUI.getChildByName("Title").getComponent(Label).string = this.title;
        if(this.popupType === PopupType.ALERT_AUTO_REMOVE) {
            this.popupUI.setPosition(this.popupUI.position.x, this.popupUI.position.y+300);
            tween(this.popupUI).delay(1.6).call(()=>{
                this.node.removeFromParent();
            }).start();
        } else if(this.popupType === PopupType.ALERT_SIMPLE || this.popupType === PopupType.ALERT_SIMPLE_ANI) {
            const titleLabel = this.popupUI.getChildByName("Title").getComponent(Label);
            if(this.popupType === PopupType.ALERT_SIMPLE_ANI) {
                const t0 = tween(this.popupUI).delay(0.3).call( ()=> {titleLabel.string = this.title+""});
                const t1 = tween(this.popupUI).delay(0.3).call( ()=> {titleLabel.string = this.title+"."});
                const t2 = tween(this.popupUI).delay(0.3).call( ()=> {titleLabel.string = this.title+".."});
                const t3 = tween(this.popupUI).delay(0.3).call( ()=> {titleLabel.string = this.title+"..."});
                tween(this.popupUI).sequence(t0,t1,t2,t3).repeatForever().start();
            }
        } else {

            if(this.descript !== undefined) {
                const descNode = this.popupUI.getChildByName("Descript");
                descNode.getComponent(RichText).string = this.descript;
            }

            //remove
            //this.createButton("textures/btn_x/spriteFrame", "X", true);

            if(this.popupType === PopupType.OK) {
                this.createButton("textures/btn_ok/spriteFrame", "OK");
            } else if(this.popupType === PopupType.YES_OR_NO) {
                this.createButton("textures/btn_no/spriteFrame", "NO");
                this.createButton("textures/btn_yes/spriteFrame", "YES");
            }

            if(this.clipboardStr !== undefined) {
                this.addClipboard();
            }
        }
    }


    private createButton(path: string, nodeName: string, btnX?: boolean) {
        const btnNode = new Node(nodeName);
        resources.load(path, SpriteFrame, null, (error, sf) => {
            btnNode.addComponent(Sprite).spriteFrame = sf;
        });
        const button = btnNode.addComponent(Button);
        button.transition = Button.Transition.SCALE;
        button.zoomScale = 1.2;
        button.duration = 0.1;
        this.node.addChild(btnNode);
        btnNode.on(Button.EventType.CLICK, () => {
            this.close(nodeName);
        }, this);

        if(btnX) {
            btnNode.setPosition(this.popupUI.getChildByName("X").position);
        } else {
            if(this.popupType === PopupType.OK) {
                btnNode.setPosition(this.popupUI.getChildByName("OK").position);
            } else if(this.popupType === PopupType.YES_OR_NO) {
                const labelNode = new Node();
                btnNode.addChild(labelNode);
                labelNode.setPosition(new Vec3(-3,3,0));
                const btnLabel = labelNode.addComponent(Label);
                btnLabel.color = math.Color.WHITE;
                btnLabel.fontSize = 30;
                btnLabel.isBold = true;
            
                const y = this.popupUI.getChildByName("YesorNo").position.y;
                if(nodeName === "NO") {
                    btnNode.setPosition(this.popupUI.getChildByName("YesorNo").getChildByName("No").position.x, y);
                    btnLabel.string = "NO";
                } else if(nodeName === "YES") {
                    btnNode.setPosition(this.popupUI.getChildByName("YesorNo").getChildByName("Yes").position.x, y);
                    btnLabel.string = "YES";
                }
            }
        }
    }

    private addClipboard() {

        const clipboardNode = this.popupUI.getChildByName("Clipboard");
        clipboardNode.active = true;

        const editBox = clipboardNode.getComponent(EditBox);
        editBox.string = this.clipboardStr;

    }

}


