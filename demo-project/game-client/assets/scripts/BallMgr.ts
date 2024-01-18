import { _decorator, Component, game, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
import { GAMEDATA } from './GameData';
import { UTILS } from './Utils';
import { Ball } from './Ball';
import { GAMECTRL } from './GameCtrl';
import { TOPUI_KIND } from './TopUI';
import { PaddleMgr } from './PaddleMgr';
const { ccclass, property } = _decorator;

@ccclass('BallMgr')
export class BallMgr extends Component {

    @property({type:Prefab})
    public ballPrefab: Prefab = null;

    @property({type:Prefab})
    public enemyBallPrefab: Prefab = null;

    private has_ball_max = 0;
    private dead_ball_cnt = 0;
    private cur_ball_cnt = 0;
    private isBallStop: boolean = false;

    private moveBallMap: Map<number, Node> = new Map();

    init() {
        this.reset();
    }

    public reset() {
        this.has_ball_max = GAMEDATA.getPaddleAttr().ball_count;
        this.dead_ball_cnt = 0;
        this.cur_ball_cnt = 0;
        this.isBallStop = false;

        this.moveBallMap.clear();
    }

    public addHasBallMax(val: number) {
        this.has_ball_max += val;
    }
    public getHasBallMax(): number {
        return this.has_ball_max;
    }
    public getCurBallCnt(): number {
        return this.cur_ball_cnt;
    }
    public getDeadBallCnt(): number {
        return this.dead_ball_cnt;
    }
    public getBallStop(): boolean {
        return this.isBallStop;
    }
    

    public createBall(parent: Node, isEnemyBall: boolean, pos: Vec3, paddleMgr?: PaddleMgr) {
        if(isEnemyBall) {
            const ballNode = instantiate(this.enemyBallPrefab);
            const ballTs = ballNode.getComponent(Ball);
            ballNode.setPosition(pos);
            ballNode.parent = parent;
            
            const randVal = Math.random();
            const sign = UTILS.getRandomInt(0,1) === 0 ? true : false;
            const ballVec2 = new Vec2(sign?randVal:-randVal, -1);
            ballTs.moveStart(this.cur_ball_cnt, isEnemyBall, ballVec2);
        } else {
            if(this.cur_ball_cnt < this.has_ball_max) {
                const ballNode = instantiate(this.ballPrefab);
                ballNode.setPosition(pos);
                ballNode.parent = parent;
                this.moveBallMap.set(this.cur_ball_cnt, ballNode);
                const ballVec2 = paddleMgr?.getBallVector();
                const ballTs = ballNode.getComponent(Ball);
                if(ballTs) {
                    ballTs.moveStart(this.cur_ball_cnt, isEnemyBall, ballVec2);
                }
                
                this.cur_ball_cnt ++;
                if(this.cur_ball_cnt >= this.has_ball_max) {
                    paddleMgr?.setBallDirection(false, false);
                }
            }
        }
    }

    public fadeOutBall() {
        if(this.moveBallMap !== null && this.moveBallMap.size > 0) {
            this.moveBallMap.forEach( (ball) => {
                if(ball) {
                    ball.getComponent(Ball).setFadeOut();
                }
            })
        }
    }

    public hugeBall() {
        if(this.isBallStop === false && GAMECTRL.isPlayingNow()) {
            this.moveBallMap.forEach((ball) => {
                if(ball) {
                    ball.getComponent(Ball).hugeBall();
                }
            })   
        }
    }

    public moveStopBall() {
        if(this.moveBallMap !== null && this.moveBallMap.size > 0) {
            this.moveBallMap.forEach( (ball) => {
                if(ball) {
                    ball.getComponent(Ball).moveStop();
                }
            })
        }

        this.isBallStop = true;
    }

    public destroyBall(ball_idx: number) {
        let ballNode = this.moveBallMap.get(ball_idx);
        if(ballNode) {
            this.moveBallMap.delete(ball_idx);
            ballNode.destroy();
            this.dead_ball_cnt ++;
            GAMECTRL.topUI.utUI(TOPUI_KIND.LIFE, this.has_ball_max - this.dead_ball_cnt, false);
            if(this.dead_ball_cnt >= this.has_ball_max && this.moveBallMap.size === 0) {
                GAMECTRL.procGameOver();
            }
        }
    }

    public destroyAllBall() {
        if(this.moveBallMap.size > 0) {
            this.moveBallMap.forEach( (ball) => {
                if(ball) {
                    ball.destroy();
                }
            })
        }
        this.moveBallMap.clear();
    }

}


