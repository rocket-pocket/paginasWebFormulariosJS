class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('#formFinal'),
            cbMas : document.querySelector('#mas'),
            slGenero : document.querySelector('#genero'),
            slAutores : document.querySelector('#autor'),
            btnEnviar : document.querySelector('#btnEnviar')
        }
        const GENEROS = [
            {value:'', label: ''},
            {value:'P', label: 'Policiaco', autores : [
                {value:'Christie, Agata', label: 'Agata Christie'},
                {value:'Simenon, Geroges', label: 'Geroges Simenon'},
                {value:'Doyle, Arthur C.', label: 'Arthur C. Doyle'},
            ]},
            {value:'SF', label: 'Ciencia Ficcion', autores: [
                {value:'Asimov, Isaac', label: 'Isaac Asimov'},
                {value:'Gibson, William', label: 'William Gibson'},
                {value:'Bradbury, Ray', label: 'Ray Bradbury'},
            ]},
            {value:'F', label: 'Fantasia', autores: [
                {value:'Tolkien, JRR', label: 'JRR Tolkien'},
                {value:'Stoker, Bran', label: 'Bran Stoker'},
                {value:'Shelly, Mary', label: 'Mary Shelley'},
            ]}
        ]

        this.aGeneros = GENEROS
        this.generosFirst = true
        this.defineHandlers()
        this.crearSelect(this.aGeneros, this.dom.slGenero)
    }

    defineHandlers () {
        this.dom.cbMas.addEventListener('change',
                this.setFormFinal.bind(this))
        this.dom.slGenero.addEventListener('change',
                this.changeGenero.bind(this))
        this.dom.formFinal.addEventListener('submit',
                this.enviar.bind(this))
    }

    setFormFinal () {
        this.dom.formFinal.classList.toggle('hide')
    }

    crearSelect(aDatos, target, selected) {
        let html = ''
        aDatos.forEach( (item, i) => {
            if( i === selected) {
                html += `<option value="${item.value}" selected>
                ${item.label}</option>`
            } else {
                html += `<option value="${item.value}">
                        ${item.label}</option>`  
            }
        })
        target.innerHTML =  html
    }

    changeGenero() {
        let i = this.dom.slGenero.selectedIndex
        console.log( 'Seleccionado', i )
        if (this.generosFirst) {
            this.aGeneros.shift()
            this.crearSelect(this.aGeneros, this.dom.slGenero, i-1)
            this.generosFirst = false
            this.dom.btnEnviar.disabled = false
        }
        i = this.dom.slGenero.selectedIndex
        console.dir( i )
        console.dir( this.dom.slGenero[i])
        console.log(this.aGeneros[i].autores)
        this.dom.slAutores.disabled = false
        this.crearSelect(this.aGeneros[i].autores, this.dom.slAutores)
    }

    enviar(oEv) {
        oEv.preventDefault()
        const data = '?genero=' +
        this.dom.slGenero[this.dom.slGenero.selectedIndex].value
        + '&autor=' +
        this.dom.slAutores[this.dom.slAutores.selectedIndex].value
        console.log(data)
        //console.dir(this.dom.slAutores[this.dom.slAutores.selectedIndex])
        //console.dir(this.dom.slGenero[this.dom.slGenero.selectedIndex])
        
        
        console.log()
    }
}

document.addEventListener('DOMContentLoaded', () => {new App()})

