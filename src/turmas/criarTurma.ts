import { Request, Response } from "express"
import { connection } from "../data/connection"
import turma from "./turma";


export async function criarTurma(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try { 

     if(!req.body.name || !req.body.modulo){
      throw new Error("Verifique as informações solicitadas");
     }
        const novaTurma: turma = new turma(Date.now().toString(), req.body.name, req.body.modulo)
        connection("Turma")
       .insert(novaTurma)
       .then(() => { res.status(200).send("Turma cadastrada com sucesso!") })            
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    } 
    

}


export async function getTurma(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode=400
   try {
      const table='Turma'
  
      const result: turma[] = await connection(table)
      .where('modulo',"!=","0" )

      res.status(200).send(result)


    } catch (error:any) {
       res.status(errorCode).send(error.message)
    }   
}

export async function putTurma(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {
       const table='Turma'
   
       await connection(table)
       .update({modulo: req.body.modulo})
       .where('id',"=", req.body.id )
 
       res.status(200).send("Módulo atualizado com sucesso!!")
 
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }   
 }