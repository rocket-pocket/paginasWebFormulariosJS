export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.data = {
            opciones : {
                conditions: '',
                turn: '',
                curse: ''
            },
            user : { 
                name: '', 
                f_name: ''},
            email: '',
            passw : '',
            coments : ''
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }

    enviar(oEv) {
        oEv.preventDefault()
        this.data.user.name = document.querySelector('#nombre').value
        //this.data.user.name = this.domForm.elements.nombre.value
        this.data.user.f_name = document.querySelector('#apellido').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.coments = document.querySelector('#comentarios').value
        this.data.opciones.conditions = document.querySelector('#condiciones').checked
        this.data.opciones.turn = this.verTurno()
        this.data.opciones.curse 
        console.log(this.data)
        //console.dir(this.domForm)
        console.dir()
    }

    verTurno() {
        // let aTurnos = document.getElementsByName('turno')
        let aTurnos = document.querySelectorAll('[name="turno"]')
        /* for (let i = 0; i < aTurnos.length; i++) {
            const item = aTurnos[i];
            if (item.checked) {
                return item.value
            }
        } */
        
       

        let r = ''

        let aDatos = []
        aTurnos.forEach(
            item => aDatos.push(item)
        )
        aDatos.some(    
            (item, i) => {
                console.log("Vuelta", i+1)
                if (item.checked) {
                    r = item.value
                    return true
                }
            })
        return r
    }
}