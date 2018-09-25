import { BrowserModule } from '@angular/platform-browser';/* esto viene de angular */
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({/* esto es un módulo */
  declarations: [/* el componente principal */
    AppComponent, CabeceraComponent, PieComponent, LogoComponent
  ],
  imports: [
    BrowserModule, /* lo que vamos a ipmportar   */
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* nos dice el modulo principal */
})
export class AppModule { }
