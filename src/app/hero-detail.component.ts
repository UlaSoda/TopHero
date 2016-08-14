import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    // moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']    
})
export class HeroDetailComponent implements OnInit{
    //@Input 裝飾器(decorator),宣告hero是從別的元件輸入過來的
    @Input() 
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){}

    //原來是從父組件的屬性取得英雄數據
    //改為從ActivatedRoute服務觀察其
    //params 中取得的 id 参数
    //透過英雄服務取得指定的英雄詳細

    // 调用 forEach 方法，它会提供一个路由参数的数组。
    ngOnInit(){
        this.route.params.forEach((params: Params)=>{
                let id =+ params['id'];//藉由'+'將字串轉成數字
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            }
        );
    }

    goBack() {//上一頁
    window.history.back();
    }
    
}