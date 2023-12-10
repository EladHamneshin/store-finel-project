import RequestError from "../types/errors/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
import reviewsDal from "../dal/reviewsDal.js";



const saveReviewsToDB = async (reviews: any, pid: string) => {
    const product = await reviewsDal.saveReviewsToDB(reviews, pid)
    if (!product)
        throw new RequestError('product not found', STATUS_CODES.BAD_REQUEST)
    return product
}

const getReviewsFromDB = async (pid: string) => {
    const product = await reviewsDal.getReviewsFromDB(pid)
    if (!product)
        throw new RequestError('product not found', STATUS_CODES.BAD_REQUEST)
    return product
}

const feedbackReviews = async (pid: string, userId: string, feedback: boolean) => {

    const product = await reviewsDal.feedbackReviews(pid, userId, feedback)
    if (!product)
        throw new RequestError('product not found', STATUS_CODES.BAD_REQUEST)
    return product
}


export default { saveReviewsToDB, getReviewsFromDB, feedbackReviews }