import { BrowserModule } from '@angular/platform-browser';/* esto viene de angular */
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SaludoComponent } from './saludo/saludo.component';
import { MainComponent } from './main/main.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';


@NgModule({/* esto es un módulo */
  declarations: [/* el componente principal */
    AppComponent, CabeceraComponent, PieComponent, LogoComponent, MenuComponent, HomeComponent, AboutComponent, ContactsComponent, SaludoComponent, MainComponent, SaludoLocalComponent, ListaTareasComponent, TareasSimpleComponent, 
  ],
  imports: [
    BrowserModule, /* lo que vamos a ipmportar   */
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* nos dice el modulo principal */
})
export class AppModule { }
