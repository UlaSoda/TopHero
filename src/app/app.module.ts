import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//表單須引用此模組
import { AppComponent } from './app.component';
import { routing } from './app.routing';//導入路由模組

import { HeroesComponent } from './heroes.component';//會使用此模組
import { HeroDetailComponent } from './hero-detail.component';//會使用此模組
import { DashboardComponent } from './dashboard.component';

import { HeroService }  from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing//才會有連結作用
  ],
  providers: [
      HeroService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
