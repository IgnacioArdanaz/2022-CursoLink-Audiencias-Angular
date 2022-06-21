import { Router } from '@angular/router';
import { VisibilidadSearchService } from './../generales/search/visibilidad/visibilidad-search.service';
import { MainIdService } from './../main-service/main-id.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css']
})
export class ComoFuncionaComponent implements OnInit {

  constructor(
    private mainIdService: MainIdService,
    private visibilidadSearchService: VisibilidadSearchService,
    router: Router
  ) { }

  ngOnInit(): void {
    this.mainIdService.seatearHelpId();
    this.visibilidadSearchService.ocultarBarraDeBusqueda();
  }

}
