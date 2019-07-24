import { Component, OnInit, ViewChild } from '@angular/core';
import { RecordProduccion } from '../../../model/RecordProduccion';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/model/Plan';
import { MatPaginator,MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  planes: Plan[];
  record: RecordProduccion[] = [
    {fechaIng: "05-05-2018",no:1,telefono:"77104569",titular: "Javier Antonio Rosales",NoMat:"00001",inscripcion: 180, plan: 15,valorMes: 80,valorTotal: 1380,ejecutivo: "Jader Perez",estrategia: "Facebook",formaPago: "Efectivo",observacion: "Efectivo $180 tipo cambio 32.21"},
    {fechaIng: "08-05-2018",no:2,telefono:"82310871",titular: "Juan Centeno Rios",NoMat:"00002",inscripcion: 220, plan: 12,valorMes: 95,valorTotal: 1360,ejecutivo: "Grechis Rodrigues",estrategia: "Canal 13",formaPago: "Tarjeta",observacion: "Tarjeta $220 tipo cambio 32.21"},
    {fechaIng: "10-05-2018",no:3,telefono:"77745789",titular: "Stephanie Aguilar",NoMat:"00003",inscripcion: 200, plan: 13,valorMes: 90,valorTotal: 1370,ejecutivo: "Stewart Valerio",estrategia: "Radio Ya",formaPago: "Tarjeta Banpro",observacion: "Tarjeta Banpro $200 tipo cambio 32.21"},
    {fechaIng: "12-05-2018",no:4,telefono:"88786534",titular: "Jonny Pachecho",NoMat:"00004",inscripcion: 200, plan: 13,valorMes: 90,valorTotal: 1370,ejecutivo: "Jader Perez",estrategia: "Facebook",formaPago: "Efectivo",observacion: "Efectivo $200 tipo cambio 32.21"},
  ];

  //Modificar el displayed columns para los nombres de las columnas
  displayedColumns: string[] = ['fechaIng','no','telefono','titular','NoMat','inscripcion','plan','valorMes','valorTotal','ejecutivo','estrategia','formaPago','observacion'];
  dataSource = new MatTableDataSource<RecordProduccion>(this.record);
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  constructor(private planService: PlanService) { }
  
  ngOnInit() {
    /*this.planService.getPlan().subscribe(
      //Asignando el stream de clientes de la clase @clienteService al objeto local clientes
      plan => this.planes = plan
    );*/
    this.dataSource.paginator = this.paginator;
    console.log(this.planes);
  }

  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Grechis Rodriguez"},
      {id: 1, name: "Jader Perez"},
      {id: 2, name: "Stewart Valerio"},
      {id: 3, name: "Juniet Lopez"},
      {id: 4, name: "Joel Castro"},
      {id: 5, name: "Andrea Useda"},
  ];

  selectedPlan;
  plan:Array<Object> = [
      {id: 0, name: 4},
      {id: 1, name: 6},
      {id: 2, name: 8},
      {id: 3, name: 10},
      {id: 4, name: 12},
      {id: 5, name: 13},
      {id: 6, name: 15},
  ];

  selectedEstrategia;
  estrategia:Array<Object> = [
      {id: 0, name: "Facebook"},
      {id: 1, name: "Canal 13"},
      {id: 2, name: "Radio Ya"},
      {id: 3, name: "Radio Restauracion"},
  ];

  selectedForma;
  forma:Array<Object> = [
      {id: 0, name: "Tarjeta Banpro"},
      {id: 1, name: "Tarjeta Bac"},
      {id: 2, name: "Tarjeta Bancentro"},
      {id: 3, name: "Tarjeta Visa"},
      {id: 4, name: "Tarjeta Mastercard"},
      {id: 5, name: "Efectivo"},
      {id: 6, name: "Cheque"},
  ];

  valor: boolean = false
  selected(){
    console.log(this.selectedLevel.name);
  }

  selectedFormas(){
    console.log(this.selectedForma.name);
  }

  selectedPlanItem(){
    console.log(this.selectedPlan);
  }
}
