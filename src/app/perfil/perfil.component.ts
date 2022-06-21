import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  formulario: FormGroup|null; // objeto que nos permite controlar el formulario. Tenemos un doble bindeo.
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formulario = null;
  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.recuperarUsuarioSiEsPosible();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required], // Un campo nombre con valor por defecto '' y que es obligatorio
      apellido: ['', Validators.required]
    });
  }

  recuperarUsuarioSiEsPosible() {
    const nombre = localStorage.getItem('nombre'); // Si no esta, me da nulo
    const apellido = localStorage.getItem('apellido');

    this.formulario?.controls['nombre'].setValue( nombre != null ? nombre : '');
    this.formulario?.controls['apellido'].setValue( apellido != null ? nombre : '');
  }

  guardar() {
    alert('Se han guardado los datos');

    var nombre = this.formulario?.get('nombre')?.value;
    var apellido = this.formulario?.get('apellido')?.value;

    console.log(nombre + " " + apellido);

    // Local Storage -> guardar en el navegador. Del tipo KEY VALUE. Se borra recien cuando borramos cache del navegador. En la consola, lo puedo ver en Aplication > Storage > Local Storage

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);

    console.log(localStorage.getItem('nombre'));
  }

  private formularioEsInvalido() {
    return this.formulario?.invalid;
  }

  campoInvalido(campo: string) {
    return this.formulario?.get(campo)?.invalid;
  }
}
