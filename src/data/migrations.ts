import { connection } from "./connection"
import turmas from './turmas.json'
import estudantes from './estudantes.json'
import docentes from './docentes.json'
import hobbies from './hobbies.json'
import especialidades from './especialidades.json'
import estudanteHobbies from './estudanteHobbies.json'
import docenteEspecialidade from './docenteEspecialidade.json'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE Turma (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NULL,
    modulo VARCHAR(255) DEFAULT 0
);
CREATE TABLE Estudante (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR (255) NOT NULL,
	FOREIGN KEY (turma_id) REFERENCES Turma(id) 
);
CREATE TABLE Docentes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
    data_nasc DATE NOT NULL,
    docentes_id VARCHAR (255) NOT NULL,
	FOREIGN KEY (docentes_id) REFERENCES Turma(id)
);
CREATE TABLE Hobbies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NULL
);
CREATE TABLE Especialidades (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255)
);
CREATE TABLE Estudante_Hobbies (
	id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR (255) NOT NULL,
    hobbies_id VARCHAR (255) NOT NULL,
    FOREIGN KEY (hobbies_id) REFERENCES Hobbies(id),
	FOREIGN KEY (estudante_id) REFERENCES Estudante(id)
);
CREATE TABLE Docente_Especialidade (
	id VARCHAR(255) PRIMARY KEY,
    docentes_id VARCHAR (255) NOT NULL,
    especialidades_id VARCHAR (255) NOT NULL,
    FOREIGN KEY (docentes_id) REFERENCES Docentes(id),
	FOREIGN KEY (especialidades_id) REFERENCES Especialidades(id)
);

    `)
    .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertTurmas = () => connection("Turma")
   .insert(turmas)
   .then(() => { console.log("Turmas criadas") })
   .catch(printError)

   const insertEstudantes = () => connection("Estudante")
   .insert(estudantes)
   .then(() => { console.log("Estudantes criados") })
   .catch(printError)

   const insertDocentes = () => connection("Docentes")
   .insert(docentes)
   .then(() => { console.log("Docentes criados") })
   .catch(printError)

   const insertHobbies = () => connection("Hobbies")
   .insert(hobbies)
   .then(() => { console.log("Hobbies criados") })
   .catch(printError)

   const insertEspecialidades = () => connection("Especialidades")
   .insert(especialidades)
   .then(() => { console.log("Especialidades criados") })
   .catch(printError)

   const insertEstudante_Hobbies = () => connection("Estudante_Hobbies")
   .insert(estudanteHobbies)
   .then(() => { console.log("Estudante_Hobbies criada") })
   .catch(printError)

   const insertDocente_Especialidade = () => connection("Docente_Especialidade")
   .insert(docenteEspecialidade)
   .then(() => { console.log("Docente_Especialidade criada") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertTurmas)
   .then(insertEstudantes)
   .then(insertDocentes)
   .then(insertHobbies)
   .then(insertEspecialidades)
   .then(insertEstudante_Hobbies)
   .then(insertDocente_Especialidade)
   .finally(closeConnection)
