import { MainIdService } from './main-service/main-id.service';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root', // Los componentes pueden tener y definir sus propios selectores, una nueva hipotetica etiqueta html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit { // interfaz que me obiga a tener un ngAfterViewInit. Despues que se ejecuto el ngOnInit de todos los componentes hijos. Lo necesito asi, xq el inicio componente cambia el id en los OnInit, entonces si yo ejecuto esto en el OnInit tengo que esperar a que lo hayan cambiado.
  title = 'Audiencias';
  idContainer: string;

  constructor(
    private mainIdService: MainIdService,
    private cdr: ChangeDetectorRef // objeto que lo llamo explicitimenta para pedirle a angular que diga los cambios que haya realizado, el Event Loop lo llama constantemente, pero quizas lo quiero llamar yo para avisar que hay cambios.
  ) {
    this.idContainer = "searcher";
  }

  ngAfterViewInit(): void { // nuevo estado del ciclo de vida de un componente
    this.mainIdService.cambioDeId.subscribe((cambioId: string) => {
      this.idContainer = cambioId;
      this.cdr.detectChanges();
    })
  }
}
