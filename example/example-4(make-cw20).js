const { LCDClient, MnemonicKey, MsgInstantiateContract, Fee, SignMode } = require("@xpla/xpla.js");

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
        name: "My CW20 Token", // My Cw20 Token
        symbol: "MCT", // My Cw20 Token
        decimals: 6,
        initial_balances: [{ address: myWalletAddress, amount: "2000000000000000" }], // List the addresses that will initially hold the supply as an array.
        mint: { // You can also optionally specify a minter in case additional minting is needed.
            minter: myWalletAddress
        }
    };

    const instantiate = new MsgInstantiateContract(
        myWalletAddress, // sender
        myWalletAddress, // admin
        1, // MAINNET, TESTNET CW20 code id
        init_msg,
        {}, // XPLA token amount to send to the contract (leave empty for now, not needed at the moment).
        'My CW20 Token', // Enter the label you want to write.
    );

    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction
        msgs: [instantiate]
    });

    // You can replace the createAndSignTx function with the code below
    // const accInfo = await lcd.auth.accountInfo(myWalletAddress) // Getting wallet information
    // const acc = accInfo;
    
    // const userSignOption = { // Signing details 
    //  chainID: 'cube_47-5',
    //  accountNumber: acc.account_number,
    //  sequence: acc.sequence,
    //  signMode: SignMode.SIGN_MODE_DIRECT
    // }
    
    // const fee = new Fee(3000000, "2550000000000000000axpla") // Setting the fee amount
    
    // const tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // Creating the transaction
    
    // const signedTx = await wallet.key.signTx(tx, userSignOption) // Signing

    const txResult = await lcd.tx.broadcastSync(signedTx);
    console.log(txResult.txhash);
}
main()