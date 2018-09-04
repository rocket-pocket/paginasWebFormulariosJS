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
            coments : '',
            aficiones: []
            
            /* {
                musica: '',
                lectura: '',
                deporte: ''
            } */
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
        this.data.opciones.curse = this.verCurso()
        this.data.aficiones = this.verAficiones()
        console.log(this.data)
        //console.dir(this.domForm)
        console.dir(document.querySelector('#curso'))
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
    verCurso(){
        const curso = document.querySelector('#curso')
        console.dir(curso.selectedIndex)
        const oDato = {
            value: curso[curso.selectedIndex].value,
            text :  curso[curso.selectedIndex].textContent
        }
        return oDato
    }
    verAficiones(){
        let aDatos = []
        let aficiones = document.querySelectorAll('.aficiones')
        aficiones.forEach(item => {
            if (item.checked) {
                aDatos.push(item.id)
            }
        })
        return aDatos
    }
}