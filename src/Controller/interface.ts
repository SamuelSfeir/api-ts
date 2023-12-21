import { Users } from "../Models/users";


export interface IGetUsersController {
    handle() : any;
}

export interface IGetUsersRepository {
    getusers(): Promise<Users[]>
}