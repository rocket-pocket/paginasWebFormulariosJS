import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'cas-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {

  titulo: string
  rutaGoogle: string
  newTarea: TareaModel 

  constructor() {  
  }

  ngOnInit() {
    this.titulo = 'Lista plusssss'
    this.rutaGoogle = 'https://www.google.es'
    this.newTarea = new TareaModel('', false )
  }

  addTarea () {
   
    console.log(this.newTarea)
  }

  
}
