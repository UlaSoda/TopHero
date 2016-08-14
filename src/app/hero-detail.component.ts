import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
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
    @Output()
    close = new EventEmitter();
    error: any;
    navigated = false;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){}

    //原來是從父組件的屬性取得英雄數據
    //改為從ActivatedRoute服務觀察其
    //params 中取得的 id 参数
    //透過英雄服務取得指定的英雄詳細

    // 调用 forEach 方法，它会提供一个路由参数的数组。
    // ngOnInit(){
    //     this.route.params.forEach((params: Params)=>{
    //             let id =+ params['id'];//藉由'+'將字串轉成數字
    //             this.heroService.getHero(id)
    //                 .then(hero => this.hero = hero);
    //         }
    //     );
    // }
    ngOnInit(){
        this.route.params.forEach((params: Params)=>
        {
            if(params['id'] != undefined){
                let id =+ params['id'];//藉由'+'將字串轉成數字
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            }
            else{//绑定到一个空的 Hero 对象
                this.navigated = false;
                this.hero = new Hero();
            }
            
        });
    }

    // goBack() {//上一頁
    // window.history.back();
    // }
    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);//通知對方，修改或新增英雄
        if (this.navigated) { 
            window.history.back(); 
        }
    }

    save() {//無論新增還是修改接用同一個方法
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

}