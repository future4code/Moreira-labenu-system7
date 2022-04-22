import express, {Express} from 'express'
import cors from 'cors'
import { criarTurma, getTurma, putTurma } from './turmas/criarTurma';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/turma/add",criarTurma);
app.get("/turma", getTurma);
app.put("/turma/trocamodulo", putTurma);




app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});