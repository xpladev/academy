import express from 'express'

var walletConnect = require('./walletConnect');
var txInfo = require('./txInfo');

var tutorialTokenReward = require('./tutorial/tutorialTokenReward');

var tutorialMintingUnsigned = require('./tutorial/tutorialMintingUnsigned');
var tutorialMinting = require('./tutorial/tutorialMinting');

var walletGamecurrencyToCoinUnsigned = require('./walletGamecurrencyToCoinUnsigned');
var walletGamecurrencyToCoin = require('./walletGamecurrencyToCoin');

var walletCoinToGamecurrencyUnsigned = require('./walletCoinToGamecurrencyUnsigned');
var walletCoinToGamecurrency = require('./walletCoinToGamecurrency');

var walletMintingUnsigned = require('./walletMintingUnsigned');
var walletMinting = require('./walletMinting');

var walletNftList = require('./walletNftList');
var walletNftInfo = require('./walletNftInfo');
var walletTokenInfo = require('./walletTokenInfo');

var walletUserInfo =  require('./walletUserInfo');
var walletNftShopList =  require('./walletNftShopList');
var walletRankingInfo =  require('./walletRankingInfo');

var walletScoreRecordUnsigned =  require('./walletScoreRecordUnsigned');
var walletScoreRecord =  require('./walletScoreRecord');

var { systemInit, walletLog } = require('./serverInfo');

var router = express.Router();


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-connect:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - id
 *              - password
 *            properties:
 *              wallet:
 *                type: string
 *              id:
 *                type: string
 *              password:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message" 
 */
