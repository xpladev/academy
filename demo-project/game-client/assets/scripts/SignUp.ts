import { _decorator, Button, Color, Component, EditBox, Node, Sprite, Toggle } from 'cc';
import { Popup, PopupType } from './Popup';
import { NETWORKMGR } from './NetworkMgr';
import { GAMEDATA } from './GameData';
import { SCENEMGR } from './SceneMgr';
const { ccclass, property } = _decorator;

enum EditBoxType {
    ID = 0,
    PW,
    PW_CONFIRM,
    MAX,
}

@ccclass('SignUp')
export class SignUp extends Component {

    @property({type: Toggle})
    public togglePw: Toggle = null;
    
    @property({type: Button})
    public btnSignup: Button = null;

    @property({type: EditBox})
    public editBoxes: EditBox[] = [];
    

    onLoad() {

        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        if(isDarkMode.matches) {
            for(let i=0; i<EditBoxType.MAX; i++) {
                this.editBoxes[i].node.on('editing-did-began', ()=>{
                    this.editBoxes[i].getComponent(Sprite).color = new Color(151, 151, 151);
                }, this);

                this.editBoxes[i].node.on('editing-did-ended', ()=>{
                    this.editBoxes[i].getComponent(Sprite).color = Color.WHITE;
                }, this);
            }
        }

        this.btnSignup.node.on(Button.EventType.CLICK, () => {
            if(this.checkRegister()) {
                const desc = "<size=33><b>Want to join?</b></size>\n\n\nAfter signing up,\nauto-login with your info.";
                new Popup(PopupType.YES_OR_NO, "NOTIFICATION", desc, (msg: string)=>{
                    if(msg === "YES") {
                        this.reqSignUp();
                    }
                }).open();
            }
        });

        this.togglePw.node.on('toggle', (toggle: Toggle) => {
            if(toggle.isChecked) {
                this.editBoxes[EditBoxType.PW].inputFlag = 0;
                this.editBoxes[EditBoxType.PW_CONFIRM].inputFlag = 0;
            } else {
                this.editBoxes[EditBoxType.PW].inputFlag = 4;
                this.editBoxes[EditBoxType.PW_CONFIRM].inputFlag = 4;
            }
        }, this);
    }


    private checkRegister(): boolean {

        const id = this.editBoxes[EditBoxType.ID].string;
        if(id === "" || id === undefined) {
            new Popup(PopupType.OK, "NOTIFICATIONS", "<size=33><b>Unavailable ID</b></size>\n\n\nID must not be empty").open();
            return false;
        }

        const pw1 = this.editBoxes[EditBoxType.PW].string;
        const pw2 = this.editBoxes[EditBoxType.PW_CONFIRM].string;

        if(pw1 !== pw2) {
            new Popup(PopupType.OK, "NOTIFICATIONS", "<size=33><b>PW Mismatch</b></size>\n\n\nPassword does not match").open();
            return false;
        }

        return true;
    }

    private reqSignUp() {

        const address = GAMEDATA.getTutorialAddress();
        
        const id = this.editBoxes[EditBoxType.ID].string;
        const pw = this.editBoxes[EditBoxType.PW].string;
        NETWORKMGR.reqWalletConnect(address, id, pw, (response) => {
            if(response.returnCode === "0") {
                NETWORKMGR.reqLogin(id, pw, (response)=>{
                    if(response.returnCode === "0") {
                        GAMEDATA.setPassword(pw);
                        GAMEDATA.setServerData(response);
                        SCENEMGR.nextScene("home", false);
                    }
                });
            } else {
                let msg = `<size=33><b>${response.returnMsg}\n\n\n</b></size>`;
                if(response.returnCode === "400") {
                    msg += "Cannot be created with that ID";
                } else if(response.returnCode === "402") {
                    msg += "The ID can only consist of\n4-12 characters of letters, numbers.";
                } else if(response.returnCode === "403") {
                    msg += "The Password can only consist of\n4-12 characters.";
                }
                new Popup(PopupType.OK, 
                    "NOTIFICATIONS",
                    msg
                ).open(); 
            }
        });
    }
}


