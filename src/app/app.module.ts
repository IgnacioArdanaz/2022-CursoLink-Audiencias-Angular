import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { InicioComponent } from './inicio/inicio.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({ //Annotations, se los conoce como decoradores, decimos que es una modulo
  declarations: [ // Dentro de esto, se declaran todos los componentes que pertenecen al modulo
    AppComponent, InicioComponent, AcercaDeComponent, ComoFuncionaComponent, PerfilComponent// Mi archivo html
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Este modulo es un modulo de ruteo que solo va a manejar rutas
    GeneralesModule,
    RouterModule,

    // Para parte de forms
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Por defecto es el componente que va a mostrar algo
})
export class AppModule { }

//una app angular est{a formada por "modulos", un modulo de angular puede estar formado por uno o varios "componenetes"
// Un modulo puede clasificarse como modulo de vista (para mostrar) o de ruteo (puedo llegar a sus componentes a partir de rutas).
// Un componete de angular esta conformado por 3 cosas: 1) html (contiene la maqueta), 2) archivo de estilos (css, saas, etc), 3) controlador (archivo typescript)
// Un componente solo puede pertenecer en un modulo, pero si se pueden imortar en otros.

//Hay un modulo especial, y ese es el modulo raiz, llamado "app". Porque es la raiz de este gran arbol de modulos y componentes. Siempre se ingresa a este modulo raiz
