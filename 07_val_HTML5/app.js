function main() {
    let validaForm = true
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')
    let formForm1 = document.querySelector('#form1')

    btnEnviar.addEventListener('click', preEnviar)
    formForm1.addEventListener('submit', enviar)
    inNombre.addEventListener('input', validaNombre)/* no se ponen () por que si no la ejecutaría yo  y no el sistema */

    function preEnviar () {
        console.log("Pulsado click")
        console.dir(formForm1)
    }

    function validaNombre() {
        if (!inNombre.checkValidity()) {
            inNombre.nextElementSibling.innerHTML = 
                '<span class="h4">El nombre es imprescindible</span>'
            validForm = false
        } else {
            inNombre.nextElementSibling.innerHTML = ''
        }     
    }


    function enviar(oEv) {
        if(!validForm) {
             oEv.preventDefault()
        }else{
            console.log("Enviando")
            validaNombre()
        }

        
    }
}

document.addEventListener('DOMContentLoaded', main)

