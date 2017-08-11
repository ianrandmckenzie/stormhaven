import { Component } from '@angular/core';
import { Globals} from './globals';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div>warmth: {{globals.warmth}} | sanity: {{globals.sanity}} | energy: {{globals.energy}}</div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/items" routerLinkActive="active">Items</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stormhaven';
  constructor(private globals: Globals) {}

  ngOnInit(): void {
    setInterval(() => {
      this.globals.warmth -= 1;
      this.globals.sanity -= 1;
      this.globals.energy -= 1;
    }, 1000);
  }
}
