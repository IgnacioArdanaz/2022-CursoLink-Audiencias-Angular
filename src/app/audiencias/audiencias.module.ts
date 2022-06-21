import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudienciasRoutingModule } from './audiencias-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { AudienciaComponent } from './audiencia/audiencia.component';

@NgModule({
  declarations: [
    ListadoComponent,
    AudienciaComponent
  ],
  imports: [
    CommonModule,
    AudienciasRoutingModule
  ]
})
export class AudienciasModule { }
