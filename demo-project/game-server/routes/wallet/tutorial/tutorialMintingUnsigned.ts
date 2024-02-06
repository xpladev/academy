import { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee, SimplePublicKey } from "@xpla/xpla.js"
import { walletMysql, Mysql, walletPool } from "../../../system/mysql";
import { URL, chainID, cw20MnemonicKey, cw20_contract, cw721MnemonicKey, cw721_contract,
  tokenDecimal, seqMsg, publisherNftInit, walletLog, 
  ipfsCnf, ipfsPortCnf, ipfsClusterCnf, ipfsClusterPortCnf, ipfsGetUrlCnf } from '../serverInfo'

import ipfsAPI from 'ipfs-api'
import ipfsCluster from 'ipfs-cluster-api'

const fs = require("fs")
const lcd = new LCDClient({	chainID,	URL });

let ipfs
let cluster

module.exports =  async function(req) { 

  walletLog("info", "tutorial-minting-unsigned req", req.body)

  let {wallet, payAmount, userPubKey, userSeq} = req.body 

  const shopNo = 14
  
  const result: { [key: string]: any } = {};
  let tid = 0

  try {

    const playerId = 0

    let [shopRow, ] = await walletMysql.connect((con) => con.query(
      `SELECT * FROM nft_shop where idx = ?`, [shopNo]))()
    if(shopRow.length <= 0) {          
      result.returnCode = '401'
      result.returnMsg = "Failed to Get User Information"
  
      return result 
    }
    
    const payAmount = shopRow[0].price
    const width = shopRow[0].width
    const count = shopRow[0].count
    const start_has_ball = shopRow[0].ball
    const image = shopRow[0].imageUrl

    const amount = payAmount
    
    const groupId = "0"  
    const gamecurrencyAmount = amount
    const coinAmount = amount

    const [selectdb, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where wallet = ? and status = 0', [wallet]))()
    if(selectdb.length > 0) {          
      result.returnCode = '498'
      result.returnMsg = "Transaction in Progress"

      return result 
    }   

    const mk = new MnemonicKey({ mnemonic: cw20MnemonicKey })
    const serverWallet = lcd.wallet(mk);
    const minterMk = new MnemonicKey({ mnemonic: cw721MnemonicKey })
    const minterWallet = lcd.wallet(minterMk);

    const sender = wallet    
    const recipient = serverWallet.key.accAddress

    const [db, ] = await walletMysql.connect((con) => con.query(
      'insert into txhash values (null, ?, ?, ?, 3, ?, ?, ?, 1, ?, now())',
      [wallet, playerId, groupId, gamecurrencyAmount, coinAmount, '', 0]))()
    if(db.length <= 0) {          
      result.returnCode = '499'
      result.returnMsg = "Wallet Server Error"

      return result 
    }     
    tid = db.insertId
    console.log("tid:", tid)
    
    const transferMsg = new MsgExecuteContract(
      sender,
      cw20_contract,
      {
          transfer: {
              recipient,
              amount: String(amount)
          }
      }
    );

    const thumbnailImage = shopRow[0].thumbnailUrl

    const tokenId = String(tid)
    const owner = String(wallet)
    const meta = {      
      "newItem" : {
        "extension" : {
          name: shopRow[0].name,
          image: image,
          description: 'academy mint!!!',
          attributes: [                         
            {
              "trait_type": "thumbnail_url",
              "value": thumbnailImage
            },      
            {
              "trait_type": "category",
              "value": 'Game'
            },
            {
              "trait_type": "collection",
              "value": 'academy'
            },
            {
              "trait_type": "creator",
              "value": 'BC Developer'
            },
            {
              "trait_type": "provider",
              "value": "BC Development Team."
            },
            {
              "trait_type": "dbid",
              "value": String(tid)
            },
            {
              "trait_type": "shop_no",
              "value": String(shopNo)
            },
            {
              "trait_type": "paddle_width",
              "value": String(width)
            },
            {
              "trait_type": "paddle_count",
              "value": String(count)
            },
            {
              "trait_type": "ball_count",
              "value": String(start_has_ball)
            }
          ]
        }
      }
    }

    let extension = meta.newItem.extension        
    const tokenUri = await UploadIPFS(meta, ipfsCnf, ipfsPortCnf, ipfsClusterCnf, ipfsClusterPortCnf, ipfsGetUrlCnf)

    const executeMsg = {
      mint: {
          token_id: tokenId,
          owner: owner,
          token_uri: tokenUri,
          extension: extension
      }
    }     

    const mintingExe = new MsgExecuteContract(
      minterWallet.key.accAddress,
      cw721_contract,
      {...executeMsg}
    );
    
    let conn = await walletPool.getConnection()
    await conn.beginTransaction()
    let simul_fee
    let unsignedTx

    try{
      const [data, ] = await conn.query('SELECT sequence FROM publisher_sequence WHERE accAddress = ? FOR UPDATE', [minterWallet.key.accAddress])
      const minterSeq = data[0].sequence
      const minterPubKey = minterMk.publicKey    

      const tx_api = new TxAPI(lcd)
      simul_fee = await tx_api.estimateFee(
        [
          {sequenceNumber: userSeq, publicKey: new SimplePublicKey(userPubKey)},
          {sequenceNumber: minterSeq, publicKey: minterPubKey},
        ],
        {
          msgs: [transferMsg, mintingExe],
          gasAdjustment: 1.25,			
        }
      )
      const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());

      const tx = await lcd.tx.create([], {msgs: [transferMsg, mintingExe], fee } )
      unsignedTx = Buffer.from(tx.toBytes()).toString('base64')
      await conn.commit(); 
      conn.release();

    } catch(err) {

      await conn.rollback()
      conn.release()

      throw err
    }

    setTimeout( waitResult, 120000, tid);

    result.returnCode = '0'
    result.returnMsg = "success"
    result.payAmount = payAmount
    result.fee = simul_fee.amount.toString()
    result.tid = tid
    result.unsignedTx = unsignedTx
    return result

  } catch(err) {
    console.log("error:", err)

    try {
      const status = 2
      await walletMysql.connect((con) => con.query(
        'update txhash set status = ? where tid = ?', [status, tid]))()

      if(err.response?.data?.message?.indexOf(seqMsg) >= 0){
        publisherNftInit()
      }   
    } catch(err) {
      console.log("CS error:", err)
    }

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  

  
async function waitResult(tid) {

  let status = 2
  try {
    const [selectdb, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where tid = ? and status = 0', [tid]))()
    if(selectdb.length > 0) {          
      if( selectdb[0].status === 0 ) {
        console.log("Close txhash:", tid)
        await walletMysql.connect((con) => con.query(
          'update txhash set status = ? where tid = ? and status = 0', [status, tid]))()
      }
    }
  }catch(err) {    
    console.log("CS error:", err)
  }
}


async function UploadIPFSFile(meta: any, ipfsDB, ipfsPortDB, ipfsClusterDB, ipfsClusterPortDB) : Promise<string> {

  let retValue = ''
  
  try{
      if( ipfs === undefined ){
          ipfs = await ipfsAPI(ipfsDB ,ipfsPortDB, {protocol: 'http'})
          cluster = await ipfsCluster({ host: `${ipfsClusterDB}`, port: `${ipfsClusterPortDB}`, protocol: 'http' });
      }

      await ipfs.files.add(meta)
      .then(result=>{
          retValue = result[0].hash
      })

      await cluster.pin.add(retValue, (err) => {
          if( err === true ){
              throw err
          }
      });
  }
  catch(err){
      throw err
  }

  return retValue    
};

async function UploadIPFS(meta: any, ipfsDB, ipfsPortDB, ipfsClusterDB, ipfsClusterPortDB, ipfsGetUrlDB) : Promise<string> {
 
  
  try{
      const newItem = meta.newItem

      // json upload
      const jsonHash = await UploadIPFSFile(Buffer.from(JSON.stringify(newItem.extension)), ipfsDB, ipfsPortDB, ipfsClusterDB, ipfsClusterPortDB)
      if(jsonHash === ""){
          throw 'UploadIPFSFile jsonHash error'
      }
      const jsonUrl = `${ipfsGetUrlDB}/ipfs/${jsonHash}`

      delete newItem.token_uri
      
      return jsonUrl
  }
  catch(err){
      console.log(err)        
      throw err
  }
}
