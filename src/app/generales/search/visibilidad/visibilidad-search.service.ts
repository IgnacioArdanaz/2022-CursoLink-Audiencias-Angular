import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadSearchService { // Servicio → Singletons u objetos bien conocidos que tienen distintos usos: comunicar 2 o mas componentes; consumir apis;etc
  private busquedaEstaVisible: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>; // patron observer → tengo a un subjeto a cual mucho lo estan mirando.
                                                        // Plantea 2 entidades: observado/observable y observadores. Cada vez q cambie mi atributo, le voy a avisar a todos los interesados que están escuchando.

  constructor() {
    this.cambioDeVisibilidad = new EventEmitter(); // Genera estructura de suscripcion de objetos y de mandar notificaciones a los suscriptos
    this.busquedaEstaVisible = false;
  }

  public hacerVisibleBarraDeBusqueda() {
    this.busquedaEstaVisible = true;
    this.notificarCambio();
  }

  public ocultarBarraDeBusqueda() {
    this.busquedaEstaVisible = false;
    this.notificarCambio();
  }

  private notificarCambio() {
    this.cambioDeVisibilidad.emit(this.busquedaEstaVisible) // emito un evento para todos los suscriptos. Lo que emito me determina el generic de mi event emiter
  }
}
