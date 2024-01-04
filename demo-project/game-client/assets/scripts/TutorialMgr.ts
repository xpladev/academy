import { _decorator, Button, Component, instantiate, Label, Node, Prefab, RichText, Toggle } from 'cc';
import { XPLAJS } from './XplaJs';
import { UTILS } from './Utils';
import { Popup, PopupType } from './Popup';
import { GAMEDATA } from './GameData';
import { SCENEMGR } from './SceneMgr';
import { NETWORKMGR } from './NetworkMgr';
const { ccclass, property } = _decorator;

enum AcademyLink {
    MAIN = 0,
    TOKEN,
    EXPLORER,
    NFT,
    TX,
}

enum TutorialStep{
    WELCOME = 0,
    CREATE_WALLET,
    REWARD,
    GET_TOKEN,
    GET_TOKEN_LEARN,
    GET_NFT,
    GET_NFT_LEARN,
    WELL_DONE,
    MAX
}

@ccclass('TutorialMgr')
export class TutorialMgr extends Component {

    @property({type: Node})
    private bgNode: Node = null;

    @property({type: Node})
    private pilotNode: Node = null;

    @property({type: Node})
    private pagingNode: Node = null;

    @property({type: RichText})
    private commonTitleText: RichText = null;

    @property({type: Button})
    private btnWelcome: Button = null;

    @property({type: Button})
    private btnCopyAddress: Button = null;

    @property({type: Button})
    private btnCopyMnemonic: Button = null;

    @property({type: Button})
    private btnGoReward: Button = null;

    @property({type: Button})
    private btnStage2: Button = null;

    @property({type: Button})
    private btnTxHash: Button = null;

    @property({type: Button})
    private btnExplorer: Button = null;

    @property({type: Button})
    private btnGoToken: Button = null;

    @property({type: Button})
    private btnLearnToken: Button = null;

    @property({type: Button})
    private btnGoNft: Button = null;

    @property({type: Button})
    private btnMinting: Button = null;

    @property({type: Button})
    private btnLearnNft: Button = null;

    @property({type: Button})
    private btnGoLast: Button = null;

    @property({type: Button})
    private btnAcademys: Button[] = [];

    @property({type: Button})
    private btnGoTitle: Button = null;

    @property({type: Node})
    private stepNode: Node[] = [];

    @property({type: Toggle})
    private toggleConfirm: Toggle = null;

    @property({type: Prefab})
    private progress: Prefab = null;

    private txHashCw20: string = null;
    private mintCost = 500;
    private rewardWallet = 1000;

    private academyLinks: string[] = [
        "https://academy.xpla.dev/",
        "https://academy.xpla.dev/docs/category/utilize-tokens-cw20",
        "https://academy.xpla.dev/docs/settings/create-testnet-transaction/check-tx-in-explorer",
        "https://academy.xpla.dev/docs/category/utilize-nftcw721",
        "https://explorer.xpla.io/testnet/tx/"
    ];


    onLoad() {

        const nextStep = GAMEDATA.getTutorialStep();
        this.setNextStep(nextStep); 

        this.initListener();
    
    }

