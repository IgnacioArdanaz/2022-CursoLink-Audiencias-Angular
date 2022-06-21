import { ResultadosService } from './resultados/resultados.service';
import { Router } from '@angular/router';
import { VisibilidadSearchService } from './visibilidad/visibilidad-search.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Resultado } from './resultados/resultado';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.Default // Como detecta los cambios: Default → cada vez que hay un cambio, llama al ChangeDetectorRef. OnPush → solo lo llama cndo hay cambios en eventos @Input.
})
export class SearchComponent implements OnInit {
  estaVisible: boolean; // podria inicializarlo en linea: estaVisible: boolean = true;
                        // Tengo que dejarlo público xq o sino el html no puede acceder al atributo
  busqueda: string|null;
  resultado: Resultado|null;

  constructor(
    private visibilidadSearchService: VisibilidadSearchService, // Como la clase es inyectable, angular se encarga de hacer que ese singleton sea un atributo implicito de la clase que lo incluye en su constructor
    private resultadosService: ResultadosService,
    private router: Router
    ) {
    this.estaVisible = false;
    this.busqueda = null;
    this.resultado = null;
   }

  ngOnInit(): void { // un metodo propio de angular atado al ciclo de vida del componente (arranca, tiene cambios, muere). En este caso se lo llama cuando nace angular se llama a este metodo, desp del contructor. Se recomienda hacer las inicializaciones mas complejas, como inicializar una api o las suscripciones a los servicios etc
    this.visibilidadSearchService.cambioDeVisibilidad.subscribe((cambioEstaVisible: boolean) => {
      this.estaVisible = cambioEstaVisible; // Lo que quiero que haga el observador cuando es notificado
    }); // La clase se quiere subscribir a los emir que haga el servcio
    this.resultadosService.cambioDeResultado.subscribe((cambioResultado: Resultado) => {
      this.resultado = cambioResultado;
    });
  }

  public buscar() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // si voy a navegar a un componente que ya está instanciado, le digo que no lo reutilice, sino que quiero que lo mate e instancie uno nuevo
    //  /usuario/1/perfil  → ['/usiario','/1','/perfil']
    this.router.navigate(['/audiencias'], { queryParams: { busqueda: this.busqueda} }); // atributos de ese queryParams se van a convertir en las "keys" de la url y los valores de ellos, en los "values" de
  }

}
