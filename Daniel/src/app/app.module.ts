import { BrowserModule } from '@angular/platform-browser';/* esto viene de angular */
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { TareasModule } from './tareas/tareas.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AboutComponent } from './about/about.component';




@NgModule({/* esto es un módulo */
  declarations: [/* el componente principal */
    AppComponent, AboutComponent, 
  ],
  imports: [
    BrowserModule, /* lo que vamos a ipmportar   */
    FormsModule,
    CoreModule,
    ContactsModule,
    TareasModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatProgressSpinnerModule, 
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent] /* nos dice el modulo principal */
})
export class AppModule { }
