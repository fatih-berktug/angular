import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //baslangıc commment burada veriliyor
  bootstrap: [AppComponent]
})
export class AppModule {



}
