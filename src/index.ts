import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import {knex} from "knex"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (request, response) => {
	console.log("Acessei o meu endpoint")

	response.send("Poing")
})















app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});