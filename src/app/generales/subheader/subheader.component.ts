import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderComponent implements OnInit {

  constructor(
    router: Router
  ) { }

  ngOnInit(): void {
  }

}
