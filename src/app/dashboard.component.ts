import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    ngOnInit(){//抓取前五名HERO
        this.heroService.getHeroesSlowly()
            .then(heroes => this.heroes = heroes.slice(0,5));    
    }

    gotoDetail(hero: Hero){
        let link = ['/detail',hero.id];//一個包含連結參數和id的陣列
        this.router.navigate(link);//傳入導航方法
    }
 }