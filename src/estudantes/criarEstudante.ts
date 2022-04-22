import { Request, Response } from "express"
import { connection } from "../data/connection"
import estudante from "./estudante";


export async function criarEstudante(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try { 

     if(!req.body.name || !req.body.email || !req.body.data_nasc || !req.body.turma_id){
      throw new Error("Verifique as informações solicitadas");
     }
        const novoEstudante: estudante = new estudante(Date.now().toString(), req.body.name, req.body.email, req.body.data_nasc, req.body.turma_id)
        connection("Estudante")
       .insert(novoEstudante)
       .then(() => { res.status(200).send("Estudante criado com sucesso!") })            
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    } 
    

}

export async function getEstudante(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {
       const name=req.query.name as string
       const table='Estudante'
   
       const estudante = await connection(table)
       .where('name','LIKE',`%${name}%`  )
       res.status(200).send(estudante)
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }   
 }

 export async function putEstudante(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {
       const table='Estudante'
   
       await connection(table)
       .update({turma_id: req.body.turma_id})
       .where('id',"=", req.body.id )
 
       res.status(200).send("Turma atualizada com sucesso!!")
 
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }   
 }