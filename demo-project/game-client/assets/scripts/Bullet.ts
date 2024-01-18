import { _decorator, BoxCollider2D, Collider2D, Component, Contact2DType, IPhysics2DContact } from 'cc';
import { ColliderTag, GAMECTRL } from './GameCtrl';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

    onLoad() {
        let collider = this.getComponent(BoxCollider2D);
        if(collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.tag === ColliderTag.BRICK) {
            GAMECTRL.brickObjPool.contactBricksLayer(otherCollider);
            selfCollider.node.destroy();
        } else if(otherCollider.tag === ColliderTag.WALL) {
            selfCollider.node.destroy();
        }
    }
}


