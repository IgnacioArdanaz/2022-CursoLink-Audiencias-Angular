import { Router } from '@angular/router';
import { VisibilidadSearchService } from './../generales/search/visibilidad/visibilidad-search.service';
import { MainIdService } from './../main-service/main-id.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcercaDeComponent implements OnInit {

  constructor(
    private mainIdService: MainIdService,
    private visibilidadSearchService: VisibilidadSearchService,
    router: Router
  ) { }

  ngOnInit(): void {
    this.mainIdService.seatearAboutId();
    this.visibilidadSearchService.ocultarBarraDeBusqueda();
  }

}
