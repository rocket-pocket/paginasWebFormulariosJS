import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasplusComponent } from './tareasplus/tareasplus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule
  ],
  declarations: [TareasComponent, TareasSimpleComponent, TareasplusComponent],
  entryComponents: [TareasComponent]
})
export class TareasModule { }
