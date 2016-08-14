import { Router, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

//將第一個路由指向HerComponent
const appRoutes: Routes =[
    { 
        path: 'heroes',
        component: HeroesComponent
    }
];
//從appRoutes匯入路由設定
export const routing = RouterModule.forRoot(appRoutes);