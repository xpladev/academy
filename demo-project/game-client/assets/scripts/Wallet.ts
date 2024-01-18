import { _decorator, Button, Component, instantiate, Label, Node, Prefab, RichText, tween, Tween, UITransform, Vec3 } from 'cc';
import { GAMEDATA } from './GameData';
import { SCENEMGR } from './SceneMgr';
import { UTILS } from './Utils';
import { Popup, PopupType } from './Popup';
import { NETWORKMGR } from './NetworkMgr';
const { ccclass, property } = _decorator;

@ccclass('Wallet')
export class Wallet extends Component {

    @property({type: Node})
    public rankNode: Node[] = [];

    @property({type: Node})
    public nftListNode: Node = null;

    @property({type: Node})
    public progressNode: Node = null;

    @property({type: Label})
    public idLabel: Label = null;

    @property({type: Label})
    public addressLabel: Label = null;

    @property({type: Label})
    public assetAmounts: Label[] = [];

    @property({type: RichText})
    public rankText: RichText = null;

    @property({type: RichText})
    public pageText: RichText = null;

    @property({type: Label})
    public scoreLabel: Label = null;

    @property({type: Label})
    public dateLabel: Label = null;

    @property({type: Button})
    public btnLogout: Button = null;

    @property({type: Button})
    public btnCopy: Button = null;

    @property({type: Button})
    public btnConvert: Button = null;

    @property({type: Button})
    public btnLeaderboard: Button = null;

    @property({type: Button})
    public btnMintMore: Button = null;

    @property({type: Button})
    public btnArrow: Button[] = [];

    @property({type: Prefab})
    public paddleBox: Prefab = null;

    @property({type: Prefab})
    public paddleBoxSelector: Prefab = null;

    @property({type: Prefab})
    public paddles: Prefab[] = [];

    @property({type: Prefab})
    public parts: Prefab[] = [];

    @property({type: Prefab})
    public shadows: Prefab[] = [];

    
    private paddleSltIdx = -1;
    private paddleSelectorNode: Node = null;

    private getNftIdx = 0;
    private getNftTotalCnt = 0;
    private getNftTokenList: any[] = [];

    private nftCurPage = 0;
    private nftMaxPage = 0;
    private nftListMap: Map<string, any> = new Map();
    private nftListGradeMap: Map<string, number> = new Map();
    private nftSortArray: Array<[string, number]> = null;

    
    onLoad() {
        
        this.btnListener();

        this.walletUI();

        this.nftUI();


    }

    private btnListener() {
        this.btnLogout.node.on(Button.EventType.CLICK, ()=>{
            Tween.stopAll();
            SCENEMGR.nextScene("menu", false);
        }, this);

        this.btnCopy.node.on(Button.EventType.CLICK, ()=>{
            const address = this.addressLabel.string;
            if(address !== null) {
                UTILS.copyToClipboard(address);   
            }
        }, this);

        this.btnConvert.node.on(Button.EventType.CLICK, ()=>{
            setTimeout(()=>{
                const url = String(GAMEDATA.getServerData().convertUri);
                window.open(url, "_blank");
            }, 200);
            
        }, this);

        this.btnLeaderboard.node.on(Button.EventType.CLICK, ()=>{
            setTimeout(()=>{
                const url = String(GAMEDATA.getServerData().leaderboardUri);
                window.open(url, "_blank");
            }, 200);
        }, this);

        this.btnMintMore.node.on(Button.EventType.CLICK, ()=>{
            setTimeout(()=>{
                const url = String(GAMEDATA.getServerData().mintUri);
                window.open(url, "_blank");
            }, 200);
        }, this);

        this.btnArrow[0].node.on(Button.EventType.CLICK, ()=>{
            if(this.nftCurPage > 0) {
                this.nftCurPage --;
            }
            this.makePaddleBox(false);
        }, this);

        this.btnArrow[1].node.on(Button.EventType.CLICK, ()=>{
            if(this.nftCurPage < this.nftMaxPage) {
                this.nftCurPage ++;
            }
            this.makePaddleBox(false);
        }, this);
    }

