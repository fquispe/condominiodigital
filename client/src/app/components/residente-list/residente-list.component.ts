import { Component, OnInit } from '@angular/core';

import { ResidenteService } from '../../services/residente.service';

@Component({
  selector: 'app-residente-list',
  templateUrl: './residente-list.component.html',
  styleUrls: ['./residente-list.component.css']
})
export class ResidenteListComponent implements OnInit {

  listaResidentes: any = [];

  constructor(private residenteService : ResidenteService) { }

  ngOnInit() {
    this.residenteService.listResidentes().subscribe(
      res => {
        this.listaResidentes = res;
      },
      err => console.log(err)
    )
  }

}
