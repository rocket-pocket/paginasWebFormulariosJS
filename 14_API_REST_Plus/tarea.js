export class Tarea {

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.isComplete = data.isComplete
        this.nodoTarea = ''
        this.crearTarea()
        this.nodoCheck = this.nodoTarea.querySelector('input')
        this.nodoBorrar = this.nodoTarea.querySelector('.borrar-tarea')
        this.nodoCheck.addEventListener('change', this.sendChecked.bind(this))
        this.nodoBorrar.addEventListener('click', this.sendBorrar.bind(this))
    }

    crearTarea() {
        this.nodoTarea = document.createElement('li')
        this.nodoTarea.innerHTML=`
            <input type="checkbox" name="is-completa" id="check-${this.id}"
                data-id="${this.id}" ${this.isComplete ? 'checked' : '' }>
            <span class="nombre-tarea ${this.isComplete ? 'hecho' : '' }">
                ${this.name}</span>
            <span id="borrar-${this.id}" data-id="${this.id}"
                class="borrar-tarea ${this.isComplete ? 'borrar-activo' : 'inactivo' }">🗑️</span>
        `
        console.dir(this.nodoTarea)
    }

    getTarea() {
        return this.nodoTarea
    }

    sendBorrar () {
        this.nodoTarea.dispatchEvent(new  Event('borrarTarea', {
            'bubbles': true}))/* es fundamental por que si no no funciona y no burbujea el evento */
    }

    sendChecked () {
        this.nodoTarea.dispatchEvent(new CustomEvent('ckeckCompleta', {
            'bubbles': true,
           detail:{key: 23} /* CustomEvent existen además de los eventos normales, es un objeto
                             que puede tener las propiedades que quieras */
        })) 
    }

}