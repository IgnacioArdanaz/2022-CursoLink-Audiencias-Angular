import { MainIdService } from './../main-service/main-id.service';
import { VisibilidadSearchService } from './../generales/search/visibilidad/visibilidad-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  estructuraDelPoderEjecutivoNacional = [ // Aca harcodeamos pero en gral lo buscas de api
    { idBusqueda: 30, nombre: 'Presidencia de la Nación', id: 1179},
    { idBusqueda: 3132, nombre: 'Ministerio de Educación', id: 559},
    { idBusqueda: 3156, nombre: 'Ministerio de Desarrollo Territorial y Hábitat', id: 519},
    { idBusqueda: 3115, nombre: 'Jefatura de Gabinete de Ministros', id: 437},
  ];


  constructor(
    private visibilidadSearchService: VisibilidadSearchService, // inyecto el servicio
    private mainIdService: MainIdService
    ) { }

  ngOnInit(): void {
    this.visibilidadSearchService.hacerVisibleBarraDeBusqueda(); // Cada vez q nace este objeto, quiero tener la barra visible
    this.mainIdService.seatearSearcherId();
  }

}
