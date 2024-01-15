import express from 'express';
import {config} from 'dotenv'
import { GetUsersController } from './Controller/get-users';

config()

const app = express()

// Quando eu receber uma requisicao na porta 8080 eu respondo 'Deu certo'

//Controller
app.get("/", (req,res) => {
    res.send('Deu certo');
});

// app.get("/users", (req,res) => {
// //    const userController = new GetUsersController('mongodb')
//    const user = userController.handle()
//     res.json(user);
// });

app.listen(process.env.PORT, () => console.log(`listening to: ${process.env.PORT}`));
