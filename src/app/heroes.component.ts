import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';//導出Hero類別
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']//,
  //providers: [HeroService]提升 到 AppComponent
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes'; //application name

  // public heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;
  error: any;//錯誤訊息
  addingHero = false;
  onSelect(hero: Hero) 
  { 
    this.selectedHero = hero; 
  }
  //定義一個私有的heroService屬性，
  //將此當作heroService服務的靶點( injection site)
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  //若是由service返回之數據,其等待時間ui會停止響應
  // getHeroes() {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //改為承諾-事情解決再行動
  getHeroes() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);    
  }
  ngOnInit() {
    this.getHeroes();
  }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
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
