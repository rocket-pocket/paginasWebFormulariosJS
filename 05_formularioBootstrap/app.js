function main() {
    let input = document.querySelector('#nombre')

    input.addEventListener('change', ()=> {
        console.log("Evento Change:", input.value)/* para mostrar por consola el valor que recoge input */
    })
    input.addEventListener('input', ()=> {
        console.log("Evento Input:", input.value)
    })
}

document.addEventListener('DOMContentLoaded', main)

