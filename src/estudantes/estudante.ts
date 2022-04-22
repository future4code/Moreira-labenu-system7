export default class estudante{
    public id: string;
    public name: string;
    public email: string;
    public data_nasc: Date;
    public turma_id: string;
    constructor(id: string, name: string,  email: string, data_nasc: Date, turma_id: string){
        this.id = id,
        this.name = name,
        this.email = email,
        this.data_nasc = data_nasc,
        this.turma_id = turma_id
     
    }
}