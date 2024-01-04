import express from 'express'
import { Mysql } from '../../system/mysql'

var router = express.Router();

declare module 'express-session' {
  interface SessionData {
      pid?: number;
      wallet?: string;
  }
}

var userRegister = require('./userRegister');
var userLogin = require('./userLogin');
var stageClear = require('./stageClear');
var userInfo = require('./userInfo');

/**
 * @swagger
 *  paths:
 *    /client/user-register:
 *      post:
 *        tags:
 *        - "GameServer_API"
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
 *              - id
 *              - password
 *              - name
 *            properties:
 *              id:
 *                type: string
 *              password:
 *                type: string
 *              name:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message"
 */
 router.post('/user-register', async function(req, res, next) {

  const result = await userRegister(req)
  console.log("result:", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /client/user-login:
 *      post:
 *        tags:
 *        - "GameServer_API"
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
 *              - id
 *              - password
 *            properties:
 *              id:
 *                type: string
 *              password:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              pid : player id \n\
 *              wallet : wallet address \n\
 *              diamond : have diamond \n\
 *              chainHighScore : chainHighScore \n\
 *              chainHighScoreDate : chainHighScoreDate \n\
 *              chainRanking : chainRanking \n\
 *              highStage : highStage \n\
 *              isCheat : 0=false, 1=true \n\
 *              convertUri : uri \n\
 *              leaderboardUri : uri \n\
 *              mintUri : uri \n\
 *              xpla : have xpla \n\
 *              token : have token"
 */
router.post('/user-login', async function(req, res, next) {

  const result = await userLogin(req)
  //console.log("user-login req:", req)
  console.log("result:", result)
  
  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /client/user-info:
 *      post:
 *        tags:
 *        - "GameServer_API"
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
 *              - pid
 *            properties:
 *              pid:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              pid : player id \n\
 *              wallet : wallet address \n\
 *              diamond : have diamond \n\
 *              chainHighScore : chainHighScore \n\
 *              chainHighScoreDate : chainHighScoreDate \n\
 *              chainRanking : chainRanking \n\
 *              highStage : highStage \n\
 *              xpla : have xpla \n\
 *              token : have token"
 */



router.post('/user-info', async function(req, res, next) {

  const result = await userInfo(req)
  //console.log("user-info req:", req)
  console.log("result:", result)

  res.send(result);  
});


/**
 * @swagger
 *  paths:
 *    /client/stage-clear:
 *      post:
 *        tags:
 *        - "GameServer_API"
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
 *              - pid
 *              - diamond
 *              - score
 *              - stage
 *            properties:
 *              pid:
 *                type: number
 *              diamond:
 *                type: number
 *              score:
 *                type: number
 *              stage:
 *                type: number
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              isBestScore : 0(false), 1(true) "
 */
router.post('/stage-clear', async function(req, res, next) {

  const result = await stageClear(req)
  console.log("result:", result)

  res.send(result);  
});

let userDiamondMap = new Map()


/**
 * @swagger
 *  paths:
 *    /client/longpolling:
 *      post:
 *        tags:
 *        - "GameServer_API"
 *        summary: ""
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
*        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "protocol : echo string"
 *          required: true
 *          schema:
 *            type: object
 *            required:
 *              - pid
 *            properties:
 *              pid:
 *                type: string
 *        responses:
 *          default:
 *            description: "\
 *              returnCode : 0(success or errorCode) \n\
 *              returnMsg : error message \n\
 *              diamond : have diamond"
 */
router.post('/longpolling', async function(req, res, next) {
  //not use api
  console.log("[client_longPolling]", req.body)

  const {pid} = req.body 
  const sessionPid = req.session.pid

  let result: { [key: string]: any } = {};  
  const timeout = 15000; 
  let startTime = Date.now();

  if(sessionPid != pid){
    result.returnCode = '401'
    result.returnMsg = "Failed to Get User Information"

    res.send(result);    
    return 
  }

  result = {};
  
  const checkData = async () => {
    result = {};
  
    const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE pid = ?', [pid]))()
    if(userInfoRow.length <= 0) {          
      result.returnCode = '401'
      result.returnMsg = "Failed to Get User Information"
  
      res.send(result);    
      return 
    }

    result.returnCode = '0'
    result.returnMsg = ""      
    result.diamond = userInfoRow[0].diamond

    const haveDiamond = userDiamondMap.get(pid)
  
    if (haveDiamond != userInfoRow[0].diamond) {
      userDiamondMap.set(pid, userInfoRow[0].diamond)
      res.send(result);    
      return 
    }
  
    const currentTime = Date.now();
    if (currentTime - startTime >= timeout) {
      startTime = Date.now();
      res.send(result); 
      return
    }
  
    await setTimeout(checkData, 3000);
  };

  await checkData();
});

export default router

