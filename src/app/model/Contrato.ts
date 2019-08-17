import { Titular } from './Titular';
import { Alumno } from './Alumno';
import { Asesor } from './Asesor';
import { Forma } from './Forma';
import { Plan } from './Plan';
import { Estrategia } from './Estrategia';

export class Contrato{
    
    titular:Titular;
    alumno:Alumno;
    asesor_id: Asesor;
    estrategia:Estrategia;
    forma:Forma;
    plan:Plan;
    fecha_contrato:Date;
}