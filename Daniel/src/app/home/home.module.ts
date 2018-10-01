import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, SaludoComponent, SaludoLocalComponent]
})
export class HomeModule { }
