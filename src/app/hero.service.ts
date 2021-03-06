import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpModule, Http, Headers } from '@angular/http';


import { HEROES } from './mock-heroes';
import { Hero } from './hero';//導出Hero類別

@Injectable()//可被注入
export class HeroService {//導出供別人使用
  private heroesUrl = 'app/heroes';//Url to web api

  constructor(private http: Http){}
  
  // getHeroes() 
  // {
  //     // return HEROES;
  //     //改為承諾-事情解決再行動
  //     return Promise.resolve(HEROES);
      
  // }
  // getHeroesSlowly() {
  //   return new Promise<Hero[]>(resolve =>
  //     setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  //   );
  // }
  getHero(id: number) 
  {
    //回傳指定的hero
    return this.getHeroes()
      .then(heroes => heroes.find(hero =>hero.id === id ));
    
  }

  //換成http
  getHeroes(){
    return this.http.get(this.heroesUrl)//Observable可觀察的對象
            .toPromise()
            .then(response => response.json().data as Hero[])//帶有data屬性的對象
            .catch(this.handleError);//catch server failures and pass them to an error handler

  }

  //將錯誤記錄在控制台
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);//也將錯誤回傳
  }

  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
        'Content-Type': 'application/json'});//一個請求的header 格式為json

    return this.http
             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})//stringify: json轉字串
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
  }

  // Update existing Hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;//附上想要修改的英雄

    return this.http
             .put(url, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(() => hero)
             .catch(this.handleError);
  }
  // Delte existing Hero
  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
             .delete(url, {headers: headers})
             .toPromise()
             .catch(this.handleError);
  }
  //將put post組合成一個新的方法
  //根據hero對象的狀態決定該用哪個方法
  save(hero: Hero): Promise<Hero>  {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }






}