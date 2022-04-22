import express, {Express} from 'express'
import cors from 'cors'
import { criarTurma, getTurma, putTurma } from './turmas/criarTurma';
import { criarEstudante, getEstudante, putEstudante } from './estudantes/criarEstudante';
import { criarDocentes, getDocentes, putDocentes } from './docentes/criarDocentes';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/turma/add",criarTurma);
app.get("/turma", getTurma);
app.put("/turma/trocamodulo", putTurma);
app.post("/estudante/add", criarEstudante);
app.get("/estudante", getEstudante);
app.put("/estudante/trocaturma", putEstudante);
app.post("/docentes/add",criarDocentes);
app.get("/docentes", getDocentes);
app.put("/docentes/trocadocente", putDocentes);



app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});