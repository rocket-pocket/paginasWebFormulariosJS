export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        /* esto si que sta 
        guardado en una variable por que lo vamos a usar mas veces */
        /* this.domUser = document.querySelector('#nombre') */
        this.data = {
            user : {name: '', surname: ''},
            email: '',
            passw : '',
            coments: '',
            opciones: {
                condiciones: '',
                turno: '',
                curso: ''
            }
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }
    enviar(oEv) {
        oEv.preventDefault()/* siempre que lo enviamos por Ajax hay que poner prevent 
        default para controlar el envio y que no recarge */
        this.data.user.name = document.querySelector('#nombre').value
        this.data.user.surname = document.querySelector('#apellido')
        this.data.email = document.querySelector('#correo')
        this.data.passw = document.querySelector('#passw').value
        this.data.coments = document.querySelector('#comentarios').value

        this.data.opciones.condiciones = document.querySelector('#condiciones')
        this.data.opciones.turno = this.verTurno()
        this.data.opciones.curso = document.querySelector('#curso')
        // Dos formas de recoger los datos
       /*  this.data.user.name = this.domUser.value
        this.data.passw = document.querySelector('#passw').value
        console.log(this.data) */
        console.log(this.data)
        //console.dir(this.data)
    }

    verTurno(){
        let aTurnos = document.querySelectorAll('[name= "turno"]')/* con los corchetes seleccionamos el atributo name */
       // console.log(aTurnos)
       // for (let i = 0; i < aTurnos.length; i++) {
            //const item = aTurnos[i];/* item seria el iterador si nole pusiesemos la const seria aTurnos */
           // if(item.checked){
               // return item.value
          //  }
            
       // }

       /* foreach es un metodo que nos permite iterar sobre una función, lo hemos cambiado de como lo hacemos normalmente por que no funcionaba*/
       let r = ''
       aTurnos.forEach(
        item => {
            if (item.checked) {/* comprueba si el elemnto esta checked */
                r = item.value/* guarda el numero */
            }
        })
        return r/* devuelve */
    }
}

