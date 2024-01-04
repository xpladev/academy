import { _decorator, Component, Label, Node, Tween, tween, Vec3 } from 'cc';
import { GAMEDATA } from './GameData';
import { ItemType } from './Item';
const { ccclass, property } = _decorator;

export enum TOPUI_KIND {
    SC = 0,
    STAGE,
    BONUS_STR,
    TOKEN,
    DIAMOND,
    LIFE,
}

@ccclass('TopUI')
export class TopUI extends Component {

    @property({type: Label})
    public scLabel: Label = null;

    @property({type: Label})
    public stageLabel: Label = null;

    @property({type: Label})
    public tokenLabel: Label = null;

    @property({type: Label})
    public diamondLabel: Label = null;

    @property({type: Label})
    public lifeLabel: Label = null;

    @property({type: Node})
    public bonusNode: Node = null;

    @property({type: Node})
    public bonusStrNode: Node[] = [];

    @property({type: Node})
    public modeNode: Node[] = [];

    @property({type: Node})
    public assetNode: Node[] = [];


    private bonusStr: boolean[] = [false, false, false, false];

    private sc: number = 0;
    private earnedDiamond: number = 0;

    
    init() {

        if(GAMEDATA.tutorial) {
            this.bonusNode.setPosition(-40, 0);
        } else {
            this.assetNode[2].active = false;
        }

        this.modeNode[GAMEDATA.getPlayMode()].active = true;

        this.resetTopUI(true, true, true);
        
    }

    public resetTopUI(sc?: boolean, diamond?: boolean, token?: boolean) {

        if(sc) {
            this.sc = 0;
            this.scLabel.string = String(this.sc);
        }
        
        if(diamond) {
            this.earnedDiamond = 0;
            this.diamondLabel.string = String(this.earnedDiamond);
        }

        if(token) {
            this.tokenLabel.string = String(0);
            GAMEDATA.setEarnedToken(0);
        }
    }

    public getTopUIPos(itemType: ItemType): Vec3 {
        switch(itemType) {
            case ItemType.COIN_POUCH: 
                return this.assetNode[0].position;
            case ItemType.LIFE: 
                return this.assetNode[1].position;
            case ItemType.BONUS_STR_X:
            case ItemType.BONUS_STR_P:
            case ItemType.BONUS_STR_L:
            case ItemType.BONUS_STR_A:
                return this.bonusStrNode[itemType-ItemType.BONUS_STR_X].position;
            case ItemType.SU: 
                return this.modeNode[1].position;
            case ItemType.GAME_TOKEN_POUCH: 
                return  this.assetNode[2].position;
        }
    }

    public utUI(uiKind: TOPUI_KIND, value: number, action: boolean) {
        switch(uiKind) {
            case TOPUI_KIND.SC: {
                this.sc += value;
                this.scLabel.string = String(this.sc);
                if(action) {
                    tween(this.scLabel.node)
                    .to(0.1,{scale: new Vec3(1.2,1.2,0)})
                    .to(0.1, {scale: new Vec3(1,1,0)})
                    .start();
                }
            }
            break;

            case TOPUI_KIND.STAGE: {
                let valueStr = value.toString();
                if(valueStr.length < 2) {
                    valueStr = '0' + valueStr;
                }
                this.stageLabel.string = valueStr;
            }
            break;

            case TOPUI_KIND.BONUS_STR: {
                this.bonusStr[value] = true;
                this.bonusStrNode[value].getChildByName("Earn").active = true;
                if(action) {
                    this.scaleTweenAction(this.bonusStrNode[value],0.1, new Vec3(1.2,1.2,0),new Vec3(1,1,0)).start();
                }
            }
            break;

            case TOPUI_KIND.TOKEN: {
                const earned_token = GAMEDATA.addEarnedToken(value);
                this.tokenLabel.string = String(earned_token);
                if(action) {
                    this.scaleTweenAction(this.assetNode[2], 0.1, new Vec3(1.1,1.1,0), new Vec3(1,1,0)).start();
                }   
            }    
            break;

            case TOPUI_KIND.DIAMOND: {
                this.earnedDiamond += value;
                this.diamondLabel.string = String(this.earnedDiamond);
                if(action) {
                    this.scaleTweenAction(this.assetNode[0], 0.1, new Vec3(1.1,1.1,0), new Vec3(1,1,0)).start();
                }
            }
            break;

            case TOPUI_KIND.LIFE: {
                this.lifeLabel.string = String(value);
                if(action) {
                    this.scaleTweenAction(this.assetNode[1], 0.1, new Vec3(1.1,1.1,0), new Vec3(1,1,0)).start();
                }
            }
            break;
        }
    }

    public isCompleteBonusStr(): boolean {
        let isBonusComplete = true;
        this.bonusStr.forEach((value: boolean, index: number) => {
            if(value === false) {
                isBonusComplete = false;
            }
        })
        if(isBonusComplete) {
            this.resetBonusStr();
        }
        
        return isBonusComplete;
    }

    public resetBonusStr() {
        this.bonusStr.forEach((value, index) => {
            this.bonusStr[index] = false;
            this.bonusStrNode[index].getChildByName("Earn").active = false;
        })
    }

    public hideBonusStr() {
        this.bonusNode.active = false;
    }

    public getCS(): number {
        return this.sc;
    }

    public getEarnedDiamond(): number {
        return this.earnedDiamond;
    }

    private scaleTweenAction(node: Node, duration: number, targetScale: Vec3, originScale: Vec3): Tween<Node> {
        return tween(node).to(duration, {
                scale:targetScale
            }).
            to(duration, {
                scale:originScale
            })
    }

}


