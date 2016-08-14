import { Router, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

//將第一個路由指向HerComponent
const appRoutes: Routes =[
    { 
        path: 'heroes',
        component: HeroesComponent
    }
];