import { Types } from "mongoose";
import UserModel from "../models/userModel.js";
import User from "../types/User.js";
import pg from "pg";
const { Pool } = pg;
import { connectionString } from "../configs/db.js";

const addUser = async (user: User) => {
    const query = `INSERT INTO
    users (email, password)
    VALUES (
            $1,
            $2)`;
    const values = [user.email, user.password];
    console.log("values", values);
    const res = await sendQueryToDatabase(query, values)
    const { rowCount } = res
    console.log(rowCount);
    return rowCount;
};

const getUser = async (userId: Types.ObjectId) => {
    const query = `SELECT * FROM users WHERE user_id ::text = $1
                  RETURNING *`
    const values = [userId];
    const res = await sendQueryToDatabase(query, values)
    return res
};

const getUserByEmail = async (email: string) => {
    const query = `SELECT * 
FROM users
WHERE email = $1`
    const values = [email];
    const { rows } = await sendQueryToDatabase(query, values)
    console.log("rows", rows);
    if (rows.length !== 0) return rows[0]
    return false
};

const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
    const pool = new Pool({connectionString: connectionString})
    const res = await pool.connect()
    const data = await res.query(query, values).catch(err => console.log(err));
    res.release()
    return data
};


export default {addUser, getUser, getUserByEmail};
