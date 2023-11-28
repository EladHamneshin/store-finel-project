import axios from "axios";
const banner = process.env.BANNER_BASE_URL;


const getSideFromBanners=  async (userID:string) => {
    const res = await axios.get(`${banner}/api/bannersImage/ext/?size={side}&userID={userID}`)
    if (res.status === 200) {
    return res.data.data;
    }
    throw new Error("error");
};
const getAllFromBanners=  async (userID:string) => {
    const res = await axios.get(`${banner}/api/bannersImage/ext/?size={allscreen}&userID={userID}`)
    if (res.status === 200) {
        return res.data.data;
        }
        throw new Error("error");
    };


const getTopFromBanners = async (userID:string) => {
    const res = await axios.get(`${banner}/api/bannersImage/ext/?size={top}&userID={userID}`)
    if (res.status === 200) {
        return res.data.data;
        }
        throw new Error("error");
    };



export default {  getSideFromBanners, getAllFromBanners,getTopFromBanners }