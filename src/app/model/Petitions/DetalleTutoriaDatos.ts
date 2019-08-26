export class DetalleTutoriaDatos {
    
    id:Number;
    fecha: string;
    hora:Date;
    nivel_id:string;
    unidad_id:string;
    tutoria_id:string;
    tutor_id:string;

    constructor(id:Number,fecha:string,hora:Date, nivel_id:string,unidad_id:string,tutoria_id:string,tutor_id:string){
        this.id = id;
        this.fecha= fecha;
        this.hora = hora;
        this.nivel_id = nivel_id;
        this.unidad_id = unidad_id;
        this.tutoria_id = tutoria_id;
        this.tutor_id = tutor_id;
    }
}