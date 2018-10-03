import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';






import { TareasRoutingModule } from './tareas-routing.module';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusComponent } from './tareasplus/tareasplus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ],
  declarations: [
    TareasComponent,
    TareasSimpleComponent,
    TareasPlusComponent
  ],
  entryComponents: [TareasComponent]
})
export class TareasModule { }
