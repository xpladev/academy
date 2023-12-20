const { LCDClient, MnemonicKey, MsgExecuteContract } = require("@xpla/xpla.js");

const lcd = new LCDClient({
    chainID: 'cube_47-5',
    URL: 'https://cube-lcd.xpla.dev'
});

const main = async () => {
    const mk = new MnemonicKey({
        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // Replace with your mnemonic words
    })

    const wallet = lcd.wallet(mk);
    const myWalletAddress = wallet.key.accAddress;
    const myContractAddress = "xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0"; // Input your Contract Address
    const myTokenId = 'token_id_1703034376454'; // Input your token_id

    const transferMsg = new MsgExecuteContract(
        myWalletAddress,
        myContractAddress,
        {
            transfer_nft: {
                token_id: myTokenId,
                recipient: 'xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk'
            }
        }
    );

    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction
        msgs: [transferMsg]
    });

    const txResult = await lcd.tx.broadcastSync(signedTx);
    console.log(txResult.txhash);
}
main()