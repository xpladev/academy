const { MnemonicKey, LCDClient } = require("@xpla/xpla.js");

const newKey = new MnemonicKey();
console.log("mnemonic: " + newKey.mnemonic);

const lcd = new LCDClient({
  chainID : 'cube_47-5', // The name of xpla testnet network
  URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL
});
console.log("accAddress: " + lcd.wallet(newKey).key.accAddress);