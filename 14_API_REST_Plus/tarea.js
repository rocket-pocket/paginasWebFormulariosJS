export class Tarea {

    constructor(data) {
        this.name = data.name
        this.isComplete = data.isComplete
        this.nodoTarea = ''
        this.crearTarea()
        //this.nodoCheck = document.querySelector('#isCompleta')
        //this.nodoBorrar = document.querySelector('#btnBorrar')/* tenemos un problema por que no llega a recoger los elementos del DOM
        //, el problema reside en lista tareas , en la instanciación del objeto tareas y la in vocación d renderTarea */
        this.nodoCheck = this.nodoTarea.querySelector('#isCompleta')
        this.nodoBorrar = this.nodoTarea.querySelector('#btnBorrar')

        console.log(this.nodoCheck, this.nodoBorrar)
    }
    crearTarea(){/*  */
        this.nodoTarea = document.createElement('li')
        this.nodoTarea.innerHTML = `
        <li>
        <input type="checkbox" name="isCompleta" id="isCompleta" ${this.isComplete ? 'checked': ''}>
        <span class="nombreTarea">${this.name}</span>
        <span id="btnBorrar"class="borrarTarea">🗑️</span>        
        </li>`
        console.dir(this.nodoTarea)
    }
    renderTarea(){
        return this.nodoTarea
    }
}