router.post('/wallet-connect', async function(req, res, next) {

  const result = await walletConnect(req)
  walletLog("info", "wallet-connect result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/txinfo:
 *      get:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "query"
 *          name: "txhash"
 *          schema:
 *            type: string
 *          required: true
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) errorCode 500 : Blockchain processing, retry after any second \n\
 *              returnMsg : error message" 
 */
router.get('/txinfo', async function(req, res, next) {

  const result = await txInfo(req)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/tutorial-token-reward:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - amount
 *              - xplaAmount
 *            properties:
 *              wallet:
 *                type: string
 *              amount:
 *                type: number
 *              xplaAmount:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              txhash : txhash"
 */
router.post('/tutorial-token-reward', async function(req, res, next) {

  const result = await tutorialTokenReward(req)
  walletLog("info", "tutorial-token-reward result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/tutorial-minting-unsigned:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet 
 *              - payAmount 
 *              - width 
 *              - count
 *              - start_has_ball
 *              - userPubKey
 *              - userSeq
 *            properties:
 *              wallet:
 *                type: string
 *              payAmount:
 *                type: number
 *              width:
 *                type: number
 *              count:
 *                type: number
 *              start_has_ball:
 *                type: number
 *              userPubKey:
 *                type: string
 *              userSeq:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              payAmount : txhash \n\
 *              fee : fee \n\
 *              tid : trasaction id \n\
 *              unsignedTx : After signing unsignedTx, request tutorial-minting"
 */
router.post('/tutorial-minting-unsigned', async function(req, res, next) {

  const result = await tutorialMintingUnsigned(req)
  walletLog("info", "tutorial-minting-unsigned result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/tutorial-minting:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: "userTx : Signing data of unsignedTx received from tutorial-minting-unsigned"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - tid
 *              - userTx
 *            properties:
 *              wallet:
 *                type: string
 *              tid:
 *                type: number
 *              userTx:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              txhash : txhash"
 */
router.post('/tutorial-minting', async function(req, res, next) {

  const result = await tutorialMinting(req)
  walletLog("info", "tutorial-minting result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-gamecurrency-to-coin-unsigned:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - amount
 *              - userPubKey
 *              - userSeq
 *            properties:
 *              wallet:
 *                type: string
 *              amount:
 *                type: number
 *              userPubKey:
 *                type: string
 *              userSeq:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              tid : trasaction id \n\
 *              unsignedTx : After signing unsignedTx, request wallet-gamecurrency-to-coin"
 */
router.post('/wallet-gamecurrency-to-coin-unsigned', async function(req, res, next) {

  const result = await walletGamecurrencyToCoinUnsigned(req)
  walletLog("info", "wallet-gamecurrency-to-coin-unsigned result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-gamecurrency-to-coin:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: "userTx : Signing data of unsignedTx received from wallet-gamecurrency-to-coin-unsigned"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - tid
 *              - userTx
 *            properties:
 *              wallet:
 *                type: string
 *              tid:
 *                type: number
 *              userTx:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              txhash : txhash"
 */
router.post('/wallet-gamecurrency-to-coin', async function(req, res, next) {

  const result = await walletGamecurrencyToCoin(req)
  walletLog("info", "wallet-gamecurrency-to-coin result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-coin-to-gamecurrency-unsigned:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - amount
 *              - userPubKey
 *              - userSeq
 *            properties:
 *              wallet:
 *                type: string
 *              amount:
 *                type: number
 *              userPubKey:
 *                type: string
 *              userSeq:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              tid : trasaction id \n\
 *              unsignedTx : After signing unsignedTx, request wallet-coin-to-gamecurrency"
 */
router.post('/wallet-coin-to-gamecurrency-unsigned', async function(req, res, next) {

  const result = await walletCoinToGamecurrencyUnsigned(req)
  walletLog("info", "wallet-coin-to-gamecurrency-unsigned result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-coin-to-gamecurrency:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: "userTx : Signing data of unsignedTx received from wallet-coin-to-gamecurrency-unsigned"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - tid
 *              - userTx
 *            properties:
 *              wallet:
 *                type: string
 *              tid:
 *                type: number
 *              userTx:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              txhash : txhash"
 */
router.post('/wallet-coin-to-gamecurrency', async function(req, res, next) {

  const result = await walletCoinToGamecurrency(req)
  walletLog("info", "wallet-coin-to-gamecurrency result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-minting-unsigned:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet 
 *              - shopNo 
 *              - userPubKey
 *              - userSeq
 *            properties:
 *              wallet:
 *                type: string
 *              shopNo:
 *                type: number
 *              userPubKey:
 *                type: string
 *              userSeq:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              payAmount : txhash \n\
 *              fee : fee \n\
 *              tid : trasaction id \n\
 *              unsignedTx : After signing unsignedTx, request wallet-minting"
 */
router.post('/wallet-minting-unsigned', async function(req, res, next) {

  const result = await walletMintingUnsigned(req)
  walletLog("info", "wallet-minting-unsigned result", result)

  res.send(result);  
});

/**
 * @swagger
 *  paths:
 *    /wallet/wallet-minting:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: "userTx : Signing data of unsignedTx received from wallet-minting-unsigned"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - tid
 *              - userTx
 *            properties:
 *              wallet:
 *                type: string
 *              tid:
 *                type: number
 *              userTx:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              txhash : txhash"
 */
router.post('/wallet-minting', async function(req, res, next) {

  const result = await walletMinting(req)
  walletLog("info", "wallet-minting result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-nft-list:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - startTokenId
 *            properties:
 *              wallet:
 *                type: string
 *              startTokenId:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              tokenList : []"
 */
router.post('/wallet-nft-list', async function(req, res, next) {

  const result = await walletNftList(req)
  walletLog("info", "wallet-nft-list result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-nft-info:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - tokenId
 *            properties:
 *              wallet:
 *                type: string
 *              tokenId:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              extension : extension info"
 */
router.post('/wallet-nft-info', async function(req, res, next) {

  const result = await walletNftInfo(req)
  walletLog("info", "wallet-nft-info result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-token-info:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *            properties:
 *              wallet:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              tokenInfo : token info"
 */
router.post('/wallet-token-info', async function(req, res, next) {

  const result = await walletTokenInfo(req)
  walletLog("info", "wallet-token-info result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-user-info:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *            properties:
 *              wallet:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              diamond : diamond \n\
 *              id : user id \n\
 *              xpla : have xpla \n\
 *              token : have token"
 */
router.post('/wallet-user-info', async function(req, res, next) {

  const result = await walletUserInfo(req)
  walletLog("info", "wallet-user-info result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-nft-shop-list:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *            properties:
 *              wallet:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              shopList : shop list"
 */
router.post('/wallet-nft-shop-list', async function(req, res, next) {

  const result = await walletNftShopList(req)
  walletLog("info", "wallet-nft-shop-list result", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /wallet/wallet-ranking-info:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *            properties:
 *              wallet:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message"
 */
router.post('/wallet-ranking-info', async function(req, res, next) {

  const result = await walletRankingInfo(req)
  walletLog("info", "wallet-ranking-info result", result)

  res.send(result);  
});






/**
 * @swagger
 *  paths:
 *    /wallet/wallet-score-record-unsigned:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet 
 *              - userPubKey
 *              - userSeq
 *            properties:
 *              wallet:
 *                type: string
 *              userPubKey:
 *                type: string
 *              userSeq:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              payAmount : txhash \n\
 *              fee : fee \n\
 *              tid : trasaction id \n\
 *              unsignedTx : After signing unsignedTx, request wallet-minting"
 */
router.post('/wallet-score-record-unsigned', async function(req, res, next) {

  const result = await walletScoreRecordUnsigned(req)
  walletLog("info", "wallet-score-record-unsigned result", result)

  res.send(result);  
});

/**
 * @swagger
 *  paths:
 *    /wallet/wallet-score-record:
 *      post:
 *        tags:
 *        - "WalletServer_API"
 *        summary: ""
 *        description: "userTx : Signing data of unsignedTx received from wallet-minting-unsigned"
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: ""
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - wallet
 *              - tid
 *              - userTx
 *            properties:
 *              wallet:
 *                type: string
 *              tid:
 *                type: number
 *              userTx:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              txhash : txhash"
 */
router.post('/wallet-score-record', async function(req, res, next) {

  const result = await walletScoreRecord(req)
  walletLog("info", "wallet-score-record result", result)

  res.send(result);  
});

systemInit()

export default router

