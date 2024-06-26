import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';
import { HeaderComponent } from './header/header.component';
import { SliderlavoriComponent } from './sliderlavori/sliderlavori.component';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ValoriComponent } from './valori/valori.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    PrevDirective,
    NextDirective,
    HeaderComponent,
    SliderlavoriComponent,
    AboutComponent,
    ContattiComponent,
    ValoriComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
