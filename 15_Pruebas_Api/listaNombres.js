import { FetchService } from "./fetch-service";


    class ListaNombres{
    constructor(){
        this.url = 'http://localhost:3000/nombres'
        this.aNombres= []
        this.nodoListaTareas = document.querySelector('#lista')
        console.log(this.nodoListaTareas)
        this.getTareas()

    }
    getTareas(){
        new FetchService({url:this.url, method: 'GET'})
        .get()
        .then(data => {
            this.aNombres = data
            this.renderLista()
        }), 
        (error) => {console.dir(error)}
    }

    renderLista(){
        this.aNombres.forEach(
            item => {
                this.nodoListaTareas.appendChild(new Tarea)
            }
        )
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    new ListaNombres()
} )