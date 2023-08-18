const { LCDClient, MnemonicKey, MsgInstantiateContract } = require("@xpla/xpla.js");

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

    const init_msg = {
        "name": "YourNFTName",
        "symbol": "YNN",
        "minter": myWalletAddress
    }

    const instantiate = new MsgInstantiateContract(
        myWalletAddress, // sender
        myWalletAddress, // admin
        3, // MAINNET, TESTNET CW721 code id
        init_msg,
        {}, // XPLA token amount to send to the contract (leave empty for now, not needed at the moment).
        'Input your label', // Enter the label you want to write.
    );

    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction
        msgs: [instantiate]
    });

    const txResult = await lcd.tx.broadcastSync(signedTx);
    console.log(txResult.txhash);
}
main()