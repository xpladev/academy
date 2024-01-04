import { _decorator, Component, director, instantiate, misc, Node, ParticleSystem2D, Prefab, Tween, tween, UIOpacity, v2, Vec2, Vec3 } from 'cc';
import { GAMEDATA, PlayMode } from './GameData';
import { Paddle } from './Paddle';
import { GAMECTRL } from './GameCtrl';
import { UTILS } from './Utils';
const { ccclass, property } = _decorator;

@ccclass('PaddleMgr')
export class PaddleMgr extends Component {

    @property({type: Prefab})
    public paddles: Prefab[] = [];

    @property({type: Prefab})
    public direction: Prefab = null;

    @property({type: Prefab})
    public directionBg: Prefab[] = [];

    @property({type: Prefab})
    public particle: Prefab = null;

    @property({type: Node})
    public shotInfoNode: Node[] = [];

    @property({type: Node})
    public bulletNode: Node = null;

    private isBullet: boolean = false;
    private bulletTime = 0;
    private bulletDuraTime = 0;
    private bulletEndTime = 10;

    private paddleMap = new Map<number, Paddle>();

    private directionNode: Node = null;
    private directionBgNode: Node = null;


    init() {
        const paddleAttr = GAMEDATA.getPaddleAttr();
        const paddleWidth = paddleAttr.paddle_width;
        const paddleCount = paddleAttr.paddle_count;
        
        const paddleIdx = UTILS.getPaddleIdx(paddleWidth);
        const default_paddle_with: number[] = [100, 120, 140];
        const scaleWidthRate = paddleWidth / default_paddle_with[paddleIdx];
        this.paddleMap.clear();

        for(let i=0; i<paddleCount; i++) {
            const paddleNode = instantiate(this.paddles[paddleIdx]);
            this.node.addChild(paddleNode);
            if(scaleWidthRate !== 1) {
                paddleNode.scale = new Vec3(scaleWidthRate, 1);
            }
            this.setChildPaddlePos(paddleWidth, paddleCount, paddleNode, i);
            this.paddleMap.set(i, paddleNode.getComponent(Paddle));
        }

        this.createBallDirection(paddleCount);

        if(GAMEDATA.getPlayMode() === PlayMode.STAGE) {
            if(GAMEDATA.getCurStage() === 1 || GAMEDATA.getTutorialStage() === 1) {
                this.shotInfoNode[0].active = true;
                this.shotInfoNode[1].active = false;
            }
        }
    }

    private createBallDirection(paddle_count: number) {
        
        if(this.directionNode === null) {
            this.directionNode = instantiate(this.direction);      
            const directionBgIdx = Math.min(paddle_count-1, 2);
            this.directionBgNode = instantiate(this.directionBg[directionBgIdx]);   
        } else {
            this.directionNode.active = true;
            this.directionBgNode.active = true;
            tween(this.directionNode).stop();
        }
        
        this.node.addChild(this.directionBgNode);
        this.node.addChild(this.directionNode);
        this.directionNode.setPosition(0, 0);
        this.directionNode.angle = 90;
    }

    public getBallVector(): Vec2 {
        const radian = misc.degreesToRadians(this.directionNode.angle);
        
        const x = Math.round(Math.cos(radian) * 100) / 100;
        const y = Math.round(Math.sin(radian) * 100) / 100;
        
        return v2(x, y);
    }

    public setBallDirection(visible: boolean | undefined, action: boolean) {
        if(visible !== undefined) {
            this.directionNode.active = visible;
            if(visible === false) {
                tween(this.directionNode).stop();
            }
        }

        if(action) {
            const t1 = tween(this.directionNode).to(0.5, {angle: 90});
            const t2 = tween(this.directionNode).to(0.5, {angle:150});
            const t3 = tween(this.directionNode).to(0.5, {angle:90});
            const t4 = tween(this.directionNode).to(0.5, {angle:30});
            tween(this.directionNode).tag(3).sequence(t1,t2,t3,t4).repeatForever().start();
        } else {
            Tween.stopAllByTag(3);
        }
    }

    public getContentWidth(): number {

        const paddleAttr = GAMEDATA.getPaddleAttr();
        let paddleWidth = 0;
        
        this.paddleMap.forEach( (paddle) => {
            if(paddle !== null) {
                const active = paddle.isPaddleActive();
                if(active) {
                    paddleWidth += paddleAttr.paddle_width;
                }
            }
        })

        return paddleWidth;
    }

    public setPosition(x: number) {
        this.node.setPosition(new Vec3(x, this.node.position.y, 0));
    }

