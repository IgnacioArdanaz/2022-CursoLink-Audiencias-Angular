import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Esto va a tener que estar en todos los modulos que consuman apis



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    PaginaNoEncontradaComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,  //Importar ese Router que inyectamos
    FormsModule,    //
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SubheaderComponent,
    SearchComponent
  ]
})
export class GeneralesModule { }
