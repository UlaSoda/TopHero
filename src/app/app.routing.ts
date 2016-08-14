import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
//將第一個路由指向HerComponent
const appRoutes: Routes =[
    {
        path: '',//初始路由位置
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { 
        path: 'heroes',
        component: HeroesComponent
    }
];
//從appRoutes匯入路由設定
export const routing = RouterModule.forRoot(appRoutes);