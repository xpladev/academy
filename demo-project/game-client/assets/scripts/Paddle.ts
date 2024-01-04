import { _decorator, Component, Node, Vec3, Prefab, instantiate, director, BoxCollider2D, Contact2DType, Collider2D, IPhysics2DContact, UIOpacity } from 'cc';
import { Brick } from './Brick';
import { ColliderTag, GAMECTRL } from './GameCtrl';

const { ccclass, property } = _decorator;

@ccclass('Paddle')
export class Paddle extends Component {

    @property({type: Prefab})
    public bullet: Prefab = null;

    @property({type: Prefab})
    public gun: Prefab = null;


    private immortal: boolean = false;

    onLoad() {

        const collider = this.node.getComponent(BoxCollider2D);
        collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    
    }


    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.tag === ColliderTag.BRICK) {
            otherCollider.node.getComponent(Brick).damage();
            if(this.immortal === false) {
                this.bombPaddle(true);
            }
        } else if(otherCollider.tag === ColliderTag.BALL_ENEMY) {
            otherCollider.node.destroy();
            if(this.immortal === false) {
                this.bombPaddle(true);
            }
        }
    }

    public setGun(add: boolean) {
        if(add) {
            const gunNode = instantiate(this.gun);
            this.node.addChild(gunNode);
            gunNode.setPosition(0, 20);
        } else {
            this.node.removeAllChildren();
        }
    }

    public createBullet(canvasNode: Node, parent: Node) {
        const bulletNode = instantiate(this.bullet);
        canvasNode.addChild(bulletNode);
        bulletNode.setPosition(new Vec3(
            parent.position.x+this.node.position.x, parent.position.y+40,0));
        
    }

    public bombPaddle(bomb: boolean) {
        
        if(bomb) {
            GAMECTRL.paddleMgr.bombPaddle(this.node.position);
            this.node.active = false;
        } else {
            this.node.active = true;
        }
    }

    public isPaddleActive(): boolean {
        return this.node.active;
    }

    public setImmortal(isImmortal: boolean) {
        this.immortal = isImmortal;
        const op = this.node.getComponent(UIOpacity);
        op.opacity = isImmortal ? 120 : 255;
    }

    public isImmortal(): boolean { 
        return this.immortal;
    }

}


