import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';//導出Hero類別
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HeroService]
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
  //定義一個私有的heroService屬性，
  //將此當作heroService服務的靶點( injection site)
  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
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
