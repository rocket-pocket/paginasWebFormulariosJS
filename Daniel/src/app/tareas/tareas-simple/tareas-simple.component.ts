import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-tareas-simple',
  templateUrl: './tareas-simple.component.html',
  styleUrls: ['./tareas-simple.component.css']
})
export class TareasSimpleComponent implements OnInit {
  aTareas: Array<string>;
  sTareas: string;
  constructor() { 
    
  }

  ngOnInit() {
    this.aTareas = []
    let savedTareas = JSON.parse(localStorage.getItem('tareas'))
    if(savedTareas){
      this.aTareas = savedTareas;
    }
    
  }

  addTareas(){
    let stringTareas: string
    if(this.sTareas){
      this.aTareas.push(this.sTareas)
      stringTareas = JSON.stringify(this.aTareas)
      localStorage.setItem('tareas', stringTareas )
      this.sTareas = ''
    }
    console.dir(this.aTareas)
    
  }
  
 
  

}