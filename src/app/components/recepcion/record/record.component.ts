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
  displayedColumns: string[] = ['fechaIng','titular','NoMat','inscripcion','plan','valorMes','valorTotal','ejecutivo','estrategia','formaPago'];
  
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  constructor(private planService: PlanService,private contratoService: ContratoService) { }
  
  ngOnInit() {
    this.planService.getPlan().subscribe(plan => this.planes = plan)
    this.contratoService.getRecord().subscribe(
      response => {
        this.record = response
        this.dataSource = new MatTableDataSource<RecordProduccion>(this.record);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  
  valor: boolean = false
}
