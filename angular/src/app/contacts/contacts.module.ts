import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoComponent } from './contacto/contacto.component';
import {  HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule
    
  ],
  declarations: [
    ContactsComponent,
    ListaContactosComponent,
    ContactoComponent
  ],
  entryComponents: [
    ContactsComponent
  ]
})
export class ContactsModule { }
