export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.domUser = document.querySelector('#user')
        this.data = {
            user = '',
            passw = ''
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }

    enviar(oEv) {
        oEv.preventDefault()
        this.data.user = 
        this.data.passw = 
        console.log('Evento submit')
    }
}