    private setNextStep(nextStep: number) {
        if(nextStep >= TutorialStep.CREATE_WALLET) {
            this.stepNode[nextStep-1].active = false;
        }
        if(nextStep !== TutorialStep.GET_TOKEN) {
            this.stepNode[nextStep].active = true;
        }
        GAMEDATA.setTutorialStep(nextStep);

        const stepNode = this.node.getChildByName("Step"+nextStep);
        if(stepNode !== null) {
            
            const titleStrs: string[] = ["A WARM WELCOME", "WALLET CREATED", "", "YOU'VE GOT ACADEMY TOKENS", 
                                            "CHECK OUT XPLA ACADEMY", "EXPERIENCE MINTING", "CHECK OUT XPLA ACADEMY", ""];


            let stageNum = 1;
            if(nextStep >= TutorialStep.GET_TOKEN && nextStep <= TutorialStep.GET_NFT) {
                stageNum = 2;
            } else if(nextStep >= TutorialStep.GET_NFT_LEARN) {
                stageNum = 3;
            }
            this.commonTitleText.string = `<color=#000000>STAGE ${stageNum}  <b>${titleStrs[nextStep]}</b></color>`

            let curPageIdx = 0;
            if(nextStep === TutorialStep.WELCOME) {
                curPageIdx = 1;
                this.pilotNode.active = true;
                const SentenceNode = stepNode.getChildByName("Talk").getChildByName("Sentence");
                const sentence = "<color=#000000>Welcome to the <b>BREAK THE BRICKS</b>\n: XPLA ACADEMY Edition!\n\nLet's make your XPLA wallet\n<b>super easy!!</b></color>";
                SentenceNode.getComponent(RichText).string = sentence;
            } else if(nextStep === TutorialStep.CREATE_WALLET) {
                curPageIdx = 2;
                const address = GAMEDATA.getTutorialAddress();
                this.pilotNode.active = false;
                stepNode.getChildByName("Address").getChildByName("Label").getComponent(Label).string = address;
                stepNode.getChildByName("Mnemonic").getChildByName("Label").getComponent(Label).string = GAMEDATA.getTutorialMnemonic();
            } else if(nextStep === TutorialStep.REWARD) { 
                this.bgNode.active = false;
                this.pilotNode.active = false;
            } else if(nextStep === TutorialStep.GET_TOKEN) {
                curPageIdx = 3;
                const earnedToken = GAMEDATA.getEarnedToken();
                const address = GAMEDATA.getTutorialAddress();
                NETWORKMGR.reqTokenReward(
                    address, earnedToken, 0, this.node.parent, (response) => {
                        if(response.returnCode === '0') {
                            this.pilotNode.active = true;
                            this.stepNode[nextStep].active = true;
                            this.txHashCw20 = response.txhash;
                            const earnTokenStr = UTILS.insertCommas(earnedToken);
                            const sentence1 = `<color=#000000><size=35><b>HOORAY!</b></size>\n<size=18>You've got</size>\n<size=35><b>${earnTokenStr} </b></size><size=18>ACADEMY TOKENS!!</size></color>`;
                            stepNode.getChildByName("Talk").getChildByName("Sentence").getComponent(RichText).string = sentence1;
                        } else {
                            new Popup(PopupType.OK, 
                                "NOTIFICATIONS",
                                `A server error has occurred\n(${response.returnMsg})`,
                                () => {
                                    this.setNextStep(TutorialStep.GET_TOKEN_LEARN);
                                }
                            ).open();
                        }
                    }
                );
            } else if(nextStep === TutorialStep.GET_TOKEN_LEARN) {
                curPageIdx = 4;
                this.pilotNode.active = false;
            } else if(nextStep === TutorialStep.GET_NFT) {
                curPageIdx = 5;
                this.pilotNode.active = true;                
            } else if(nextStep === TutorialStep.GET_NFT_LEARN) {
                curPageIdx = 6;
                this.pilotNode.active = false;
            } else if(nextStep === TutorialStep.WELL_DONE) {
                this.pilotNode.active = false;
                this.bgNode.active = false;
            }

            for(let i=0; i<curPageIdx; i++) {
                const progress = instantiate(this.progress);
                this.pagingNode.addChild(progress);
                progress.setPosition(-100+(50*i), 0);
            }            
        }
    }

    private initListener() {
        //step0
        this.btnWelcome.node.on(Button.EventType.CLICK, () => {
            const mnemonic = XPLAJS.createWallet();
            GAMEDATA.setTutorialMnemonic(mnemonic);
            GAMEDATA.setTutorialAddress(XPLAJS.getWalletAddress(mnemonic));
            this.setNextStep(TutorialStep.CREATE_WALLET);            
        }, this);

        //step1
        this.btnCopyAddress.node.on(Button.EventType.CLICK, () => {
            const address = GAMEDATA.getTutorialAddress();
            if(address !== null) {
                UTILS.copyToClipboard(address);
            }
        }, this);

        this.btnCopyMnemonic.node.on(Button.EventType.CLICK, () => {
            UTILS.copyToClipboard(GAMEDATA.getTutorialMnemonic());
        }, this);

        this.toggleConfirm.node.on('toggle', (toggle: Toggle) => {
            this.toggleConfirm.isChecked = toggle.isChecked;
        }, this);

        this.btnGoReward.node.on(Button.EventType.CLICK, () => {
            if(this.toggleConfirm.isChecked === false) {
                new Popup(PopupType.OK, "NOTIFICATIONS",
                "Copy the mnemonic to a safe place and\ncheck the checkbox").open();
            } else {
                this.rewardCreateWallet();
            }
        }, this);

        //step 2
        this.btnStage2.node.on(Button.EventType.CLICK, () => {
            GAMEDATA.setTutorialStage(2);
            GAMEDATA.setTutorialStep(TutorialStep.GET_TOKEN);
            SCENEMGR.nextScene("game", true);
        }, this);

        //step 3
        this.btnTxHash.node.on(Button.EventType.CLICK, () => {
            setTimeout(()=>{
                const url = this.academyLinks[AcademyLink.TX]+this.txHashCw20;
                window.open(url, "_blank");
            },200);
        }, this);

        this.btnExplorer.node.on(Button.EventType.CLICK, () => {
            setTimeout(()=>{
                window.open(this.academyLinks[AcademyLink.EXPLORER], "_blank");
            },200);
        }, this);

        this.btnGoToken.node.on(Button.EventType.CLICK, () => {
            if(this.txHashCw20 !== null) {
                this.setNextStep(TutorialStep.GET_TOKEN_LEARN);
            }
        }, this);

        //step4
        this.btnLearnToken.node.on(Button.EventType.CLICK, () => {
            setTimeout(()=>{
                window.open(this.academyLinks[AcademyLink.TOKEN], "_blank");
            }, 200);
        }, this);

        this.btnGoNft.node.on(Button.EventType.CLICK, () => {
            this.setNextStep(TutorialStep.GET_NFT);
        }, this);


        //step5
        this.btnMinting.node.on(Button.EventType.CLICK, () => {
            this.reqPaddleNftMint();            
        }, this);

        //step6
        this.btnLearnNft.node.on(Button.EventType.CLICK, () => {
            setTimeout(()=>{
                window.open(this.academyLinks[AcademyLink.NFT], "_blank");
            }, 200);
        }, this);

        this.btnGoLast.node.on(Button.EventType.CLICK, () => {
            this.setNextStep(TutorialStep.WELL_DONE);
        }, this);
        
        //step7
        this.btnAcademys.forEach( (btn, index) => {
            btn.node.on(Button.EventType.CLICK, () => {
                setTimeout(()=>{
                    window.open(this.academyLinks[index], "_blank");
                }, 200);
            }, this);
        });

        this.btnGoTitle.node.on(Button.EventType.CLICK, () => {
            GAMEDATA.setEarnedToken(0);
            GAMEDATA.setTutorialStage(1);
            GAMEDATA.setCurStage(1);
            GAMEDATA.setTutorialStep(TutorialStep.WELCOME);
            GAMEDATA.tutorial = false;
            SCENEMGR.nextSceneDirectly("signup");
        }, this);
    }

