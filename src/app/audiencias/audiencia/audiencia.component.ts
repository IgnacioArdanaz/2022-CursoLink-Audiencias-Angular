import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiencia',
  templateUrl: './audiencia.component.html',
  styleUrls: ['./audiencia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudienciaComponent implements OnInit {
  @Input() audiencia: any|null; // Cuando alguien llame a este componente, le puede pasar un objeto audiencia para que este componente trabaja
  @Input() id: number|null;

  constructor() {
    this.id = null;
  }

  ngOnInit(): void {
  }

}
