import IUser from "./userModel";
import { post } from "../infrastructure/httpService";

export const register = (user: IUser) => {
    return post('https://e89t06ltg0.execute-api.us-east-1.amazonaws.com/prod/users', user);
};