    private rewardCreateWallet() {
        const address = GAMEDATA.getTutorialAddress();
        NETWORKMGR.reqTokenReward(
            address, this.rewardWallet, 1, this.node.parent, (response) => {
                if(response.returnCode === "0") {
                    this.setNextStep(TutorialStep.REWARD);
                } else {
                    new Popup(PopupType.OK, 
                        "NOTIFICATIONS",
                        `A server error has occurred\n(${response.returnMsg})\n\nTry Again.`,
                        () => {
                            this.rewardCreateWallet();
                        }
                    ).open();
                }
            }
        );
    }
    private reqPaddleNftMint() {
        const address = GAMEDATA.getTutorialAddress();
        const mnemonic = GAMEDATA.getTutorialMnemonic();
        
        const paddle_width = 120;
        const paddle_count = 2;
        const ball_count = 5;
        XPLAJS.getAccountInfo(mnemonic).then( (info) => {
            NETWORKMGR.reqPaddleNftMintUnsigned(address, this.mintCost, paddle_width, paddle_count, ball_count, info.pubKey, info.seqNum, this.node.parent, (response?: any) => {
                if(response.returnCode === '0') {
                    const fee = String(response.fee).slice(0, -5);
                    const decimal_fee = UTILS.convertString(fee, ".", 18).slice(0, 12);
                    const payAmount = Number(response.payAmount);
                    const tid = Number(response.tid);
                    const unsignTx = String(response.unsignedTx);
                    XPLAJS.getSignTx(mnemonic, unsignTx).then( (signTx) => {
                        NETWORKMGR.reqPaddleNftMint(address, tid, signTx, this.node.parent, (response?: any) => {
                            if(response.returnCode === '0') {
                                const descript: string = `<size=33><b>Minting is completed!</b></size>\n\n\n<size=20><b>Required Token</b>\n<color=#004FFF>${payAmount} ACADEMY-TKN</color>\n\n<b>Fee</b>\n<color=#004FFF>${decimal_fee} XPLA</color></size>`
                                new Popup(PopupType.OK, "NOTIFICATIONS", descript, (msg? :string) => {
                                    GAMEDATA.setTutorialStage(3);
                                    GAMEDATA.setTutorialStep(TutorialStep.GET_NFT_LEARN);
                                    const paddleDefault = [
                                        { trait_type: 'paddle_width', value: String(paddle_width)},
                                        { trait_type: 'paddle_count', value: String(paddle_count)},
                                        { trait_type: 'ball_count', value: String(ball_count)}];
                                    GAMEDATA.setPaddleAttr(paddleDefault);
                                    SCENEMGR.nextScene("game", true);
                                }).open();
                            } else {
                                new Popup(PopupType.OK, 
                                    "NOTIFICATIONS",
                                    `A server error has occurred\n(${response.returnMsg})\n\nTry Again.`,
                                    () => {
                                        this.reqPaddleNftMint();
                                    }
                                ).open(); 
                            }
                        })
                    });
                    
                } else {
                    new Popup(PopupType.OK, 
                        "NOTIFICATIONS",
                        `A server error has occurred\n(${response.returnMsg})\n\nTry Again.`,
                        () => {
                            this.reqPaddleNftMint();
                        }
                    ).open();
                }
            });
        });
    }
}


