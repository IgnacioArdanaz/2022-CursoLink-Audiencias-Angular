import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainIdService {
  private id: string;
  @Output() cambioDeId: EventEmitter<string>;

  constructor() {
    this.cambioDeId = new EventEmitter();
    this.id = "searcher";
  }

  public getIdDefault() {
    return "searcher"; // o this.id;
  }

  public seatearAboutId() {
    this.id = "about";
    this.notificarCambios();
  }

  public seatearSearcherId() {
    this.id = "searcher";
    this.notificarCambios();
  }

  public seatearHelpId() {
    this.id = "help";
    this.notificarCambios();
  }

  public notificarCambios() {
    this.cambioDeId.emit(this.id);
  }
}
