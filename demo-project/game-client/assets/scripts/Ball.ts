import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact, CircleCollider2D, 
    RigidBody2D, v2, Vec3, director, Vec2, tween, UIOpacity, game } from 'cc';

import { UTILS } from './Utils';
import { Brick } from './Brick';
import { ColliderTag, GAMECTRL } from './GameCtrl';

const { ccclass, property } = _decorator;

@ccclass('Ball')
export class Ball extends Component {

    private ball_idx: number = 0;
    private ball_speed: number = 0;
    private ball_adjust_speed: number = 0;
    private ball_prevVelocity: Vec2 = new Vec2;
    private isHuge: boolean = false;
    private deltaTime: number = 0;

    private isMoving: boolean = false;
    private rigidBody: RigidBody2D = null;

    private isEnemyBall = false;
    private checkDeltaTime: number = 0;


    onLoad() {

        this.rigidBody = this.node.getComponent(RigidBody2D);

        let collider = this.node.getComponent(CircleCollider2D);
        if(collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            
            if(collider.tag === ColliderTag.BALL_ENEMY) {
                console.log("+++++ create enemy ball !@@!@!@#");
            }
        }
    }
    

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        switch(otherCollider.tag) {
            case ColliderTag.BRICK: {
                    this.adjustVelocity(selfCollider);
                    GAMECTRL.brickObjPool.contactBricksLayer(otherCollider);
                }
                break;
            case ColliderTag.BRICK_ALLY: {
                    this.adjustVelocity(selfCollider);
                    otherCollider.node.getComponent(Brick).damage();
                    if(this.isEnemyBall) {
                        this.node.destroy();
                    }
                }
                break;
            case ColliderTag.WALL:{
                    this.adjustVelocity(selfCollider);
                }
                break;
            case ColliderTag.BALL_OUT: {
                    if(this.isEnemyBall) {
                        this.node.destroy();
                    } else {
                        GAMECTRL.ballMgr.destroyBall(this.ball_idx);
                    }
                }
                break;
        }   
    }


    public moveStart(index: number, isEnemyBall: boolean, direction: Vec2) {
        this.rigidBody.wakeUp();

        let ballVec: Vec3 = new Vec3;
        if(isEnemyBall) {
            this.ball_speed = 10;
        } else {
            this.ball_speed = 20;
        }
        ballVec.x = this.ball_speed*direction.x;
        ballVec.y = this.ball_speed*direction.y;
        this.ball_adjust_speed = this.ball_speed/2;

        this.rigidBody.linearVelocity = v2(ballVec.x, ballVec.y);
        this.isMoving = true;
        this.ball_idx = index;
        this.isEnemyBall = isEnemyBall;
        if(isEnemyBall === false) {
            this.node.scale = new Vec3(0.35, 0.35);
        }
    }

    public moveStop() {
        this.ball_prevVelocity = this.rigidBody.linearVelocity.clone();
        this.rigidBody.sleep();
        this.isMoving = false;
    }

    public setVisible(visible: boolean) {
        this.node.active = visible
    }

    public isMove(): boolean {
        return this.isMoving
    }

    public hugeBall() {
        if(this.isEnemyBall === false) {
            this.deltaTime = 0;
            if(this.isHuge === false) {
                this.isHuge = true;
                tween(this.node).to(0.3, {scale:new Vec3(1, 1, 0)}).start();    
            }
        }
    }

    private adjustVelocity(collider: Collider2D) {
        if(this.isEnemyBall === false) {
            const rigidBody = collider.node.getComponent(RigidBody2D);
            if(rigidBody) {
                let v = rigidBody.linearVelocity;
                
                if((v.x >= -10 && v.x <= 10) && (v.y >= -10 && v.y <= 10)) {
                    if(UTILS.getRandomInt(0, 1) === 0) {
                        v.x = v.x * 2;
                    } else {
                        v.y = v.y * 2;
                    }
                    rigidBody.linearVelocity = v2(v.x, v.y);
                }
                
                let isRandX = false;
                v = rigidBody.linearVelocity;
                if(v.x >= -2 && v.x <= 2) {
                    if(v.x < 0) {
                        v.x = -this.ball_adjust_speed;
                    } else if(v.x > 0) {
                        v.x = this.ball_adjust_speed;
                    } else {
                        isRandX = true;
                        v.x = UTILS.getRandomInt(-this.ball_adjust_speed,this.ball_adjust_speed);
                    }
                    rigidBody.linearVelocity = v2(v.x, v.y);
                }
                if(v.y >= -2 && v.y <= 2) {
                    if(v.y < 0) {
                        v.y = -this.ball_adjust_speed;
                    } else if(v.y > 0) {
                        v.y = this.ball_adjust_speed;
                    } else {
                        if(isRandX) {
                            if(UTILS.getRandomInt(0,1) === 0) {
                                v.y = -this.ball_adjust_speed;
                            } else {
                                v.y = this.ball_adjust_speed;
                            }
                        } else {
                            v.y = UTILS.getRandomInt(-this.ball_adjust_speed,this.ball_adjust_speed);
                        }
                    }
                    rigidBody.linearVelocity = v2(v.x, v.y);
                }
                            
                if((v.x >= 40 || v.x <= -40) && (v.y >= 40 || v.y <= -40)) {
                    rigidBody.linearVelocity = v2(v.x/2, v.y/2);
                } else {
                    if((v.x >= 40 || v.x <= -40)) {
                        rigidBody.linearVelocity = v2(v.x/2, v.y);
                    }
                    if((v.y >= 40 || v.y <= -40)) {
                        rigidBody.linearVelocity = v2(v.x, v.y/2);
                    }
                }
            }
        }
    }

    public setFadeOut() {
        const oparcity = this.node.getComponent(UIOpacity);
        tween(oparcity).to(0.3, {opacity: 0}).start();
    }

    update(dt: number) {
    
        if(GAMECTRL !== null && this.isEnemyBall === false) {
            if(GAMECTRL.isPlayingNow() && this.isMoving) {
                if(this.isHuge) {
                    this.deltaTime += dt;
                    if(this.deltaTime >= 10) {
                        tween(this.node).to(0.3, {scale:new Vec3(0.35, 0.35, 0)}).start();
                        this.deltaTime = 0;
                        this.isHuge = false;
                    }
                }

                this.checkDeltaTime += dt;
                if(this.checkDeltaTime >= 1) {
                    this.checkDeltaTime = 0;
                    if(this.rigidBody.isAwake() === false) {
                        this.rigidBody.wakeUp();
                        this.rigidBody.linearVelocity = v2(20, -20);
                    }
                    if(this.rigidBody.linearVelocity === Vec2.ZERO) {
                        this.rigidBody.linearVelocity = v2(20, 20);
                    }
                }
            }
        }
    }
}


