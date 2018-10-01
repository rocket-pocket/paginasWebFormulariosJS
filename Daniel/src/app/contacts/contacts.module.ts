import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
