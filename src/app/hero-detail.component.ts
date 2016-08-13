import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';//導出Hero類別
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    
    hero: Hero;
}