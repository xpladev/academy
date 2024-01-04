import * as xpla from "@xpla/xpla.js/dist/bundle.js"

export enum ContractMsgType {
    CW20_TOKEN = 0,
    CW721_NFT,
    DATA_SAVE,
}

export interface ExecContractResponse {
    result: string,
    txHash: string,
}

export interface AccountInfo {
    pubKey: string,
    seqNum: number,
}

export class XplaJs {

    private static instance: XplaJs = null;
    private static lcd: xpla.default.LCDClient = null;


    public static getInstance(): XplaJs {
        if(XplaJs.instance === null) {
            XplaJs.instance = new XplaJs;
        }

        return XplaJs.instance
    }

    public static getLcdClient(): xpla.default.LCDClient {
        if(XplaJs.lcd === null) {
            XplaJs.lcd = new xpla.default.LCDClient({
                URL: 'https://cube-lcd.xpla.dev',
                chainID: 'cube_47-5'
            })
        }

        return XplaJs.lcd
    }

    public getLcdChainID(): string {
        return XplaJs.getLcdClient().config.chainID
    }

    public getWalletAddress(mnemonic: string): string {
        const key = new xpla.default.MnemonicKey({
            mnemonic,
        });

        return key.accAddress;
    }

    public async getAccountInfo(mnemonic: string): Promise<AccountInfo> {

        const key = new xpla.default.MnemonicKey({mnemonic: mnemonic});
        const wallet = XplaJs.getLcdClient().wallet(key);
        const pubKeyJson = JSON.parse(String(key.publicKey?.toJSON()));

        const userSeq = await wallet.sequence();

        return {
            pubKey: pubKeyJson.key,
            seqNum: userSeq,
        }
    }

    public async getSignTx(mnemonic: string, unsignTx: string): Promise<string> {

        const key = new xpla.default.MnemonicKey({mnemonic: mnemonic});
        const wallet = XplaJs.getLcdClient().wallet(key);
        const tx = XplaJs.getLcdClient().tx.decode(unsignTx);

        const accountNumber = await wallet.accountNumber();
        const sequenceNumber = await wallet.sequence();

        const signOption = {
            chainID: XPLAJS.getLcdChainID(),
            accountNumber: accountNumber,
            sequence: sequenceNumber,
            signMode: xpla.default.SignatureV2.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
        };
        
        const signedTx = await key.signTx(tx, signOption);
        return XplaJs.getLcdClient().tx.encode(signedTx);
    }

    public createWallet(): string {

        const key = new xpla.default.MnemonicKey();
        return key.mnemonic;
    }


    async getXplaBalance(address: string): Promise<string> {

        try{
            const balance = await XplaJs.getLcdClient().bank.balance(address);
            if(balance[0].get("axpla") === undefined)
                return "0";

            return balance[0].get("axpla").amount.toString();
        }catch(error) {
            console.log("getXplaBalance error : ", error);
        }

    }

    async getTokenBalance(address: string): Promise<string> {

        try{
            const query = await XplaJs.getLcdClient().wasm.contractQuery<any>(
                this.getExecuteAddress(ContractMsgType.CW20_TOKEN),
                {
                    balance: {
                        address: address
                    }
                }
            )

            return query.balance.toString();
        }catch(error) {
            console.log("getTokenBalance error : ", error);
        }
    }

    async queryContract(type: ContractMsgType, msg: any): Promise<any> {
        try{
            const query = await XplaJs.getLcdClient().wasm.contractQuery<any>(
                this.getExecuteAddress(type),
                msg
            )
            return query
            
        }catch(error) {
            console.log("queryContract error : ", error, ", type : ", type, ", msg : ", msg);
        }
    }

    private getExecuteAddress(type: ContractMsgType): string {
        switch(type) {
            case ContractMsgType.CW20_TOKEN: return "xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3";
            case ContractMsgType.CW721_NFT: return "xpla1c94ss2232fm5v7cs36g5n56fd9vldflmg2l4g77qj3r86fdmqststr5eya";
            case ContractMsgType.DATA_SAVE: return "xpla19pkt7pjr4xh2lmhw522sxcnuw0wjnzwg9dyl6ju23hnyaqaj77qqpez40k";
        }
    }


}

export const XPLAJS = XplaJs.getInstance();
