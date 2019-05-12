import IUser from "./userModel";
import { post } from "../infrastructure/httpService";

export const register = (user: IUser) => {
    return post('users', user);
};