    private setChildPaddlePos(paddleWidth: number, paddleCount: number, paddleNode: Node, idx: number) {

        let paddleGap = 0;
        let startX = 0;
        if(paddleCount > 1) {
            paddleGap = paddleWidth / 2;
            startX = -paddleGap*(paddleCount-1);
        }

        const x = startX+(paddleWidth*idx);
        paddleNode.setPosition(new Vec3(x, paddleNode.position.y));
    }

    public getPaddles(): Paddle[] {

        const paddles: Paddle[] = [];
        this.paddleMap.forEach( (paddle) => {
            paddles.push(paddle);
        })

        return paddles;
    }

    public bombPaddle(pos: Vec3) {
        const particleNode = instantiate(this.particle);
        particleNode.parent = this.node;
        particleNode.setPosition(pos);
        const particleSystem = particleNode.getComponent(ParticleSystem2D);
        particleSystem.duration = 0.5;

        const paddleAttr = GAMEDATA.getPaddleAttr();
        
        tween(this.node).delay(0.1).call(() => {
            let activePaddleCnt = 0;
            this.paddleMap.forEach( (paddle) => {
                if(paddle !== null ) {
                    if(paddle.isPaddleActive()) {
                        activePaddleCnt ++;
                    }
                }
            })

            let isGameOver = true;
            let index = 0;
            this.paddleMap.forEach( (paddle) => {
                if(paddle.isPaddleActive()) {
                    this.setChildPaddlePos(paddleAttr.paddle_width, activePaddleCnt, paddle.node, index);
                    isGameOver = false;
                    index ++;
                }
            })

            if(isGameOver) {
                GAMECTRL.ballMgr.destroyAllBall();
                this.directionNode.active = false;
                this.directionBgNode.active = false;
                GAMECTRL.procGameOver();
            } else {
                GAMECTRL.setPaddleWidth();
            }
        }).start();   
    }

    public resetPaddle() {
        const paddleAttr = GAMEDATA.getPaddleAttr();
        this.createBallDirection(paddleAttr.paddle_count);
        this.paddleMap.forEach((paddle, index) => {
            if(paddle !== null) {
                paddle.bombPaddle(false);
                this.setChildPaddlePos(paddleAttr.paddle_width, paddleAttr.paddle_count, paddle.node, index);
            }
        });
        GAMECTRL.setPaddleWidth();

        this.bulletNode.removeAllChildren();
        this.resetBullet();
    }

    public resetBullet() {
        
        this.isBullet = false;
        this.bulletTime = 0;
        this.bulletDuraTime = 0;
        this.paddleMap.forEach((paddle) => {
            if(paddle !== null) {
                paddle.setGun(false);
            }
        })
    }

    public pauseBullet() {
        this.isBullet = false;
    }

    public resumeBullet() {
        if(this.isBullet === false && this.bulletDuraTime > 0) {
            this.isBullet = true;
        }
    }

    public createBullet() {
        this.isBullet = true;
        this.bulletTime = 0;
        this.bulletDuraTime = 0;
        this.paddleMap.forEach((paddle) => {
            if(paddle !== null) {
                paddle.setGun(true);
            }
        })
    }

    public setImmortal(isImmortal: boolean) {
        this.paddleMap.forEach( (paddle) => {
            paddle.setImmortal(isImmortal);
        })
    }

    protected update(dt: number): void {
        
        if(this.isBullet && GAMECTRL.isPlayingNow()) {
            this.bulletDuraTime += dt;
            if(this.bulletDuraTime <= this.bulletEndTime) {
                this.bulletTime += dt;
                if(this.bulletTime >= 0.5) {
                    //create bullet
                    this.paddleMap.forEach( (paddle) => {
                        if(paddle !== null) {
                            if(paddle.isPaddleActive()) {
                                paddle.createBullet(this.bulletNode, this.node);
                            }
                        }
                    })

                    this.bulletTime = 0;
                }
            } else {
                this.resetBullet();
            }

        }
    }

    public setVisibleShotInfo(idx: number, visible: boolean) {
        this.shotInfoNode[idx].active = visible;

        if(idx === 1) {
            if(visible) {
                const t1 = tween(this.shotInfoNode[1].getComponent(UIOpacity)).to(0.1, {opacity: 255});
                const t2 = tween(this.shotInfoNode[1].getComponent(UIOpacity)).to(2, {opacity: 255});
                const t3 = tween(this.shotInfoNode[1].getComponent(UIOpacity)).to(0.1, {opacity: 0});
                tween(this.shotInfoNode[1].getComponent(UIOpacity)).sequence(t1, t2, t3).repeatForever().start();
            } else {
                tween(this.shotInfoNode[1]).stop();
            }
        }
    }

    public getPos(): Vec3 {
        return this.node.position;
    }

}