    private walletUI() {
        const serverData = GAMEDATA.getServerData();

        const id = serverData.id;
        this.idLabel.string = id;

        

        const address = serverData.wallet;
        this.addressLabel.string = address;

        const xplaAmount = UTILS.convertRound(serverData.xpla, 6);
        this.assetAmounts[0].string = xplaAmount;

        const academyTknAmount = UTILS.insertCommas(parseInt(serverData.token));
        this.assetAmounts[1].string = academyTknAmount;

        const diamondAmount = UTILS.insertCommas(serverData.diamond);
        this.assetAmounts[2].string = diamondAmount;

        const ranking = serverData.chainRanking;
        if(ranking < 0) {
            this.rankNode[0].active = true;
            this.rankNode[1].active = false;
        } else {
            this.rankNode[0].active = false;
            this.rankNode[1].active = true;

            const rankStr = UTILS.insertCommas(ranking);
            this.rankText.string = `<color=#000000><b>${rankStr}</b></color> <color=#fa1a1a><size=18>RANK</size></color>`;
            const rankTextSize = this.rankText.getComponent(UITransform).width;

            const x = this.rankNode[1].position.x;
            const y = this.rankNode[1].position.y;
            this.rankNode[1].setPosition(x-(rankTextSize/4), y);

            const scoreStr = UTILS.insertCommas(serverData.chainHighScore);
            this.scoreLabel.string = scoreStr;

            this.dateLabel.string = `[Date ${serverData.chainHighScoreDate}]`;
        }
    }

    private nftUI() {

        const t_r1 = tween(this.progressNode).by(2, {angle: -360});
        const t_r2 = tween(this.progressNode).by(2, {angle: -360});
        tween(this.progressNode).sequence(t_r1, t_r2).repeatForever().start();

        //default paddle
        const extension = {
            "name": "NON_NFT_PADDLE",
            "attributes": [
                { trait_type: 'paddle_width', value: '100'},
                { trait_type: 'paddle_count', value: '1'},
                { trait_type: 'ball_count', value: '3'}
            ]
        };


        this.nftListMap.set("NON_NFT_PADDLE", extension);
        this.nftListGradeMap.set("NON_NFT_PADDLE", 230);
        
        const address = String(GAMEDATA.getServerData().wallet);
        NETWORKMGR.reqNftList(address, (response: any) => {
            if(response.returnCode === "0") {
                this.getNftTokenList = response.tokenList.tokens;
                this.getNftTotalCnt = this.getNftTokenList.length;
                if(this.getNftTotalCnt > 0) {
                    const token_id = this.getNftTokenList[this.getNftIdx];
                    this.reqNftInfo(address, String(token_id));     
                }
            } else {
                new Popup(PopupType.OK, 
                    "NOTIFICATIONS",
                    `A server error has occurred\n(${response.returnMsg})`
                ).open();
            }
        });
        
    }

    private reqNftInfo(address: string, token_id: string) {
        NETWORKMGR.reqNftInfo(address, token_id, (response) => {
            if(response.returnCode === "0") { 
                let nftGrade: number = 0;
                const nftExtension = response.extension;
                const nftAttribute = nftExtension.attributes;
                nftAttribute?.forEach( (v: any) => {
                    const type = String(v.trait_type);
                    switch(type) {
                        case 'paddle_width': nftGrade += Number(v.value); break;
                        case 'paddle_count': nftGrade += (Number(v.value) * 100); break;
                        case 'ball_count': nftGrade += (Number(v.value) * 10); break;
                    }
                });

                this.nftListMap.set(token_id, nftExtension);
                this.nftListGradeMap.set(token_id, nftGrade);
                this.getNftIdx ++;
                if(this.getNftIdx === this.getNftTotalCnt) {
                    this.nftSortArray = Array.from(this.nftListGradeMap).sort( (a,b) => b[1] - a[1]);
                    this.makePaddleBox(true);
                } else {
                    const token_id = this.getNftTokenList[this.getNftIdx];
                    this.reqNftInfo(address, String(token_id));
                }

            } else {
                new Popup(PopupType.OK, 
                    "NOTIFICATIONS",
                    `A server error has occurred\n(${response.returnMsg})`
                ).open();
                
            }
        });
    }

