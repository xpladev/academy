import { _decorator, Component, director } from 'cc';
import { GameData } from './GameData';
import { SceneMgr } from './SceneMgr';
import { XplaJs } from './XplaJs';
import { NetworkMgr } from './NetworkMgr';
import { Utils } from './Utils';
const { ccclass, property } = _decorator;

@ccclass('Persistant')
export class Persistant extends Component {
    
    onLoad() {

        GameData.getInstance();
        SceneMgr.getInstance();
        XplaJs.getInstance();
        NetworkMgr.getInstance();
        Utils.getInstance();

        director.loadScene("menu");
    }

}


