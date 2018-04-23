import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nav',
  template: `
  <ul>
    <li><a routerLink="/">Inicio</a></li>
    <li><a routerLink="/operations">Operaciones</a></li>
  </ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
