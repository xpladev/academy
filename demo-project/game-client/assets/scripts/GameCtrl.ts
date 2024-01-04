import { _decorator, Component, Node, Input, input,EventTouch, 
    EventKeyboard, KeyCode, EventMouse, director, UITransform, Canvas, 
    Vec3, tween, Button, Label, Tween } from 'cc';
import { GAMEDATA, PlayMode, STAGE_MAX } from './GameData';
import { BricksObjectPool } from './BricksObjectPool';
import { PaddleMgr } from './PaddleMgr';
import { ItemType } from './Item';
import { TOPUI_KIND, TopUI } from './TopUI';
import { Paddle } from './Paddle';
import { UTILS } from './Utils';
import { NETWORKMGR } from './NetworkMgr';
import { Popup, PopupType } from './Popup';
import { SCENEMGR } from './SceneMgr';
import { BallMgr } from './BallMgr';

const { ccclass, property } = _decorator;

export enum ColliderTag {
    BALL = 0,
    WALL = 1,
    BRICK = 2,
    PADDLE = 3,
    BALL_OUT = 4,
    BRICK_ALLY = 5,
    ITEM = 6,
    BALL_ENEMY = 7,
    BULLET = 8,
}

@ccclass('GameCtrl')
export class GameCtrl extends Component {

    @property({type: Node})
    public topUINode: Node = null;

    @property({type: Node})
    public paddleMgrNode: Node = null;

    @property({type: Node})
    public gameOverNode: Node = null;

    @property({type: Node})
    public gameClearNode: Node = null;

    @property({type: Node})
    public certificateNode: Node = null;

    @property({type: Node})
    public bonusCompleteNode: Node = null;

    @property({type: Node})
    public brickLayer: Node = null;

    @property({type: Node})
    public playIntroEffNode: Node[] = [];

    @property({type: Node})
    public defenseBrickNode: Node = null;

    @property({type: Node})
    public stageAlertNode: Node = null;

    @property({type: Node})
    public ballMgrNode: Node = null;
    

    private canvas: Canvas = null;
    private isPlaying: boolean = false;
    private screen_width: number = 0;
    private paddle_move_min: number = 0;
    private paddle_move_max: number = 0;
    private isNotiSaveScore: boolean = false;
    private isFirstAllClear = 0;
    private rewardDiamond = 0;

    public topUI: TopUI = null;
    public paddleMgr: PaddleMgr = null;
    public brickObjPool: BricksObjectPool = null;
    public ballMgr: BallMgr = null;

    onLoad() {

        GAMECTRL = this;

        this.initListener();

        let scene = director.getScene();
        this.canvas = scene.getComponentInChildren(Canvas);
        this.screen_width = this.canvas.getComponent(UITransform).width;
        
        this.paddleMgr = this.paddleMgrNode.getComponent(PaddleMgr);
        this.paddleMgr.init();
        this.setPaddleWidth();

        this.brickObjPool = this.brickLayer.getComponent(BricksObjectPool);
        this.brickObjPool.init();

        this.ballMgr = this.ballMgrNode.getComponent(BallMgr);
        this.ballMgr.init();

        this.topUI = this.topUINode.getComponent(TopUI);
        this.topUI.init();
        this.topUI.utUI(TOPUI_KIND.LIFE, this.ballMgr.getHasBallMax(), false);

        if(GAMEDATA.getPlayMode() === PlayMode.STAGE) {
            const curStage = GAMEDATA.tutorial?GAMEDATA.getTutorialStage() : GAMEDATA.getCurStage();
            this.topUI.utUI(TOPUI_KIND.STAGE, curStage, false);
        } 
        //else if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
        //     const id = GAMEDATA.getServerData().id;
        //     const pw = GAMEDATA.getPassword();
        //     const date = Math.floor(new Date().getTime()/1000);
        //     NETWORKMGR.reqInfiniteStart(id, pw, date, (response)=>{
        //         if(response.returnCode === "0") {
        //             GAMEDATA.setEcKey(String(response.date));
        //         }
        //     });
        // }


        if(GAMEDATA.tutorial) {
            this.topUI.hideBonusStr();
        }

        this.setPlayIntroShow();

    }

