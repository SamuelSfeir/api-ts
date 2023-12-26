import { GetUsersRepository } from "../Repository/get-user"
import { IGetUsersController, IGetUsersRepository } from "./interface"

// new GetUsersController(new GetUsersRepository());

export class GetUsersController implements IGetUsersController{
    getUserRepository : IGetUsersRepository  // tem que colocar antes do constructor
    constructor(
        getUserRepository : IGetUsersRepository
    ){
        this.getUserRepository = getUserRepository
    }
    handle(){
        const arrayUsers = this.getUserRepository.getusers();
        return arrayUsers;
    }
}

const repository = new GetUsersRepository();

const controller = new GetUsersController(repository)

controller.handle();