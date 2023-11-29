import axios from "axios";
import { config } from 'dotenv';
config();

const banner = process.env.BANNER_BASE_URL

const erp = process.env.ERP_BASE_URL




const getSideFromBanners=  async () => {
    console.log("msho ichoodi0");
    const res = await fetch('https://banners-deshbord-doker.onrender.com/api/bannersImage/ext/?limit=1&size=side&')    
    if (res.ok) {
        console.log('msho ichoodi');  
        return res.body
    }
    throw new Error("error");
};

const getTopFromBanners = async () => {
    const res = await axios.get(`${banner}/api/bannersImage/ext/?size={top}&userID`)
    if (res.status === 200) {
        return res.data.data;
        }
        throw new Error("error");
    };

const getAllFromBanners=  async (userID:string) => {
    const res = await axios.get(`${banner}/api/bannersImage/ext/?size={allscreen}`)
    if (res.status === 200) {
        return res.data;
        }
        throw new Error("error");
    };




export default { getSideFromBanners, getAllFromBanners ,getTopFromBanners }