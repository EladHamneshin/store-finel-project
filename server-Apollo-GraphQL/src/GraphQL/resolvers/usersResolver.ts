import STATUS_CODES from "../../utils/StatusCodes.js";
import RequestError from "../../types/errors/RequestError.js";
import userService from "../../services/userService.js";
import userValidation from "../../utils/validations/userValidation.js";

interface ResolverArgs {
    userid: string;
    newUser: {
        email: string;
        password: string;
    };
}

export const usersResolver = {
    Query: {
        getUser: async (_: any, { userid }: ResolverArgs) => {
            try {
                // Get user by ID
                const user = await userService.getUser(userid);
                console.log("deghaerhehe",user);
                
                return user[0];
            } catch (error) {
                throw new RequestError("Failed to fetch user", STATUS_CODES.INTERNAL_SERVER_ERROR);
            }
        },
    },

    Mutation: {
        registerUser: async (_: any, { newUser}: ResolverArgs) => {
            try {
                // Validate user input
                const { error } = userValidation(newUser);
                if (error) {
                    // Throw a request error if validation fails
                    throw new RequestError(error.message, STATUS_CODES.BAD_REQUEST);
                }
                
                
                // Add user if validation passes
                const user = await userService.addUser(newUser);
                return user[0];
            } catch (error) {
                throw new RequestError("Failed to register user", STATUS_CODES.INTERNAL_SERVER_ERROR);
            }
        },

        logoutUser: (_: any, res: any) => {
            try {
                // Logout user by clearing JWT cookie
                res.cookie('jwt', '', {
                    httpOnly: true,
                    expires: new Date(0),
                });
                return { message: 'Logged out successfully' };
            } catch (error) {
                throw new RequestError("Failed to logout user", STATUS_CODES.INTERNAL_SERVER_ERROR);
            }
        }
    }
};
