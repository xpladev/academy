import { _decorator, Component, instantiate, 
    Prefab, UITransform, Vec3, Collider2D, resources, JsonAsset, 
    Size, BoxCollider2D, Node, tween, Tween, v3 } from 'cc';
import { Brick, BrickMsg } from './Brick';
import { GAMEDATA, PlayMode } from './GameData';
import { GAMECTRL } from './GameCtrl';
import { ItemMgr } from './ItemMgr';
import { UTILS } from './Utils';
import { NETWORKMGR } from './NetworkMgr';

const INFINITE_STAGE_MAX = 6;
const SAME_TIME_NODE_CNT = 3;

const { ccclass, property } = _decorator;

export enum BrickType {
    NORMAL_0 = 0,
    NORMAL_1,
    NORMAL_2,
    IMMORTAL,
    BOMB,
    ALLY,
}

const InfiniteSpeedSec = 60;

@ccclass('BricksObjectPool')
export class BricksObjectPool extends Component {

    @property({type: Prefab})
    public bricks: Prefab[] = [];

    @property({type: Prefab})
    public bricks_break: Prefab[] = [];

    @property({type: Prefab})
    public particle: Prefab = null;

    @property({type: Node})
    public defenseBricksNode: Node = null;

    @property({type: Prefab})
    public rayCast: Node = null;


    private itemMgr: ItemMgr = null;

    private brickSize: Size = null;
    private brickEnemyCnt = 0;
    
    private defenseBricksOriginPos: Vec3 = null;
    private screenHeight = 0;

    private infiniteStage = 0;
    private infiniteDiff = 0;
    private infiniteTimeout: NodeJS.Timeout = null;
    private moveBricksSpeed = 0;

    private bombLineIdx = 0;
    private bombLineBricks: Map<number, Brick[]> = new Map();

    private bricksNodeIdx = 0;
    private bricksGroupIdx = 0;
    private bricksRemoveIdx = 0;

    private bricksNode: Node[] = [];

    private analyticsDataMap: Map<number, string> = new Map();
	
	private defenseBrickDelta = 0;

    init() {

        this.itemMgr = this.node.getComponent(ItemMgr);
        this.defenseBricksOriginPos = new Vec3(0, this.defenseBricksNode.position.y, 0);
        this.screenHeight = this.node.parent.getComponent(UITransform).height;

        this.bombLineBricks.clear();
        this.brickEnemyCnt = 0;
		this.defenseBrickDelta = 0;

        this.itemMgr.resetItemMgr();
        this.analyticsDataMap.set(0, "");

        this.createEnemyBricks();
        this.infiniteTimeout = setInterval(() => {
            this.checkNextBricks();
        }, 1000);        
    }

