import { _decorator, Component, instantiate, ParticleSystem2D, Prefab, Vec3, BoxCollider2D, Contact2DType, Collider2D, IPhysics2DContact, Vec2 } from 'cc';
import { BrickType } from './BricksObjectPool';
import { ColliderTag } from './GameCtrl';
const { ccclass, property } = _decorator;

export interface BrickMsg {
    msg: string,
    type: BrickType,
    idx: Vec2,
    hp: number,
    position: Vec3,
    sc: number,
    enemy: boolean,
    group: number,
    bombLineIdx: number,
    attackableRate: number,
    attackableCnt: number,
}

@ccclass('Brick')
export class Brick extends Component {

    private brickMsg: BrickMsg = null;
    private particle: Prefab = null;

    private isAlive: boolean = true;

    public setProperty(type: BrickType, idxX: number, idxY: number, posX: number, posY: number, hp: number, 
        isEnemy: boolean, particle: Prefab, group: number, bombLineIdx: number, attackableRate: number, attackableCnt: number) {
        
        this.isAlive = true;
        this.brickMsg = {
            msg: "",
            type,
            idx: new Vec2(idxX, idxY),
            hp,
            position: new Vec3(0, 0, 0),
            sc: (type === BrickType.BOMB ? 5 : hp+1),
            enemy: isEnemy,
            group,
            bombLineIdx,
            attackableRate,
            attackableCnt,
        };

        this.particle = particle;
        this.node.setPosition(new Vec3(posX, posY, 0));

        if(type === BrickType.ALLY) {
            const brickCollider = this.node.getComponent(BoxCollider2D);
            brickCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.tag === ColliderTag.BRICK) {
            this.damage();
            const otherBrick = otherCollider.node.getComponent(Brick);
            if(otherBrick !== null) {
                otherBrick.damage();
            }
        }
    }


    public damage(): BrickMsg | undefined {

        if(this.isAlive === false) {
            return undefined;
        }

        if(this.brickMsg.type === BrickType.IMMORTAL) {
            return undefined;
        }

        this.brickMsg.hp --;
        if(this.brickMsg.hp < 0)
        {
            this.isAlive = false;
            this.brickMsg.msg = "Destroy";
            this.brickMsg.position = new Vec3(this.node.position.x, this.node.parent.position.y+this.node.position.y, 0);

            this.createParticle(this.node.position);
            this.node.destroy();
            return this.brickMsg;
        }

        this.brickMsg.msg = "Damage";
        this.brickMsg.position = new Vec3(this.node.position.x, this.node.parent.position.y+this.node.position.y, 0);

        return this.brickMsg;
    }

    private createParticle(pos: Vec3) {
        const particleNode = instantiate(this.particle);
        particleNode.parent = this.node.parent;
        particleNode.setPosition(pos);
        const particleSystem = particleNode.getComponent(ParticleSystem2D);
        particleSystem.duration = 0.5;
        particleNode.name = "Particle";
    }

}


