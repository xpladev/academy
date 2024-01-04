import {createPool, QueryOptions} from 'mysql2/promise';
import { dbconfig, walletDB } from './db-config';

export const pool = createPool(dbconfig)

export class Mysql {
    public static connect = (fn) => async(...args: any) => {
        const con: any = await pool.getConnection()

        let result
        try{
            result = await fn(con, ...args)
        }
        catch(err) {

            con.connection.release();

            if(err?.sqlMessage)
                throw err.sqlMessage
            else 
                throw err
        }

        con.connection.release()
        return result
    }
}

export const walletPool = createPool(walletDB)

export class walletMysql {
    public static connect = (fn) => async(...args: any) => {
        const con: any = await walletPool.getConnection()

        let result
        try{
            result = await fn(con, ...args)
        }
        catch(err) {

            con.connection.release();

            if(err?.sqlMessage)
                throw err.sqlMessage
            else 
                throw err
        }

        con.connection.release()
        return result
    }
}


