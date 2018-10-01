import { BrowserModule } from '@angular/platform-browser';/* esto viene de angular */
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasplusComponent } from './tareasplus/tareasplus.component';
import { CoreModule } from './core/core.module';


@NgModule({/* esto es un módulo */
  declarations: [/* el componente principal */
    AppComponent,HomeComponent, AboutComponent, ContactsComponent, SaludoComponent, SaludoLocalComponent, ListaTareasComponent, TareasSimpleComponent, TareasplusComponent, 
  ],
  imports: [
    BrowserModule, /* lo que vamos a ipmportar   */
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* nos dice el modulo principal */
})
export class AppModule { }
