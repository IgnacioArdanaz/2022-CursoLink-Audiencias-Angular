import { PerfilComponent } from './perfil/perfil.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { // Las rutas se declaran como obj de js
     path: "", // localhost:4200/inicio
     component: InicioComponent  // Al componente que tiene que ejecutar y mostrar
  },
  {
    path: "acerca-de",
    component: AcercaDeComponent
  },
  {
    path: "como-funciona",
    component: ComoFuncionaComponent
  },
  { path: 'audiencias', loadChildren: () => import('./audiencias/audiencias.module').then(m => m.AudienciasModule) }, // Todo lo q este antepuesto por audiencias se lo delega al modulo de audiencias
  {
    path: "perfil",
    component: PerfilComponent
  },

  {
    path: "**",  // el ** significa que si no matchea con alguna ruta anterior, entra por esta si o si → definir rutas por patrones
    component: PaginaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
