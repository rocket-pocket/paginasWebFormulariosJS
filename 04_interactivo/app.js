class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('#formFinal'),
            cbMas : document.querySelector('#mas'),
            slGenero : document.querySelector('#genero'),
            slAutroes : document.querySelector('#autor')
        }
        this.aGeneros = [
            {value: '', label: ''},/* añadimos esta linea vacia para que no aparezca como primera opcion */
            {value:"P", label: 'Policiaco'},
            {value: "SF", label: 'Ciencia Ficción'},
            {value: "F", label: 'Fantasía'}
        ]
    
    this.generosFirst = true/* variable de estado para  qwue changegeneros se dispare la primera vez */
    this.defineHandlers()
    this.crearSelect()
    }

    defineHandlers () {
        this.dom.cbMas.addEventListener('change',
                this.setFormFinal.bind(this))
                this.dom.slGenero.addEventListener('change', this.changeGenero.bind(this))
    }

    setFormFinal () {
        this.dom.formFinal.classList.toggle('hide')
    }
    crearSelect(){/* pinta los datos de un array en la vista */
        let html = ''
        this.aGeneros.forEach((item) =>{/* hacemos un bucle para el array de abjetos que hemos creado */
            html += `<option value="${item.value}">${item.label}</option>`
        })
        this.dom.slGenero.innerHTML =  html
        console.log(this.dom)
    }
    changeGenero(){/* se ejecuta cada vez que hay un cambio en el array para limpiar y que no quede espacio en blanco */
        /* console.log('cambio') */
        this.aGeneros.shift
        if(this.generosFirst){
            this.aGeneros.shift()
            this.crearSelect()
            this.generosFirst = false
        }
        let i = this.dom.slGenero.selectIndex
        console.dir( i )
        console.dir( this.dom.slGenero[i])
        console.log(this.aGeneros[i].autores)
        
        this.dom.slAutroes.disabled = 'false'
    }
}
document.addEventListener('DOMContentLoaded', () => {new App()})

