import axios from "axios";
import pg from "pg";
const { Pool } = pg;
const erp = process.env.ERP_BASE_URL;
const banner = process.env.BANNER_BASE_URL;


const saveReviewsToDB = async (reviews: any, pid: string) => {
    // console.log('hellow from dal', reviews,pid);
    const thumbUp = 0;
    const thumbDown = 0;
    const query = `INSERT INTO reviews (userid , productid ,author,title,body,rating,thumbUp,thumbDown) VALUES ($1, $2, $3, $4, $5, $6,$7,$8)`;
    const values = [reviews.userId, pid, reviews.author, reviews.title, reviews.review, reviews.rating, thumbUp, thumbDown];
    const res = await sendQueryToDatabase(query, values)
    const { rows } = res
    return rows;

}

const getReviewsFromDB = async (pid: string) => {
    const query = `SELECT * FROM reviews WHERE productid = $1`;
    const values = [pid];
    const res = await sendQueryToDatabase(query, values)
    const { rows } = res
    console.log('Query result from getReviewsFromDB:', rows);
    return rows;
}    // console.log('Query result from getReviewsFromDB:', rows);

const feedbackReviews = async (pid: string, userId: string, feedback: boolean) => {
    console.log('hello from dal pid', pid, "userid", userId, 'feedbeack', feedback);

    let thumbsUpValue = 0;
    let thumbsDownValue = 0;

    if (feedback) {
        // If feedback is true, update thumbUp
        thumbsUpValue = 1;
    } else {
        // If feedback is false, update thumbDown
        thumbsDownValue = 1;
    }

    const query = `
        INSERT INTO reviews (productid, userid, thumbUp, thumbDown)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (productid, userid) DO UPDATE 
        SET thumbUp = reviews.thumbUp + $3, thumbDown = reviews.thumbDown + $4    `;
    const values = [pid, userId, thumbsUpValue, thumbsDownValue];
    const res = await sendQueryToDatabase(query, values)
    const { rows } = res
    const array = []
    array[0] = { "items": rows }
    console.log('Query result from feedbackReviews:', rows);
    return array;

};


const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
    const pool = new Pool()
    const res = await pool.connect()
    const data = await res.query(query, values).catch(err => console.log(err));
    res.release()
    return data
}

export default { saveReviewsToDB, getReviewsFromDB, feedbackReviews }