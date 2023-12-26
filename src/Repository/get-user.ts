import { IGetUsersRepository } from "../Controller/interface"
import { Users } from "../Models/users";

export class GetUsersRepository implements IGetUsersRepository{
  getusers(): Users[] {
      const arrayUsers: Users[] = [];
      arrayUsers.push({
          nome: "joao",
          email: "joao@gmail.com",
          idade: 24
      })
    return arrayUsers;
  }
}