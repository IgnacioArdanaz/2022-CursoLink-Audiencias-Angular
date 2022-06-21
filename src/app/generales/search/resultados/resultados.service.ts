import { Injectable, Output, EventEmitter } from '@angular/core';
import { Resultado } from './resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  @Output() cambioDeResultado: EventEmitter<Resultado>;

  constructor() {
    this.cambioDeResultado = new EventEmitter();
  }

  public notificarCambioDeResultado(nuevoResultado: Resultado) {
    this.cambioDeResultado.emit(nuevoResultado);
  }
}