    private makePaddleBox(isFirst: boolean) {

        if(isFirst === false) {
            Tween.stopAll();
        }
        this.nftListNode.removeAllChildren();
        this.btnArrow[0].node.active = false;
        this.btnArrow[1].node.active = false;

        const listSize = this.nftSortArray.length;
        this.nftMaxPage = Math.trunc((listSize-1) / 3);

        const startIdx = (this.nftCurPage*3);
        const endIdx = startIdx+Math.min(listSize-startIdx, 3);

        let paddleCount = 0;
        let idx = 0;
        for(let i=startIdx; i<endIdx; i++) {
            const token_id = this.nftSortArray[i][0];
            const nftExtension = this.nftListMap.get(token_id);
            const nftAttribute = nftExtension.attributes;
            const paddleBoxNode = instantiate(this.paddleBox);
            paddleBoxNode.getChildByName("Name").getComponent(Label).string = nftExtension.name;

            this.nftListNode.addChild(paddleBoxNode);
            this.addButton(paddleBoxNode, idx.toString());
            const gap = (paddleBoxNode.getComponent(UITransform).width+20);
            const x = gap*idx;
            paddleBoxNode.setPosition(new Vec3(x,0,0));

            const extText = paddleBoxNode.getChildByName("Extension").getComponent(RichText);
            let attr_str: string = "";
            let attr_strs: string[] = ["", "", ""];
            let paddleWidth = 0;
            nftAttribute?.forEach( (v: any) => {
                if(v.trait_type === "paddle_count") {
                    paddleCount = Number(v.value);
                } else if(v.trait_type === "paddle_width") {
                    paddleWidth = Number(v.value);
                }
                
                const uiStr = this.getTypeUIStr(String(v.trait_type));
                if(uiStr !== undefined) {
                    let trait_str = `${uiStr} <b>${v.value}</b>`;
                    if(uiStr !== "Ball") {
                        trait_str += "  |  ";
                    }

                    const uiTypeIdx = this.getTypeUIIdx(String(v.trait_type));
                    if(uiTypeIdx !== undefined) {
                        attr_strs[uiTypeIdx] = trait_str;
                    }
                }
            })

            for(let k=0; k<3; k++) {
                attr_str += attr_strs[k];
            }
            extText.string = "<color=#000000>"+attr_str+"</color>";

            const paddleNode = paddleBoxNode.getChildByName("Paddle");
            if(paddleNode !== null) {
                for(let i=0; i<paddleCount; i++) {
                    let paddleIdx = UTILS.getPaddleIdx(paddleWidth);
                    const paddleChildNode = instantiate(this.paddles[paddleIdx]);
                    if(paddleChildNode !== null) {
                        const default_paddle_with: number[] = [100, 120, 140];
                        const scaleWidthRate = paddleWidth / default_paddle_with[paddleIdx];
                        if(scaleWidthRate !== 1) {
                            paddleChildNode.scale = new Vec3(scaleWidthRate, 1);
                        }
                        const realWidth = paddleChildNode.getComponent(UITransform).width;
                        this.setChildPaddlePos(realWidth, paddleCount, paddleChildNode, i);
                        paddleNode.addChild(paddleChildNode);                        
                    }
                }

                const partsIdx = Math.max(0, Math.min(paddleCount-1, 2));
                const partsNode = instantiate(this.parts[partsIdx]);
                paddleNode.addChild(partsNode);
            

                const p_t1 = tween(paddleNode.position).by(1, new Vec3(0, 10), {
                    easing: 'smooth',
                    onUpdate: (target:Vec3, ratio:number) => {
                        paddleNode.position = target;
                    }
                });
                const p_t2 = tween(paddleNode.position).by(1, new Vec3(0, -10), {
                    easing: 'smooth',
                    onUpdate: (target:Vec3, ratio:number) => {
                        paddleNode.position = target;
                    }
                });
                tween(paddleNode.position).sequence(p_t1, p_t2).repeatForever().start();

                const shadowNode = instantiate(this.shadows[partsIdx]);
                if(shadowNode !== null) {
                    paddleBoxNode.getChildByName("Shadow").addChild(shadowNode);
                    const s_t1 = tween(shadowNode).to(1, {scale: new Vec3(0.5,1,0)});
                    const s_t2 = tween(shadowNode).to(1, {scale: new Vec3(1.0,1,0)});
                    tween(shadowNode).sequence(s_t1, s_t2).repeatForever().start();
                }
            }


            if(this.paddleSltIdx === ((this.nftCurPage*3)+idx)) {
                this.paddleSelectorNode = instantiate(this.paddleBoxSelector);
                paddleBoxNode.addChild(this.paddleSelectorNode);
            }

            idx ++;
        }

        this.pageText.string = `<color=#000000><b>${this.nftCurPage+1} </b></color><color=#a9a9a9>/ ${this.nftMaxPage+1}</color>`;

        if(this.nftMaxPage > 0) {
            if(this.nftCurPage > 0) {
                this.btnArrow[0].node.active = true;
            }            
            if(this.nftCurPage < this.nftMaxPage) {
                this.btnArrow[1].node.active = true;
            }
        }
     }

