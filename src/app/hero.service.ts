import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
@Injectable()//可被注入
export class HeroService {//導出供別人使用
  getHeroes() 
  {
      // return HEROES;
      //改為承諾-事情解決再行動
      return Promise.resolve(HEROES);
  }
}