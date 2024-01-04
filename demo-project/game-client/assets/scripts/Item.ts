import { _decorator, BoxCollider2D, Collider2D, Component, Contact2DType, ERigidBody2DType, IPhysics2DContact, RigidBody2D, tween, Vec3 } from 'cc';
import { ItemMgr } from './ItemMgr';
import { Paddle } from './Paddle';
import { Brick } from './Brick';
import { ColliderTag } from './GameCtrl';
const { ccclass, property } = _decorator;

export enum ItemType {
    COIN_POUCH = 0,
    HUGE_BALL,
    PADDLE_GUN,
    LIFE,
    BOMB,
    BONUS_STR_X,
    BONUS_STR_P,
    BONUS_STR_L,
    BONUS_STR_A,
    SU,
    GAME_TOKEN_POUCH,
    DEFENSE_BRICK,
    MAX,
}

@ccclass('Item')
export class Item extends Component {

    private itemType: number = 0;
    private isTweenAction: boolean = false;
    private targetPos: Vec3 = null;

    private isGetProc: boolean = false;
    private isAutoGet: boolean = false;

    private itemMgr: ItemMgr = null;
    
    onLoad() {

        this.itemMgr = this.node.parent.getComponent(ItemMgr);

        let collider = this.node.getComponent(BoxCollider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        
    }

    setProperty(itemType: number, startPos: Vec3, targetPos: Vec3) {
        this.itemType = itemType;
        this.node.setPosition(startPos);
        this.targetPos = targetPos;
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

        if(otherCollider.tag === ColliderTag.PADDLE) {
            this.node.getComponent(RigidBody2D).destroy();
            this.itemGetProc(otherCollider);
            this.isAutoGet = false;
        } else if(otherCollider.tag === ColliderTag.BRICK_ALLY) {
            const brick = otherCollider.node.getComponent(Brick);
            if(brick !== null) {
                brick.damage();
                this.node.destroy();
            }
        } else if(otherCollider.tag === ColliderTag.BALL_OUT) {
            selfCollider.node.destroy();
        }
    }

    private itemGetProc(otherCollider: Collider2D) {
        this.isGetProc = true;
        switch(this.itemType) {
            case ItemType.COIN_POUCH: 
            case ItemType.LIFE:
            case ItemType.BONUS_STR_X:
            case ItemType.BONUS_STR_P:
            case ItemType.BONUS_STR_L:
            case ItemType.BONUS_STR_A:
            case ItemType.SU:
            case ItemType.GAME_TOKEN_POUCH:
                {
                    this.isTweenAction = true;
                    tween(this.node.position).to(0.5, this.targetPos, {
                        easing: 'quadIn',  //'smooth', //'fade', //'circIn',   //'sineIn' , //'quadIn',
                        onUpdate: (target:Vec3, ratio:number) => {
                            if(this.node !== null) {
                                this.node.position = target;
                            }
                        }
                    }).call(()=>{
                        try{
                            if(this.node.isValid) {
                                this.itemMgr.procItem(this.itemType);
                                this.node.destroy();
                            }
                        }catch(error) {
                            console.log("item error = ", error);
                        }
                    }).start();
                }
                break;

            case ItemType.HUGE_BALL: 
            case ItemType.PADDLE_GUN:
            case ItemType.DEFENSE_BRICK:
                {
                    this.node.getComponent(RigidBody2D).enabledContactListener = false;
                    tween(this.node).to(0.2, {scale: new Vec3(2,2,0)}).call(() => {
                        this.itemMgr.procItem(this.itemType);
                        this.node.destroy();
                    }).start();
                }
                break;

            case ItemType.BOMB:
                {
                    const paddle = otherCollider.node.getComponent(Paddle);
                    if(paddle.isImmortal() === false) {
                        paddle.bombPaddle(true);
                    }
                    this.node.destroy();
                }
                break;
        }
    }


    public stopItem(stop: boolean) {
        if(this.isTweenAction === false) {
            const rigidBody = this.node.getComponent(RigidBody2D);
            if(rigidBody !== null) {
                rigidBody.gravityScale = stop?0:0.2;
                rigidBody.type = stop?ERigidBody2DType.Static:ERigidBody2DType.Dynamic;
            }
        }
    }

    public setAutoGet() {
        if(this.itemType === ItemType.BOMB) {
            tween(this.node).to(0.5, {scale: new Vec3(0.1,0.1,0)}).call(()=>{
                this.node.destroy();
            }).start();
        } else {
            this.isAutoGet = true;
            const rigidBody = this.node.getComponent(RigidBody2D);
            if(rigidBody) {
                rigidBody.gravityScale = 2;
            }
        }
    }

    public isItemGetProc(): boolean {
        return this.isGetProc;
    }

    update(dt: number) {
        if(this.isAutoGet) {
            const targetPos = this.itemMgr.getPaddleMgrPos();
            const direction = targetPos.clone().subtract(this.node.position).normalize();
            const movement = direction.multiplyScalar(10);
            const adjustPosX = this.node.position.x+movement.x;
            this.node.setPosition(new Vec3(adjustPosX, this.node.position.y,0));
        }
    }

}

