import { Request, Response } from "express"
import { connection } from "../data/connection"
import docentes from "./docentes";


export async function criarDocentes(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try { 

     if(!req.body.name || !req.body.email || !req.body.data_nasc || !req.body.docentes_id){
      throw new Error("Verifique as informações solicitadas");
     }
        const novosDocentes: docentes = new docentes(Date.now().toString(), req.body.name, req.body.email, req.body.data_nasc, req.body.docentes_id)
        connection("Docentes")
       .insert(novosDocentes)
       .then(() => { res.status(200).send("Docente criado com sucesso!") })            
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    } 
    

}


export async function getDocentes(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {
       const table='Docentes'
   
       const result: docentes[] = await connection(table)
 
       res.status(200).send(result)
 
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }   
 }
 

 export async function putDocentes(
    req: Request,
    res: Response
 ): Promise<void> {
    let errorCode=400
    try {
       const table='Docentes'
   
       await connection(table)
       .update({docentes_id: req.body.docentes_id})
       .where('id',"=", req.body.id )
 
       res.status(200).send("Docente atualizado com sucesso!!")
 
 
     } catch (error:any) {
        res.status(errorCode).send(error.message)
     }   
 }