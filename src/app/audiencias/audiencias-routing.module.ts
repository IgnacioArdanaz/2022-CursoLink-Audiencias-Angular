import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ // Acá manejo rutas relativas, xq la parte de '/audiencias' ya la maneja el router principal
  { path: '', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudienciasRoutingModule { }
