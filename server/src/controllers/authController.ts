import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import STATUS_CODES from "../utils/StatusCodes.js";
import RequestError from "../types/errors/RequestError.js";
import generateToken from "../utils/jwtUtils.js";
import authService from "../services/authService.js";
import userValidation from "../utils/validations/userValidation.js";
import User from "../types/User.js";
import jwt, { JwtPayload } from "jsonwebtoken";


const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { error } = userValidation(req.body);
    if (error) throw new RequestError(error.message, STATUS_CODES.BAD_REQUEST);
    if (req.cookies.jwt) {
        const token = req.cookies.jwt;
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET not defined");
            process.exit(1);
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // req.userId = (decoded as JwtPayload).userId;
            // throw new RequestError('User already logged in', STATUS_CODES.BAD_REQUEST);
        } catch (error) {
            console.error(error);
            throw new RequestError(
                "Not authorized, token failed",
                STATUS_CODES.UNAUTHORIZED
            );
        }
    }
    const { email, password } = req.body;
    const user = await authService.authUser(email, password);
    if (user.userid) generateToken(res, user.userid);
    res.json({
        id: user.userid,
        email: user.email,
    });
});


const logoutUser = (_req: Request, res: Response) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(STATUS_CODES.OK).json({ message: "Logged out successfully" });
};
export default { loginUser, logoutUser };
