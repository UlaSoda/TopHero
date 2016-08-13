import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//表單須引用此模組
import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail.component';//會使用此模組
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent //會使用此模組
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