     private setChildPaddlePos(paddleWidth: number, paddleCount: number, paddleChildNode: Node, idx: number) {

        let paddleGap = 0;
        let startX = 0;
        if(paddleCount > 1) {
            paddleGap = paddleWidth / 2;
            startX = -paddleGap*(paddleCount-1);
        }

        const x = startX+(paddleWidth*idx);
        paddleChildNode.setPosition(new Vec3(x, paddleChildNode.position.y));
    }


    private addButton(targetNode: Node, customData: string) {
        const clickEventHandler = new Component.EventHandler();
         clickEventHandler.target = this.node;
         clickEventHandler.component = 'Wallet';
         clickEventHandler.handler = 'paddleBoxSltCB';
         clickEventHandler.customEventData = customData;
         const button = targetNode.getComponent(Button);
         button.clickEvents.push(clickEventHandler);
    }

    paddleBoxSltCB(event: Event, customEventData: string) {
        const idx = parseInt(customEventData)
        if(this.paddleSltIdx != idx) {
            const paddleBoxNode = event.target as unknown as Node;
            if(this.paddleSelectorNode !== null) {
                this.paddleSelectorNode.removeFromParent();
            }
            this.paddleSelectorNode = instantiate(this.paddleBoxSelector);
            paddleBoxNode.addChild(this.paddleSelectorNode);
            this.paddleSltIdx = (this.nftCurPage*3)+idx;

            const token_id = this.nftSortArray[this.paddleSltIdx][0];
            GAMEDATA.setPaddleAttr(this.nftListMap.get(token_id).attributes);
        }
     }

     private getTypeUIStr(type: string): string | undefined {
        if(type === "paddle_width") {
            return "Width";
        } else if(type === "paddle_count") {
            return "Count";
        } else if(type === "ball_count") {
            return "Ball";
        }

        return undefined;
     }

     private getTypeUIIdx(type: string): number | undefined {
        if(type === "paddle_width") {
            return 1;
        } else if(type === "paddle_count") {
            return 0;
        } else if(type === "ball_count") {
            return 2;
        }

        return undefined;
     }

     public isSltNft(): boolean {
        return this.paddleSltIdx >= 0 ? true : false;
     }

}


