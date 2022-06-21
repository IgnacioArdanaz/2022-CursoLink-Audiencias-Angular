import { AudienciaComponent } from './../audiencia/audiencia.component';
import { HorarioService } from './../../generales/horarios/horario.service';
import { ResultadosService } from './../../generales/search/resultados/resultados.service';
import { MainIdService } from './../../main-service/main-id.service';
import { VisibilidadSearchService } from './../../generales/search/visibilidad/visibilidad-search.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  busqueda: string;
  audienciaEjemplo: any;
  audiencias: any;
  @ViewChild('containerAudiencias', {read: ViewContainerRef}) containerDeAudiencias: ViewContainerRef|undefined;
  private referenciasAComponentesDeAudiencias: any;

  constructor(
    private visibilidadSearchService: VisibilidadSearchService,
    private mainIdService: MainIdService,
    private resultadosService: ResultadosService,
    private horarioService: HorarioService,
    private ruta: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {
      this.busqueda = "";
      this.audiencias = [];
      this.referenciasAComponentesDeAudiencias = [];
    }

  ngOnInit(): void {
    // Tengo que hacer eso en cada componentes para que este componente sea reproducible, es decir que si hago F5 en audiencias, debería mostrarme todo bien.
    this.visibilidadSearchService.hacerVisibleBarraDeBusqueda();
    this.mainIdService.seatearSearcherId();

    this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParams['busqueda'] : "" ; // snapshot es el objeto de la ruta entera. Pondria .params si quisiera los parametro. busqueda es la
    // this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParamMap.get('busqueda') : "" ; // snapshot es el objeto de la ruta entera. Pondria .params si quisiera los parametro. busqueda es la
    // this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParams.busqueda : ""; // snapshot es el objeto de la ruta entera. Pondria .params si quisiera los parametro. busqueda es la
    this.crearAudienciaEjemplo();
    this.buscar();
  }

  public crearAudienciaEjemplo() {
    this.audienciaEjemplo = {
      sujetoObligado: {
        nombre: 'Alberto Ángel',
        apellido: 'Fernández',
        dni: '13482686',
        cargo: 'Presidente',
        dependenciaEstatal: 'Presidencia de la Nación'
      },
      solicitante: {
        nombreCompleto: 'Catalano Daniel Adolfo',
        dni: '23819100',
        tipoRepresentacion: 'Persona jurídica',
        nacionalidad: 'Argentina',
        cargo: 'Secretario General de la Asociación de Trabajadores del Estado de Capital Federal',
        entidad: 'TRABAJADORES DEL ESTADO A T E',
        cuit: '30530013576'
      },
      fecha: '15/06/2022',
      hora: '17:00',
      tipoInteres: 'Colectivo',
      motivo: 'Agenda sindical'
    };

    const otraAudiencia = {
      sujetoObligado: {
        nombre: 'Alberto Ángel',
        apellido: 'Fernández',
        dni: '13482686',
        cargo: 'Presidente',
        dependenciaEstatal: 'Presidencia de la Nación'
      },
      solicitante: {
        nombreCompleto: 'Ignacio Ardanaz',
        dni: '23819100',
        tipoRepresentacion: 'Persona jurídica',
        nacionalidad: 'Argentina',
        cargo: 'Secretario General de la Asociación de Trabajadores del Estado de Capital Federal',
        entidad: 'TRABAJADORES DEL ESTADO A T E',
        cuit: '30530013576'
      },
      fecha: '15/06/2022',
      hora: '17:00',
      tipoInteres: 'Colectivo',
      motivo: 'Agenda sindical'
    };

    this.audiencias.push(this.audienciaEjemplo);
    this.audiencias.push(otraAudiencia);
  }

  private buscar() {
    //ACA DEBERIAMOS IR AL BACKEND A BUSCAR LAS COINCIDENCIAS
    this.mostrarCantResultados();
    this.mostrarResultados();
  }
  private mostrarCantResultados() {
    this.horarioService.horaActual().subscribe((hora: any) => {
      this.resultadosService.notificarCambioDeResultado({ totales: 155, sistemaActual: 155, sistemaAnterior: 0, busqueda: this.busqueda, horario: hora } );
    });
  }
  private mostrarResultados() {
    this.audiencias.forEach((audiencia: any) => { // por cada una de estas quiero instanciar un componente
      const audienciaComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AudienciaComponent); // AudienciaComponent es la la clase/componente que quiero instanciar
      const audienciaComponent = this.containerDeAudiencias?.createComponent(audienciaComponentFactory);

      if(audienciaComponent != null) {
        audienciaComponent.instance.audiencia = audiencia;
        audienciaComponent.instance.id = this.referenciasAComponentesDeAudiencias.length;
      }

      this.referenciasAComponentesDeAudiencias.push(audienciaComponent);
    });

  }

  eliminarAudiencia(id: number) {
    const posibleAudienciaComponent = this.referenciasAComponentesDeAudiencias.find((c: any) => c.instance.id == id);

    if(posibleAudienciaComponent != undefined && posibleAudienciaComponent != null) {
      this.containerDeAudiencias?.remove(id);
    }
  }

}
