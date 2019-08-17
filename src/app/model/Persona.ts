
export class Persona{
    id:Number;
    nombre:string;
    apellido:string;

    constructor(id:Number,nombre:string,apellido:string){
        this.id = id || null;
        this.nombre = nombre || "";
        this.apellido = apellido || "";
    }
}