    private createEnemyBricks() {

        const playMode = GAMEDATA.getPlayMode();

        let url = "";
        if(GAMEDATA.tutorial) {
            url = "data/tutorial"+GAMEDATA.getTutorialStage();
        } else {
            if(playMode === PlayMode.STAGE) {
                url = "data/stage"+GAMEDATA.getCurStage();
            } else {
                this.infiniteStage ++;
                if(this.infiniteStage > INFINITE_STAGE_MAX) {
                    this.infiniteStage = 1;
                    this.infiniteDiff ++;
                }
                url = "data/infinite"+this.infiniteStage;
            }
        }

        let layer_width = this.node.getComponent(UITransform).width;

        resources.load(url, JsonAsset, (err, jsonAsset) => {
            if(err) {
                console.log("Failed to load json file : ", err);
                return;
            }

            const jsonData = jsonAsset.json;
            
            //item
            const itemTotalRate = jsonData.brick_item.total_rate;
            const itemEachRate: number[] = jsonData.brick_item.each_rate;
            this.itemMgr.setItemMgrInfo(itemTotalRate, itemEachRate);
            
            let extension_layer = 0;
            if(playMode === PlayMode.STAGE) {
                this.moveBricksSpeed = jsonData.brick_dynamic.gravity_time;
            } else {
                this.moveBricksSpeed = Math.max(30, InfiniteSpeedSec-this.infiniteDiff);
            }

            let enemyMoveHorizonSpeed = 0;
            if(this.moveBricksSpeed === 0) {
                enemyMoveHorizonSpeed = jsonData.brick_dynamic.move_horizon_speed;
            }

            const enemyBallRate = jsonData.brick_dynamic.enemy_ball_rate;
            const enemyBallCnt = jsonData.brick_dynamic.enemy_ball_cnt;

            this.bricksNode[this.bricksNodeIdx] = new Node(`Bricks_${this.bricksGroupIdx}`);
            this.node.addChild(this.bricksNode[this.bricksNodeIdx]);

            this.brickSize = new Size(jsonData.brick_size.width, jsonData.brick_size.height)
            const col = jsonData.bricks.length;
            for(let i=0; i<col; i++) {
                const row = jsonData.bricks[i].length;
                const bombLineBricks: Brick[] = [];
                if(this.moveBricksSpeed > 0) {
                    extension_layer += (jsonData.brick_gap.t+this.brickSize.height+jsonData.brick_gap.v);
                }

                for(let j=0; j<row; j++) {
                    let type = jsonData.bricks[i][j].type;
                    let hp = jsonData.bricks[i][j].hp;
                    if(type >= 0)
                    {
                        const brick = instantiate(this.bricks[type]);
                        brick.getComponent(UITransform).setContentSize(this.brickSize)
                        brick.getComponent(BoxCollider2D).size = this.brickSize;
                        this.bricksNode[this.bricksNodeIdx].addChild(brick);
                        let x = jsonData.brick_gap.l+(jsonData.brick_size.width/2)+(j*(jsonData.brick_size.width+jsonData.brick_gap.h))-(layer_width/2);
                        let y = -jsonData.brick_gap.t-(jsonData.brick_size.height/2)-(i*(jsonData.brick_size.height+jsonData.brick_gap.v));

                        const brickComponent = brick.getComponent(Brick);
                        brickComponent.setProperty(type, j, i, x, y, hp, true, this.particle, this.bricksGroupIdx, this.bombLineIdx, enemyBallRate, enemyBallCnt);
                        if(type === BrickType.IMMORTAL) {
                            brick.name = "BrickIm";
                        } else {
                            brick.name = "Brick";
                            this.brickEnemyCnt ++;
                            bombLineBricks[j] = brickComponent;
                        }
                    }
                    
                    if(j === row-1) {
                        this.bombLineBricks.set(this.bombLineIdx, bombLineBricks);
                        this.bombLineIdx ++;   
                    }
                }
            }


            this.bricksNode[this.bricksNodeIdx].setPosition(0, extension_layer);

            if(this.moveBricksSpeed > 0) {
                const bricksNode = this.bricksNode[this.bricksNodeIdx];
                const targetPosY = (this.screenHeight+extension_layer);

                if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                    tween(bricksNode.position).by(this.moveBricksSpeed, new Vec3(0, -targetPosY, 0), {
                        easing: 'linear',
                        onUpdate: (target:Vec3, ratio:number) => {
                            bricksNode.position = target;
                        }
                    }).call(() => {
                        bricksNode.removeFromParent();
                        this.bricksRemoveIdx ++;
                    }).start();
                } else {
                    const t1 = tween(bricksNode.position).by(this.moveBricksSpeed, new Vec3(0, -targetPosY, 0), {
                        easing: 'linear',
                        onUpdate: (target:Vec3, ratio:number) => {
                            bricksNode.position = target;
                        }
                    });
                    const t2 = tween(bricksNode.position).call(()=>{
                        bricksNode.position = new Vec3(0, extension_layer, 0);
                    });
                    tween(bricksNode.position).sequence(t1,t2).repeatForever().start();
                }
            } else {
                if(enemyMoveHorizonSpeed > 0) {
                    const target1 = -((jsonData.brick_gap.l/2)+30);
                    const target2 = (jsonData.brick_gap.l/2)+30;
                    const dura = 10 - enemyMoveHorizonSpeed;
                    const tween1 = tween(this.node).to(dura, {position: v3(target1, this.node.position.y, 0)});
                    const tween2 = tween(this.node).to(dura, {position: v3(target2, this.node.position.y, 0)});
                    if(UTILS.getRandomInt(0, 1) === 0) {
                        tween(this.node).sequence(tween1, tween2).repeatForever().start();
                    } else {
                        tween(this.node).sequence(tween2, tween1).repeatForever().start();
                    }
                }
            }
        });
    }

    private checkNextBricks() {      

        if(this.moveBricksSpeed > 0) {
            if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                if(this.bricksNode[this.bricksNodeIdx].position.y <= -this.brickSize.height) {
                    this.bricksNodeIdx ++;
                    this.bricksGroupIdx ++;
                    if(this.bricksNodeIdx >= SAME_TIME_NODE_CNT) {
                        this.bricksNodeIdx = 0;
                    }
                    this.createEnemyBricks();
                }
            }
        }
    }


    public contactBricksLayer(collider: Collider2D) {

        let brickMsg: BrickMsg | undefined = collider.node.getComponent(Brick).damage();
        if(brickMsg !== undefined) {
            if(brickMsg.msg === "Destroy") {
                if(brickMsg.enemy) {
                    this.procBrickDestroy(brickMsg);
                    if(brickMsg.type === BrickType.BOMB) {
                        this.procBombBricks(brickMsg.bombLineIdx, brickMsg.position);
                    }
                }
            } else if(brickMsg.msg === "Damage") {
                this.procBrickDamage(collider.node, brickMsg);
            }
        }
    }

    private procBrickDestroy(brickMsg: BrickMsg) {
        this.brickEnemyCnt --;
        GAMECTRL.us(brickMsg.sc, false);
        
        let dropItemType = -1;
        if(GAMECTRL.isPlayingNow()) {
            if(GAMEDATA.getPlayMode() === PlayMode.STAGE && this.brickEnemyCnt <= 0) {
                setTimeout(() => {
                    this.isBreakAllBricks().then( (v)=> {
                        if(v === true) {
                            GAMECTRL.ballMgr.moveStopBall();
                            tween(this.node).delay(0.5).call(()=>{
                                GAMECTRL.ballMgr.fadeOutBall();
                                if(this.itemMgr.checkItemExist()) {
                                    this.itemMgr.setItemAutoGet();
                                } else {    
                                    GAMECTRL.procGameClear();
                                }
                            }).start();
                        }
                    });
                }, 100);
                
            } else {
                dropItemType = this.itemMgr.createItem(brickMsg.position);
            }

            //analytics
            if(GAMEDATA.getPlayMode() === PlayMode.INFINITE) {
                try{
                    const isItemDrop = dropItemType > -1 ? 1 : 0;
                    if(isItemDrop === 0) {
                        dropItemType = 0;
                    }
                    
                    const analyticsMsg = `[${brickMsg.idx.x},${brickMsg.idx.y},${isItemDrop},${dropItemType}] `;
                    const groupIdx = brickMsg.group;
                    let analyticsStr = this.analyticsDataMap.get(groupIdx);
                    if(analyticsStr === undefined) {
                        analyticsStr = "";
                    }
                    analyticsStr += analyticsMsg;
                    this.analyticsDataMap.set(groupIdx, analyticsStr);
                    
                }catch(error) {
                    console.log(">> error : ", error);
                }
            }
        }
    }

    private procBrickDamage(brick: Node, brickMsg: BrickMsg) {
        let hp = Number(brickMsg.hp);
        const breakNode = instantiate(this.bricks_break[hp]);
        brick.addChild(breakNode);
        breakNode.getComponent(UITransform).setContentSize(this.brickSize);
        
        if(brickMsg.enemy) {
            if(brickMsg.attackableCnt > 0 && brickMsg.attackableRate > 0) {
                const rate = UTILS.getRandomInt(1,100);
                if(rate <= brickMsg.attackableRate) {
                    const cnt = brickMsg.attackableCnt > 2 ? 2 : brickMsg.attackableCnt;
                    for(let i=0; i<cnt; i++) {
                        const pos: Vec3 = new Vec3(this.node.position.x+brickMsg.position.x, this.node.position.y+brickMsg.position.y,0);
                        tween(this.node).delay(0.1).call( () => {
                            GAMECTRL.ballMgr.createBall(this.node.parent, true, pos, null);
                        }).start();
                    }
                }
            }
        }
    }

    private procBombBricks(bombLineIdx: number, pos: Vec3) {
        if(bombLineIdx >= 0) {
            const bombBricks = this.bombLineBricks.get(bombLineIdx);

            const rayCastNode = instantiate(this.rayCast);
            this.node.addChild(rayCastNode);
            rayCastNode.setPosition(pos.x, pos.y, 0);
            rayCastNode.scale = new Vec3(0.1,0.1,0);
            tween(rayCastNode).to(0.2, {scale: new Vec3(2,2,0)}).call( ()=> {
                bombBricks.forEach( (brick, index) => {
                    if(brick !== null && brick.node !== null) {
                        if(brick.node.isValid) {
                            const brickMsg = brick.damage();
                            if(brickMsg !== undefined) {
                                if(brickMsg.msg === "Destroy") {
                                    this.procBrickDestroy(brickMsg);
                                    if(brickMsg.type === BrickType.BOMB) {
                                        this.procBombBricks(brickMsg.bombLineIdx, brickMsg.position);
                                    }
                                } else if(brickMsg.msg === "Damage") {
                                    this.procBrickDamage(brick.node, brickMsg);
                                }
                            }
                        }
                    }
                
                    rayCastNode.removeFromParent();
                })
            }).start();
        }
    }

    public resetBricks() {
        this.node.removeAllChildren();
        this.node.setPosition(0, this.node.position.y);
        this.brickEnemyCnt = 0;
        this.bombLineIdx = 0;
        this.bombLineBricks.clear();
        this.infiniteStage = 0;
        this.infiniteDiff = 0;
        this.bricksNodeIdx = 0;
        this.moveBricksSpeed = 0;
        this.bricksGroupIdx = 0;
        this.bricksRemoveIdx = 0;
        this.analyticsDataMap.clear();
        this.analyticsDataMap.set(0, "");
        this.itemMgr.resetItemMgr();

		this.defenseBrickDelta = 0;
        this.removeDefenseBricks();

        this.createEnemyBricks();
        this.infiniteTimeout = setInterval(() => {
            this.checkNextBricks();
        }, 1000);
        
    }

    public stopBricks() {
        if(this.infiniteTimeout !== null) {
            clearInterval(this.infiniteTimeout);
        }

        Tween.stopAll();

    }

    public getItemMgr(): ItemMgr {
        return this.itemMgr;
    }

    public getParticlePrefab(): Prefab {
        return this.particle;
    }

    public createDefenseBricks() {
        this.removeDefenseBricks();
        const brick_width = 60;
        const layer_width = this.defenseBricksNode.getComponent(UITransform).width;
        const brickCnt = (layer_width / brick_width)-1;
        const type = BrickType.ALLY;
        const hp = 0;
        const gap = 4;
        for(let i=0; i<brickCnt; i++) {
            const brick = instantiate(this.bricks[type]);
            this.defenseBricksNode.addChild(brick);
            let x = -(layer_width/2)+gap+(brick_width/2)+(i*(brick_width+gap));
            brick.getComponent(Brick).setProperty(type, i, 0, x, 0, hp, false, this.particle, -1, -1, 0, 0);
        }
        
        this.defenseBrickDelta = 10;
        tween(this.defenseBricksNode).to(0.2, {position: new Vec3(0,this.defenseBricksOriginPos.y+30)}).start();
    }

    public removeDefenseBricks() {
        this.defenseBricksNode.removeAllChildren();
        this.defenseBricksNode.position = this.defenseBricksOriginPos;
    }

    private async isBreakAllBricks(): Promise<boolean> {
        const childNodes = this.bricksNode[this.bricksNodeIdx].children;
        for(let i=0; i<childNodes.length; i++) {
            if(childNodes[i].name === "Brick") {
                return false;
            }
        }
        return true;
    }
	
	update(dt: number) {
		if(this.defenseBrickDelta > 0) {
			this.defenseBrickDelta -= dt;
			if(this.defenseBrickDelta <= 0) {
				tween(this.defenseBricksNode).to(0.2, {position: new Vec3(0,this.defenseBricksOriginPos.y-30)})
				.call(()=>{
					this.removeDefenseBricks();
				}).start();
			}
		}    
    
    }

}

