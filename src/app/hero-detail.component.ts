import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './hero';//導出Hero類別
@Component({
    // moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    
})
export class HeroDetailComponent implements OnInit {
    //@Input 裝飾器(decorator),宣告hero是從別的元件輸入過來的
    @Input() 
    hero: Hero;
}