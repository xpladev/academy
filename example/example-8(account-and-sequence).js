const { LCDClient, MnemonicKey, MsgSend } = require("@xpla/xpla.js");

const lcd = new LCDClient({
    chainID: 'cube_47-5',
    URL: 'https://cube-lcd.xpla.dev'
});

const main = async () => {
    const mk = new MnemonicKey({
        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle'
    });

    const distributor = lcd.wallet(mk);

    const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);
    const accountNumber = distributorInfo.account_number;
    const sequence = distributorInfo.sequence;

    const receivers = [
        "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",
        "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",
        "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",
        "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",
        "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",
    ]

    for (let i = 0; i < receivers.length; i++) {
        try {
            const send = new MsgSend(
                distributor.key.accAddress,
                receivers[i],
                { axpla: 1 }
            );
        
            const signedTx = await lcd.wallet(mk).createAndSignTx({ // 트랜잭션 생성 및 사이닝, 트랜잭션 fee 설정
                msgs: [send],
                memo: 'Air Drop Test',
                accountNumber,
                sequence
                // sequence : sequence + i
            });
        
            const result = await lcd.tx.broadcastSync(signedTx);
            console.log(result);

        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}

main();