import { Component } from '@angular/core';

import { Hero } from './hero';//導出Hero類別
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes'; //application name

  // public heroes = HEROES;
  heroes: Hero[];
  
  selectedHero: Hero;

  onSelect(hero: Hero) 
  { 
    this.selectedHero = hero; 
  }
}

// 移到hero.ts
// export class Hero{
//   id: number;
//   name: string;
// }
// 移到mock-heroes.ts
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
