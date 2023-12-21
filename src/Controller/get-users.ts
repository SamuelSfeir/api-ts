import { IGetUsersController, IGetUsersRepository } from "./interface"


export class GetUsersController implements IGetUsersController{
    getUserRepository : IGetUsersRepository  // tem que colocar antes do constructor
    constructor(
        getUserRepository : IGetUsersRepository
    ){
        this.getUserRepository = getUserRepository
    }
    handle(){
        const user = {
            nome: "joao",
            idade: 24
}
        return user
    }
}