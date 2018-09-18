import { FetchService } from "./fetch-service.js";

export class ListaTareas {
    constructor() {
        this.nodoListaTareas = document.querySelector('#lista')
        this.uRL = 'http://localhost:3000/tareas'//1 º elemento clave
        this.aTareas = []// 1º elemento clave , modelo de datos , la clave es que estos dos esten siempre sincronizados
        this.fetchService =  new FetchService ()
        this.getTareas()//este se encarga de la sincronización
    }

    getTareas() {
            this.fetchService.send(this.uRL, {method: 'GET' }) //hace un fetch de tipo GET para sincronizar
            .then( data => {
                this.aTareas = data//cuando termina sincriniza los datos
                this.renderLista()//a continuación hago un render
            },
            error => {console.dir(error)}//control de errores
            )
    }    
    renderLista() {//
        this.nodoListaTareas.innerHTML = ''
        let html = ''
        this.aTareas.forEach(
            item =>  html += this.renderTarea(item) //bucle sobre 
            //el array que acabamos de actualizar y nos pinte lo que tiene que pintar
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosChecks = document.querySelectorAll('[name="isCompleta"]')//hemos cambiado al id del json
        this.aNodosBorrar = document.querySelectorAll('.borrarTarea')
        this.aNodosChecks.forEach(
            item => item.addEventListener('change', this.checkTarea.bind(this))
        )
        this.aNodosBorrar.forEach(
            item => item.addEventListener('click', this.borrarTarea.bind(this))
        )
    }


    renderTarea(data) {//data-id -> variable o atributo en html
        let htmlView =   `
        <li>
        <input type="checkbox" name="isCompleta" id="check-${data.id}"
           data-id="${data.id}" ${data.isComplete ? 'checked' : '' }>
        <span class="nombreTarea">${data.name}</span>
        <span id="btnBorrar-${data.id}" class="borrarTarea">🗑️</span>
        </li>
    `
        return htmlView
    }

    checkTarea(oE){
        console.log(oE.target.dataset.id)//dataset. espara acceder al data.id
    }

    borrarTarea(oEv) {
        console.log(oEv.target.dataset.id)
        // TODO Borar en Servicio Web
        let url = this.uRL + '/' + oEv.target.dataset.id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => {console.log(data)
                    this.getTareas()
                },
                error => console.log(error)
            )
    }
}