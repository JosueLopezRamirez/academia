import { Component, OnInit, ViewChild } from '@angular/core';
import { RecordProduccion } from '../../../model/RecordProduccion';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/model/Plan';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  planes: Plan[];
  record: RecordProduccion[];
  dataSource;
  //Modificar el displayed columns para los nombres de las columnas
  // ,'no','telefono'
  displayedColumns: string[] = ['fechaIng','titular','NoMat','inscripcion','plan','valorMes','valorTotal','ejecutivo','estrategia','formaPago'];
  // dataSource = new MatTableDataSource<RecordProduccion>(this.record);
  
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  constructor(private planService: PlanService,private contratoService: ContratoService) { }
  
  ngOnInit() {
    this.planService.getPlan().subscribe(
      //Asignando el stream de clientes de la clase @clienteService al objeto local clientes
      plan => this.planes = plan
    );
    
    this.contratoService.getRecord().subscribe(
      res => {
        this.record = res
        // console.log(this.record);
        this.dataSource = new MatTableDataSource<RecordProduccion>(this.record);
        this.dataSource.paginator = this.paginator;
      }
    );
    // console.log(this.planes);
  }

  // selectedLevel;

  // selectedPlan;
  
  // selectedEstrategia;
  
  // selectedForma;
  
  valor: boolean = false
  // selected(){
  //   console.log(this.selectedLevel.name);
  // }

  // selectedFormas(){
  //   console.log(this.selectedForma.name);
  // }

  // selectedPlanItem(){
  //   console.log(this.selectedPlan);
  // }
}
