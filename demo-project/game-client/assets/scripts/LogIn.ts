import { _decorator, Button, Color, color, Component, EditBox, Sprite, Toggle } from 'cc';
import { Popup, PopupType } from './Popup';
import { NETWORKMGR } from './NetworkMgr';
import { GAMEDATA } from './GameData';
import { SCENEMGR } from './SceneMgr';
const { ccclass, property } = _decorator;

@ccclass('LogIn')
export class LogIn extends Component {

    @property({type: Toggle})
    public togglePw: Toggle = null;
    
    @property({type: Button})
    public btnLogin: Button = null;

    @property({type: Button})
    public btnNew: Button = null;

    @property({type: Button})
    public btnBack: Button = null;

    @property({type: EditBox})
    public idBox: EditBox = null;

    @property({type: EditBox})
    public pwBox: EditBox = null;


    onLoad() {

        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        if(isDarkMode.matches) {
            this.idBox.node.on('editing-did-began', ()=>{
                this.idBox.getComponent(Sprite).color = new Color(151, 151, 151);
            }, this);

            this.idBox.node.on('editing-did-ended', ()=>{
                this.idBox.getComponent(Sprite).color = Color.WHITE;
            }, this);

            this.pwBox.node.on('editing-did-began', ()=>{
                this.pwBox.getComponent(Sprite).color = new Color(151, 151, 151);
            }, this);

            this.pwBox.node.on('editing-did-ended', ()=>{
                this.pwBox.getComponent(Sprite).color = Color.WHITE;
            }, this);
        }

        this.btnLogin.node.on(Button.EventType.CLICK, () => {
            this.reqLogin();
        });

        this.togglePw.node.on('toggle', (toggle: Toggle) => {
            if(toggle.isChecked) {
                this.pwBox.inputFlag = 0;
            } else {
                this.pwBox.inputFlag = 4;
            }
        }, this);

        this.btnNew.node.on(Button.EventType.CLICK, ()=>{
            const desc = "<size=33><b>To sign up, you need to\n\nstart playing 'START HERE'</b></size>\n\n\nWould you like to proceed?"
            new Popup(PopupType.YES_OR_NO, "NOTIFICATION", desc, (msg)=>{
                if(msg === "YES") {
                    GAMEDATA.initTutorial();
                    SCENEMGR.nextScene("game", false);
                }
            }).open();
        }, this);

        this.btnBack.node.on(Button.EventType.CLICK, ()=>{
            SCENEMGR.nextSceneDirectly("menu");
        },this);
    }

    private reqLogin() {

        const id = this.idBox.string;
        if(id === "" || id === undefined) {
            new Popup(PopupType.OK, "NOTIFICATIONS", "ID must not be empty").open();
            return false;
        }

        const pw = this.pwBox.string;

        NETWORKMGR.reqLogin(id, pw, (response) => {
            if(response.returnCode === "0") {
                GAMEDATA.setPassword(pw);
                GAMEDATA.tutorial = false;
                GAMEDATA.setServerData(response);
                SCENEMGR.nextScene("home", false);
            } else {
                new Popup(PopupType.OK, 
                    "NOTIFICATIONS",
                    `A server error has occurred\n(${response.returnMsg})`
                ).open(); 
            }
        });
    }

}


