import express from 'express'

var gameConfig = require('./gameConfig');
var userInfo = require('./userInfo');
var rankingInfo = require('./rankingInfo');
var gamecurrencyToCoin = require('./gamecurrencyToCoin');
var gamecurrencyToCoinComplete = require('./gamecurrencyToCoinComplete');
var coinToGamecurrency = require('./coinToGamecurrency');
var coinToGamecurrencyComplete = require('./coinToGamecurrencyComplete');
var stationSignInInfo = require('./stationSignInInfo');
var scoreRecord = require('./scoreRecord')

var router = express.Router();

/**
 * @swagger
 * tags:
 *   name: define
 *   description: "\
 *      - Error code sample\n\
 *      0 : Success \n\
 *      other : error"  
 */

/**
 * @swagger
 *  paths:
 *    /game-config:
 *      get:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0 \n\
 *              returnMsg :  \n\
 *              isNft : 0, 1 \n\
 *              nftConfig : only if you use nft \n\
 *              { \n\           
 *              　numberOfMaterials :  \n\
 *              　// base fee  \n\
 *              　c2xMintingFee : ,  \n\
 *              　gameTokenMintingFee : ,  \n\
 *              　// breedCount fee  \n\
 *              　traitTypeAffectingFee : \"breedCount\" or \"\"  \n\
 *              　affectedC2xMintingFees : [fee1, fee2 ...] or []  \n\
 *              　affectedGameTokenMintingFees : [fee1, fee2 ...] or [] \n\
 *              } "
 */
 router.get('/game-config', async function(req, res, next) {

  const result = await gameConfig()
  console.log("result:", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /user-info:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "user info"
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
 *            description: ""
 *             
 */
router.post('/user-info', async function(req, res, next) {
  
  const result = await userInfo(req)
  console.log("result:", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /ranking-info:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "ranking info"
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
 *            description: ""
 *             
 */
 router.post('/ranking-info', async function(req, res, next) {
  
  const result = await rankingInfo(req)
  console.log("result:", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /gamecurrency-to-coin:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "step 1"
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
 *              - playerId
 *              - groupId
 *              - tId
 *              - gameCurrencyAmount
 *              - coinAmount
 *            properties:
 *              playerId:
 *                type: number
 *              groupId:
 *                type: string
 *              tId:
 *                type: string
 *              gamecurrencyAmount:
 *                type: number
 *              coinAmount:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0=success, other=errorCode \n\
 *              returnMsg : message"
 */
router.post('/gamecurrency-to-coin', async function(req, res, next) {

  const result = await gamecurrencyToCoin(req)
  console.log("result:", result)

  res.send(result);  
  
});


/**
 * @swagger
 *  paths:
 *    /gamecurrency-to-coin-completed:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "step 2"
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
 *              - playerId
 *              - groupId
 *              - tId
 *              - success
 *            properties:
 *              playerId:
 *                type: number
 *              groupId:
 *                type: string
 *              tId:
 *                type: string
 *              success:
 *                type: boolean
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0=success, other=ErrorCode \n\
 *              returnMsg : message \n\
 *              gamecurrencyAmount : Have Amount"
 */
router.post('/gamecurrency-to-coin-completed', async function(req, res, next) {
  
  const result = await gamecurrencyToCoinComplete(req)
  console.log("result:", result)

  res.send(result);  
  
});


/**
 * @swagger
 *  paths:
 *    /coin-to-gamecurrency:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "step 1"
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
 *              - playerId
 *              - groupId
 *              - tId
 *              - gamecurrencyAmount
 *              - coinAmount
 *            properties:
 *              playerId:
 *                type: number
 *              groupId:
 *                type: string
 *              tId:
 *                type: string
 *              gamecurrencyAmount:
 *                type: number
 *              coinAmount:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0=success, other=ErrorCode \n\
 *              returnMsg : message"
 */
router.post('/coin-to-gamecurrency', async function(req, res, next) {

  const result = await coinToGamecurrency(req)
  console.log("result:", result)

  res.send(result);  

});



/**
 * @swagger
 *  paths:
 *    /coin-to-gamecurrency-completed:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "step 2"
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
 *              - playerId
 *              - groupId
 *              - tId
 *              - success
 *            properties:
 *              playerId:
 *                type: number
 *              groupId:
 *                type: string
 *              tId:
 *                type: string
 *              success:
 *                type: boolean
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0=success, other=errorCode \n\
 *              returnMsg : message \n\
 *              gamecurrencyAmount : Have Amount"
 */
router.post('/coin-to-gamecurrency-completed', async function(req, res, next) {

  const result = await coinToGamecurrencyComplete(req)
  console.log("result:", result)

  res.send(result); 
  
});


/**
 * @swagger
 *  paths:
 *    /station-sign-in-info:
 *      post:
 *        tags:
 *        - "MiddleServer_API"
 *        summary: "[option] "
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "\
 *            accAddress : walletAddress {varchar(100)}\n\
 *            playerId : PlayerId {bigint}"
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - accAddress
 *              - playerId
 *            properties:
 *              accAddress:
 *                type: string
 *              playerId:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0=success, other=Error Code \n\
 *              returnMsg : message"
 */
router.post('/station-sign-in-info', async function(req, res, next) {

  const result = await stationSignInInfo(req)
  console.log("result:", result)

  res.send(result); 
  
});


/**
 * @swagger
 *  paths:
 *    /score-record:
 *      post:
 *        tags:
 *        - "MiddleServer NFT API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "\
 *            wallet : wallet " 
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
 *              returnMsg : message"
 */
 router.post('/score-record', async function(req, res, next) {

  const result = await scoreRecord()
  console.log("result:", result)

  res.send(result);    
});

export default router

