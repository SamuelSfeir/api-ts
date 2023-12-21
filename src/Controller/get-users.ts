import { IGetUsersController } from "./interface"


export class GetUsersController implements IGetUsersController{
    handle(){
        const user = {nome: "joao",
idade: 24}
        return user
    }
}