import { _decorator, Component, instantiate, Prefab, tween, Vec3 } from 'cc';
import { UTILS } from './Utils';
import { Item, ItemType } from './Item';
import { GAMECTRL } from './GameCtrl';
const { ccclass, property } = _decorator;

const ITEM_GET_VALUE_DIAMOND_POUCH = 10;
const ITEM_GET_VALUE_TOKEN_POUCH = 100;
const ITEM_GET_VALUE_SC_BONUS = 10;

@ccclass('ItemMgr')
export class ItemMgr extends Component {

    @property({type: Prefab})
    public items: Prefab[] = [];

    private itemTotalRate: number;
    private itemEachRate: number[];

    private itemExistCheck = false;
    private itemChkTime = 0;
    private itemScBonusCnt = 0;


    public resetItemMgr() {
        this.itemScBonusCnt = 0;
    }

    public setItemMgrInfo(itemTotalRate: number, itemEachRate: number[]) {
        this.itemTotalRate = itemTotalRate;
        this.itemEachRate = itemEachRate;

        this.itemExistCheck = false;
        this.itemChkTime = 0;
    }

    public createItem(startPos: Vec3): number {
        if(this.itemTotalRate > 0) {
            let itemRate = UTILS.getRandomInt(1, 100);
            if(itemRate <= this.itemTotalRate) {

                itemRate = UTILS.getRandomInt(1, 100);
                let rateValue = 0;
                let itemType = 0;
                for(let i=0; i<this.itemEachRate.length; i++) {
                    const v = this.itemEachRate[i];
                    if(itemRate <= (v+rateValue)) {
                        itemType = i;
                        break;
                    } else {
                        rateValue += v;
                    }
                }

                let itemNode = instantiate(this.items[itemType]);
                tween(itemNode).delay(0.2).call(()=>{
                    this.node.addChild(itemNode);
                    itemNode.getComponent(Item).setProperty(itemType, startPos, this.targetPos(itemType));
                }).start();

                return itemType;

            }

            return -1;
        }

        return -1;
    }

    public setItemsStop(stop: boolean) {
        this.node.getComponentsInChildren(Item).forEach( (item) => {
            if(item) {
                item.stopItem(stop);
            }
        })
    }

    public procItem(itemType: number) {

        switch(itemType) {
            case ItemType.COIN_POUCH:
                GAMECTRL.updateDiamond(ITEM_GET_VALUE_DIAMOND_POUCH);
                break;
            case ItemType.GAME_TOKEN_POUCH:
                GAMECTRL.updateToken(ITEM_GET_VALUE_TOKEN_POUCH);
                break;
            case ItemType.HUGE_BALL: 
                GAMECTRL.ballMgr.hugeBall();
                break;
            case ItemType.PADDLE_GUN: 
                GAMECTRL.bulletPaddle();
                break;
            case ItemType.LIFE: 
                GAMECTRL.updateLife(1);
                break;
            case ItemType.BONUS_STR_X:
            case ItemType.BONUS_STR_P:
            case ItemType.BONUS_STR_L:
            case ItemType.BONUS_STR_A:
                GAMECTRL.updateBonusStr(itemType-ItemType.BONUS_STR_X);
                break;
            case ItemType.SU:{
                    this.itemScBonusCnt ++;
                    GAMECTRL.us(ITEM_GET_VALUE_SC_BONUS, true);
                }     
                break;
            case ItemType.DEFENSE_BRICK:
                GAMECTRL.defenseBrick();
                break;
        }
    }

    private targetPos(itemType: number): Vec3 {
        switch(itemType) {
            case ItemType.COIN_POUCH:
            case ItemType.LIFE:
            case ItemType.BONUS_STR_X:
            case ItemType.BONUS_STR_P:
            case ItemType.BONUS_STR_L:
            case ItemType.BONUS_STR_A:
            case ItemType.SU:
            case ItemType.GAME_TOKEN_POUCH:
                return GAMECTRL.getTopUIPos(itemType);
        }   

        return new Vec3(0,0,0);
    }

    public checkItemExist(): boolean {
        
        const itemNodes = this.node.getComponentsInChildren(Item);
        if(itemNodes.length > 0) {
            this.itemExistCheck = true;
            return true;   
        }

        return false;
    }

    public getPaddleMgrPos(): Vec3 {
        return GAMECTRL.getPaddleMgrPos();
    }

    public setItemAutoGet() {
        this.node.getComponentsInChildren(Item).forEach( (item) => {
            if(item) {
                if(item.isItemGetProc() === false) {
                    item.setAutoGet();
                }
            }
        })
    }

    protected update(dt: number): void {
        
        if(this.itemExistCheck) {
            if(GAMECTRL.isPlayingNow()) {
                this.itemChkTime += dt;
                if(this.itemChkTime >= 1) {
                    this.itemChkTime = 0;
                    if(this.checkItemExist() === false) {
                        GAMECTRL.procGameClear();
                        this.itemExistCheck = false;
                    }
                }
            }
        }
    }

    public getItemScBonusCnt(): number {
        return this.itemScBonusCnt;
    }
}


