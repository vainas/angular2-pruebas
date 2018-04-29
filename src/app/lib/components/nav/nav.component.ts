import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nav',
  template: `
  <nav class="navigation">
  <section class="container">
  <ul class="navigation-list float-right">
    <li class="navigation-item"><a class="navigation-link" routerLink="/">Inicio</a></li>
    <li class="navigation-item"><a class="navigation-link" routerLink="/operations">Operaciones</a></li>
  </ul>
  </section>
  </nav>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
