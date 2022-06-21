import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService { // Por convencion se pone "apiHorario"
  private url: string = environment.apiHorarioURL;
  constructor(
    private http: HttpClient
  ) { }

  public horaActual() {
    return this.http.get(this.url) // Todos estos get, post, etc, funcionan de forma asincronica o sea devuelven a un observable
  }
}
