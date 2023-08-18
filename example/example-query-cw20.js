const { LCDClient } = require("@xpla/xpla.js");

const lcd = new LCDClient({
    chainID: 'cube_47-5',
    URL: 'https://cube-lcd.xpla.dev'
});

async function main() {
    const contractAddress = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc";
    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";
    const msg = {
        balance : {
            address : userAddress
        }
    };

    const balance = await lcd.wasm.contractQuery(contractAddress, msg);
    console.log(balance);
}
main()