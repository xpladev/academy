import { _decorator, BlockInputEvents, instantiate, Label, Node, 
    Prefab, resources, tween } from 'cc';


export class NetworkMgr {    
    private static instance: NetworkMgr = null;

    private serverUrl: string = "your server ip";	//"http://127.0.0.1:40202/";
    private connectNode: Node = null;
    private callBack: (response?: any) => void;

    public static getInstance(): NetworkMgr {
        if(NetworkMgr.instance === null) {
            NetworkMgr.instance = new NetworkMgr();
        }

        return NetworkMgr.instance
    }

    public reqRegister(id: string, pw: string, callback: (response?: any) => void) {
        const path = "client/user-register";
        this.callBack = callback;
        const data = {
            id: id,
            password: pw,
            name: "",
        };

        this.sendData(path, data, false);
    }

    public reqLogin(id: string, pw: string, callback: (response?: any) => void) {
        const path = "client/user-login";
        this.callBack = callback;
        const data = {
            id: id,
            password: pw
        }

        this.sendData(path, data, false);
    }

    public reqWalletConnect(address: string, id: string, pw: string, callback: (response?: any) => void) {
        const path = "wallet/wallet-connect";
        this.callBack = callback;
        const data = {
            wallet: address,
            id: id,
            password: pw
        }

        this.sendData(path, data, false);
    }

    public reqUserInfo(pid: number, callback: (response?: any) => void) {
        const path = "client/user-info";
        this.callBack = callback;
        const data = {
            pid,
        }

        this.sendData(path, data, false);
    }

    public reqTokenReward(address: string, amount: number, xplaAmount: number, parent: Node, callback: (response?: any) => void) {
        const path = "wallet/tutorial-token-reward";
        this.callBack = callback;
        const data = {
            wallet: address,
            amount,
            xplaAmount,
        }

        this.sendUI(path, data, parent, "Requesting a token", true);
    }

    public reqPaddleNftMintUnsigned(address: string, payAmount: number, paddle_width: number, paddle_count: number, ball_count: number, userPubKey: string, userSeq: number, parent: Node, callback: (response?: any) => void) {
        const path = "wallet/tutorial-minting-unsigned";
        this.callBack = callback;
        const data = {
            wallet: address,
            payAmount,
            width: paddle_width, 
            count: paddle_count,
            start_has_ball: ball_count,
            userPubKey,
            userSeq
        };

        this.sendUI(path, data, parent, "Requesting", false);
    }

    public reqPaddleNftMint(address: string, tid: number, userTx: string, parent: Node, callback: (response?: any) => void) {
        const path = "wallet/tutorial-minting";
        this.callBack = callback;
        const data = {
            wallet: address,
            tid,
            userTx,
        };

        this.sendUI(path, data, parent, "Minting", true);
    }

    public reqNftList(address: string, callback: (response?: any) => void) {
        const path = "wallet/wallet-nft-list";
        this.callBack = callback;
        const data = {
            wallet: address,
        };

        this.sendData(path, data, false);
    }

    public reqNftInfo(address: string, tokenId: string, callback: (response?: any) => void) {
        const path = "wallet/wallet-nft-info";
        this.callBack = callback;
        const data = {
            wallet: address,
            tokenId
        };

        this.sendData(path, data, false);
    }

    public reqSaveData(pid: number, diamond: number, score: number, stage: number, callback: (response?: any) => void) {
        const path = "client/stage-clear";
        this.callBack = callback;
        const data = {
            pid,
            diamond,
            score,
            stage,
        };

        this.sendData(path, data, false);
    }



    private sendUI(path: string, data: any, parent: Node, msg: string, isChkHash?: boolean) {
        if(parent === null) {
            this.sendData(path, data, isChkHash);
        } else {
            resources.load("prefabs/popup_alert", Prefab, (error, prefab) => {
                this.connectNode = instantiate(prefab);
                this.connectNode.getComponentInChildren(Label).string = msg??"";
                this.connectNode.addComponent(BlockInputEvents);
                parent.addChild(this.connectNode);
                const connectLabel = this.connectNode.getComponentInChildren(Label);
                const t0 = tween(this.connectNode).delay(0.3).call( ()=> {connectLabel.string = msg+""});
                const t1 = tween(this.connectNode).delay(0.3).call( ()=> {connectLabel.string = msg+"."});
                const t2 = tween(this.connectNode).delay(0.3).call( ()=> {connectLabel.string = msg+".."});
                const t3 = tween(this.connectNode).delay(0.3).call( ()=> {connectLabel.string = msg+"..."});
                tween(this.connectNode).sequence(t0,t1,t2,t3).repeatForever().start();

                this.sendData(path, data, isChkHash);
            });
        }
    }

    private sendData(path: string, data: any, isChkHash?: boolean) {
        const url = this.serverUrl + path;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/x-www-form-urlencoded');
        
        fetch(url, {
            method: 'POST',
            credentials: 'omit',
            headers: headers,
            body: JSON.stringify(data)
        }).then(response => {
            
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Network Error : ' + response.status);
            }
        }).then(data => {
            console.log(">> response data : %o", data);
            if(data.returnCode === "0") {                
                if(isChkHash === undefined || isChkHash === false) {
                    this.removeNetUI();
                    this.callBack(data);
                } else {
                    this.checkTxHash(data);             
                }
            } else {
                this.removeNetUI();
                this.callBack(data);
            }
        }).catch(error => {
            console.log("error: ", error.message);
            this.removeNetUI();
            this.callBack({returnCode: "-1", returnMsg: String(error.message)});
        })
    }

    private async sendData2(path: string, data: any): Promise<Response> {
        const url = this.serverUrl + path;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/x-www-form-urlencoded');
        
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'omit',
            headers: headers,
            body: JSON.stringify(data)
        });

        return response;
    } 

    private checkTxHash(result: any) {
        const url = this.serverUrl + "wallet/txInfo?txhash="+result.txhash;

        fetch(url).then( response => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then( data => {
            if(data.returnCode === "0") {
                this.removeNetUI();
                this.callBack(result);
            } else if(data.returnCode === "500") {
                setTimeout(() => {
                    this.checkTxHash(result);
                }, 1000);
            } else {
                this.removeNetUI();
                this.callBack(data);
            }
        }).catch( error => {
            console.log("error: ", error.message);
            this.removeNetUI();
            this.callBack({returnCode: "-1", returnMsg: String(error.message)});
        })
    }

    private removeNetUI() {
        if(this.connectNode !== null) {
            this.connectNode.removeFromParent();
            this.connectNode = null;
        }
    }
}


export const NETWORKMGR = NetworkMgr.getInstance();

