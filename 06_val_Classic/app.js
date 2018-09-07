function main() {
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    // focus / blur ->ES CUANDO SE DEJA DE HACER FOCO
    let btnEnviar = document.querySelector('#enviar')

    inNombre.addEventListener('blur', validaTexto)
    inNombre.addEventListener('input', validaTexto)
    inApellido.addEventListener('blur', validaTexto)
    inApellido.addEventListener('input', validaTexto)

    function validaTexto(oEv) {
        //this.nextElementSibling.innerHTML = ''/* primero lo limpio y luego no tengo que poner el else */
        if(!this.value) {
            console.log(`${this.id}Texto incorrecto`)
            this.nextElementSibling.innerHTML = 'nombre incorrecto'
        }else{
            this.nextElementSibling.innerHTML = ''
            validaFormulario()
        }
        function validaFormulario(){
            if (inNombre.value && inApellido.value) {
                btnEnviar.disabled = false
            }
        }
        
    }

}

document.addEventListener('DOMContentLoaded', main)

/* cuando no hay objetos this es el manejador de eventos
en este caso si no es inNombre será inApellido */
