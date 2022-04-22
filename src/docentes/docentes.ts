export default class docentes{
    public id: string;
    public name: string;
    public email: string;
    public data_nasc: Date;
    public docentes_id: string;
    constructor(id: string, name: string,  email: string, data_nasc: Date, docentes_id: string){
        this.id = id,
        this.name = name,
        this.email = email,
        this.data_nasc = data_nasc,
        this.docentes_id = docentes_id
     
    }
}