    private setPlayIntroShow() {
        this.playIntroEffNode[0].active = true;
        this.playIntroEffNode[1].active = true;

        tween(this.node).delay(0.5).call( () => {
            this.playIntroEffectOut();
            
            this.paddleMgr.setBallDirection(true, false);
            this.stageAlertNode.active = true;
            if(GAMEDATA.tutorial) {
                const tutorialStage = "Stage"+GAMEDATA.getTutorialStage();
                const tutorialAlertNode = this.stageAlertNode.getChildByName("Tutorial").getChildByName(tutorialStage);
                tutorialAlertNode.active = true;
            } else {
                if(GAMEDATA.getPlayMode() === PlayMode.STAGE) {
                    const stageAlertNode = this.stageAlertNode.getChildByName("Stage");
                    if(stageAlertNode !== null) {
                        stageAlertNode.getChildByName(GAMEDATA.getCurStage().toString()).active = true;       
                    }
                } else if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                    this.stageAlertNode.getChildByName("Infinite").active = true;
                    this.paddleMgr.setBallDirection(true, true);
                    this.isPlaying = true;
                }
            }

            if(GAMEDATA.getPlayMode() === PlayMode.STAGE) {
                tween(this.stageAlertNode).delay(2).call(()=>{
                    if(GAMEDATA.tutorial === false){
                        const stageAlertNode = this.stageAlertNode.getChildByName("Stage");
                        if(stageAlertNode !== null) {
                            stageAlertNode.getChildByName(GAMEDATA.getCurStage().toString()).active = false;       
                        }
                    }
                    this.stageAlertNode.active = false;
                    this.paddleMgr.setBallDirection(true, true);
                    this.isPlaying = true;
                }).start();
            } else {
                tween(this.stageAlertNode).delay(1.5).call(()=>{
                    this.stageAlertNode.active = false;
                }).start();
           }
        }).start();
        
    }

    private playIntroEffetIn() {
        this.playIntroEffNode[0].active = true;
        tween(this.playIntroEffNode[0].position).to(0.3, new Vec3(0, 0, 0), 
            {
                easing: 'smooth',
                onUpdate: (target:Vec3, ratio:number) => {
                    this.playIntroEffNode[0].position = target;
                }
            }).start();

        this.playIntroEffNode[1].active = true;
        tween(this.playIntroEffNode[1].position).to(0.3, new Vec3(0, 0, 0), 
            {
                easing: 'smooth',
                onUpdate: (target:Vec3, ratio:number) => {
                    this.playIntroEffNode[1].position = target;
                }
            }).start();
    }

    private playIntroEffectOut() {
        tween(this.playIntroEffNode[0].position).to(0.3, new Vec3(-this.screen_width/2, 0, 0),
            {
                easing: 'smooth',
                onUpdate: (target:Vec3, ratio:number) => {
                    this.playIntroEffNode[0].position = target;
            }}).call(()=>{
                this.playIntroEffNode[0].active = false;
            }).start();

        tween(this.playIntroEffNode[1].position).to(0.3, new Vec3(this.screen_width/2, 0, 0),
            {
                easing: 'smooth',
                onUpdate: (target:Vec3, ratio:number) => {
                    this.playIntroEffNode[1].position = target;
            }}).call(()=>{
                this.playIntroEffNode[1].active = false;
            }).start();
    }

    public setPaddleWidth() {
        const paddle_half_width = this.paddleMgr.getContentWidth()/2;
        this.paddle_move_min = paddle_half_width - (this.screen_width/2);
        this.paddle_move_max = (this.screen_width/2) - paddle_half_width;
    }

    initListener() {

        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onPaddleMove, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onPaddleMove, this);
        input.on(Input.EventType.KEY_DOWN, this.onKeyStart, this);

        const btnNextNode = this.gameClearNode.getChildByName("BtnNext").getComponent(Button);
        if(GAMEDATA.tutorial) {
            btnNextNode.node.setPosition(0, btnNextNode.node.position.y);
        }
        btnNextNode.node.on(Button.EventType.CLICK, () => {
            GAMEDATA.nextStage();
            if(GAMEDATA.tutorial) {
                SCENEMGR.nextScene("tutorial", true);
            } else {
                this.nextStageEffect();                
            }
        }, this);

        const btnFinishNode = this.gameClearNode.getChildByName("BtnFinish").getComponent(Button);
        btnFinishNode.node.on(Button.EventType.CLICK, () => {
            this.procCertificate();
        }, this);

        const btnClearRetry = this.gameClearNode.getChildByName("BtnRetry").getComponent(Button);
        if(GAMEDATA.tutorial) {
            btnClearRetry.node.active = false;
        } else {
            btnClearRetry.node.on(Button.EventType.CLICK, () => {
                this.resetGame(false);
            }, this);
        }

        const btnClearHome = this.gameClearNode.getChildByName("BtnHome").getComponent(Button);
        if(GAMEDATA.tutorial) {
            btnClearHome.node.active = false;
        } else {
            btnClearHome.node.on(Button.EventType.CLICK, () => {
                this.reqUserInfo();
            }, this);
        }

        const btnRetry = this.gameOverNode.getChildByName("BtnRetry").getComponent(Button);
        btnRetry.node.on(Button.EventType.CLICK, () => {
            if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                const titleNode = this.gameOverNode.getChildByName("Infinite");
                titleNode.getChildByName("Normal").active = false;
                titleNode.getChildByName("Best").active = false;
                titleNode.active = false;
            }
            this.resetGame(false);
        }, this);

        const btnHome = this.gameOverNode.getChildByName("BtnHome").getComponent(Button);
        btnHome.node.on(Button.EventType.CLICK, () => {
            if(GAMEDATA.tutorial) {
                if(GAMEDATA.getEarnedToken() === 0){
                    GAMEDATA.setEarnedToken(10);
                }
                SCENEMGR.nextScene("tutorial", true);
            } else {
                if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                    if(this.isNotiSaveScore === true) {
                        const desc = "<size=33><b>To save your BEST SCORE,\n\nvisit the leaderboard!</b></size>\n\n\nWould you like to proceed?";
                        new Popup(PopupType.YES_OR_NO, "NOTIFICATIONS", desc, (msg)=>{
                            if(msg === "YES") {
                                this.isNotiSaveScore = false;
                                const url = String(GAMEDATA.getServerData().leaderboardUri);
                                window.open(url, "_blank");
                            } else if(msg === "NO") {
                                this.reqUserInfo();
                            }
                        }).open();
                    } else {
                        this.reqUserInfo();
                    }
                } else {
                    this.reqUserInfo();
                }
            }
        }, this);

        const btnLeaderboard = this.gameOverNode.getChildByName("Infinite").getChildByName("BtnLeaderboard").getComponent(Button);
        btnLeaderboard.node.on(Button.EventType.CLICK, () => {
            setTimeout(()=>{
                const url = String(GAMEDATA.getServerData().leaderboardUri);
                window.open(url, "_blank");
            }, 200);
        }, this);
    }

    onTouchStart(event: EventTouch) {
        if(this.isPlaying && this.ballMgr.getBallStop() === false) {
            const pos = new Vec3(this.paddleMgr.node.position.x, this.paddleMgr.node.position.y+30,0);
            this.ballMgr.createBall(this.canvas.node, false, pos, this.paddleMgr);

            if(GAMEDATA.getPlayMode() === PlayMode.STAGE) {
                if(GAMEDATA.getCurStage() === 1 || GAMEDATA.getTutorialStage() === 1) {
                    this.paddleMgr.setVisibleShotInfo(0, false);
                    this.paddleMgr.setVisibleShotInfo(1, true);
                }
            }
            
        }
    }

    onPaddleMove(event: EventMouse | EventTouch) {
        if(this.isPlaying) {
            const uiLocation = event.getUILocation();
            let touchPoint_x = uiLocation.x-(this.screen_width / 2);
            touchPoint_x = Math.max(this.paddle_move_min, touchPoint_x);
            touchPoint_x = Math.min(touchPoint_x, this.paddle_move_max);
            this.paddleMgr.setPosition(touchPoint_x);
        }
    }

    onKeyStart(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ESCAPE:
                {
                    this.procGameOver();
                }
                break;
        }
    }

    
    public resetGame(isComplete: boolean) {

        Tween.stopAll();
        
        this.ballMgr.destroyAllBall();
        if(GAMEDATA.getPlayMode() === PlayMode.STAGE) {
            const curStage = GAMEDATA.tutorial?GAMEDATA.getTutorialStage() : GAMEDATA.getCurStage();
            this.topUI.utUI(TOPUI_KIND.STAGE, curStage, false);
        } 
        //else if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
        //     const id = GAMEDATA.getServerData().id;
        //     const pw = GAMEDATA.getPassword();
        //     const date = Math.floor(new Date().getTime()/1000);
        //     NETWORKMGR.reqInfiniteStart(id, pw, date, (res)=>{
        //         if(res.returnCode === "0") {
        //             GAMEDATA.setEcKey(String(res.date));
        //         }
        //     });
        // }

        this.gameOverNode.active = false;
        this.gameClearNode.active = false;
        
        this.brickObjPool.resetBricks();
        this.ballMgr.reset();

        this.isPlaying = true;
        this.paddleMgr.resetPaddle();
        this.paddleMgr.setBallDirection(true, isComplete?false:true);
        
        this.topUI.resetTopUI(true, true, true);     
        this.topUI.utUI(TOPUI_KIND.LIFE, this.ballMgr.getHasBallMax() - this.ballMgr.getDeadBallCnt(), false);
    }

    public procGameOver() {
        if(this.isPlaying) {
            this.isPlaying = false;
            this.paddleMgr.setBallDirection(false, false);
            this.ballMgr.moveStopBall();
            this.brickObjPool.getItemMgr().setItemsStop(true);
            this.brickObjPool.stopBricks();
            this.paddleMgr.setVisibleShotInfo(1, false);

            if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                this.saveData(this.getTopUIDiamond(), this.getTUSC(), 0);
            } else {
                tween(this.node).delay(0.8).call( ()=> {
                    this.gameOverNode.active = true;
                    this.gameOverNode.setSiblingIndex(9990);
                    this.gameOverNode.getChildByName("Stage").active = true;
                    if(GAMEDATA.tutorial) {
                        this.gameOverNode.getChildByName("BtnHome").getChildByName("Label").getComponent(Label).string = "SKIP";
                    }
                }).start();
            }
        }
    }

    procGameClear() {
        if(this.isPlaying) {
            this.isPlaying = false;
            this.paddleMgr.resetBullet();
            this.paddleMgr.setVisibleShotInfo(1, false);
            this.paddleMgr.setBallDirection(undefined, false);
            if(GAMEDATA.tutorial === false) {
                if(GAMEDATA.getCurStage() === STAGE_MAX) {
                    this.gameClearNode.getChildByName("BtnFinish").active = true;
                    this.gameClearNode.getChildByName("BtnNext").active = false;
                }
                this.saveData(this.getTopUIDiamond(), 0, GAMEDATA.getCurStage());
            } 
            tween(this.node).delay(0.5).call( ()=> {
                this.gameClearNode.active = true;
                this.gameClearNode.setSiblingIndex(9990);
            }).start();
            
        }   
    }

    private procCertificate() {

        this.ballMgr.destroyAllBall();
        this.gameClearNode.active = false;
        this.certificateNode.active = true;

        const idLabel = this.certificateNode.getChildByName("UI_Name").getChildByName("Label").getComponent(Label);
        idLabel.string = String(GAMEDATA.getServerData().id);

        const descLabel = this.certificateNode.getChildByName("Descript").getComponent(Label);
        const earnedDiamond = UTILS.insertCommas(this.rewardDiamond);
        descLabel.string = `You've cleared all 20 stages and earned ${earnedDiamond} DIAMOND.\nYou can FINALLY mint top-level paddle NFT now!!\nConvert DIAMOND and mint powerful NFT right away.`;

        const stempNode = this.certificateNode.getChildByName("Stemp");
        const btnHome = stempNode.getChildByName("BtnHome").getComponent(Button);
        btnHome.node.on(Button.EventType.CLICK, ()=>{
            this.reqUserInfo();
        }, this);

        const btnNft = stempNode.getChildByName("BtnNft").getComponent(Button);
        btnNft.node.on(Button.EventType.CLICK, ()=>{
            setTimeout(() => {
                const url = String(GAMEDATA.getServerData().mintUri);
                window.open(url, "_blank");
            }, 200);
        }, this);
    }

    nextStageEffect() {
        this.gameOverNode.active = false;
        this.gameClearNode.active = false;

        this.ballMgr.destroyAllBall();
        this.playIntroEffetIn();

        tween(this.node).delay(0.5).call(()=>{
            this.nextGame();
        }).start();
    }

    private nextGame() {
        this.resetGame(true);
        this.setPlayIntroShow();
    }


    public isPlayingNow(): boolean {
        return this.isPlaying;
    }


    public getTopUIPos(itemType: ItemType): Vec3 {
        return this.topUI.getTopUIPos(itemType);
    }

    public getTUSC(): number {
        return this.topUI.getCS();
    }
    public getTopUIDiamond(): number {
        return this.topUI.getEarnedDiamond();
    }

    public us(sc: number, action: boolean) {
        this.topUI.utUI(TOPUI_KIND.SC, sc, action);
    }

    public updateToken(token: number) {
        this.topUI.utUI(TOPUI_KIND.TOKEN, token, true);
    }

    public updateDiamond(gold: number) {
        this.topUI.utUI(TOPUI_KIND.DIAMOND, gold, true);
    }

    public updateLife(life: number) {
        //this.has_ball_max += life;
        this.ballMgr.addHasBallMax(life);
        const hasBallMax = this.ballMgr.getHasBallMax();
        const hasBallCur = this.ballMgr.getCurBallCnt();
        const deadBallCnt = this.ballMgr.getDeadBallCnt();
        this.topUI.utUI(TOPUI_KIND.LIFE, hasBallMax - deadBallCnt, true);

        if(hasBallCur < hasBallMax) {
            if(this.isPlaying) {
                this.paddleMgr.setBallDirection(true, true);
            }
        }
    }

    public updateBonusStr(index: number) {
        this.topUI.utUI(TOPUI_KIND.BONUS_STR, index, true);
        this.checkBonusComplete();
    }


    public bulletPaddle() {
        if(this.isPlayingNow() && this.ballMgr.getBallStop() === false) {
            this.paddleMgr.createBullet();
        }
    }

    public getPaddles(): Paddle[] {
        return this.paddleMgr.getPaddles();
    }

    public defenseBrick() {
        this.brickObjPool.createDefenseBricks();
    }

    

    private checkBonusComplete() {
        if(this.isPlaying) {
            if(this.topUI.isCompleteBonusStr()) {
                this.procBonusComplete();
            }
        }
    }

    private procBonusComplete() {
        this.bonusCompleteNode.active = true;
        this.topUI.utUI(TOPUI_KIND.DIAMOND, 250, true);
        setTimeout(()=>{
            this.bonusCompleteNode.active = false;
        }, 2000);
    }


    private reqUserInfo() {
        const pid = Number(GAMEDATA.getServerData().pid);
        NETWORKMGR.reqUserInfo(pid, (response) => {
            if(response.returnCode === "0") {
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

    public saveData(diamond: number, score: number, stage: number) {
        const pid = Number(GAMEDATA.getServerData().pid);
        NETWORKMGR.reqSaveData(pid, diamond, score, stage, (response?: any) => {
            if(response.returnCode === "0") {
                if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                    tween(this.node).delay(0.8).call( ()=> {
                        this.gameOverNode.active = true;
                        this.gameOverNode.setSiblingIndex(9990);
                        this.gameOverNode.getChildByName("Bg").active = false;
                        const titleNode = this.gameOverNode.getChildByName("Infinite");
                        titleNode.active = true;
                        if(response.isBestScore === 1) {
                            this.isNotiSaveScore = true;
                            titleNode.getChildByName("Best").active = true;
                        } else {
                            titleNode.getChildByName("Normal").active = true;
                        }
                        const curScoreStr = UTILS.insertCommas(this.getTUSC());
                        titleNode.getChildByName("Score").getComponent(Label).string = curScoreStr;
                    }).start();
                }
            } else {
                new Popup(PopupType.OK, 
                    "NOTIFICATIONS",
                    `A server error has occurred\n(${response.returnMsg})`
                ).open(); 
            }
        });
    }

    public getPaddleMgrPos(): Vec3 {
        return this.paddleMgr.getPos();
    }
}

export let GAMECTRL = null;


