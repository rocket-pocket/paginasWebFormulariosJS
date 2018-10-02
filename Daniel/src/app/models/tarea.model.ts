export class TareaModel {
    /*nombre: string
    constructor( nombre ) {
      this.nombre = nombre
    } */
  
    constructor(
      public nombre: string,
      public isCompleted: boolean
      ) {}
  }
  
  export interface TareaIf {
    nombre: string
    isCompleted: boolean
    
  }