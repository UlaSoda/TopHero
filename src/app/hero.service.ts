import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';//導出Hero類別

@Injectable()//可被注入
export class HeroService {//導出供別人使用
  getHeroes() 
  {
      // return HEROES;
      //改為承諾-事情解決再行動
      return Promise.resolve(HEROES);
      
  }
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }
  getHero(id: number) 
  {
    //回傳指定的hero
    return this.getHeroes()
      .then(heroes => heroes.find(hero =>hero.id === id ));
      
  }
}