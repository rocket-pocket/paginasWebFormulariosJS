import{Form} from './Form.js'
console.log(Form)
import{Interactivo} from './interactivo.js'

document.addEventListener('DOMContentLoaded', () => {
                    new Form()
                    new Interactivo()
                    })


/* es lo mismo que arriba
document.addEventListener('DOMContentLoaded', function (){
                                                new Form
                                            }
) */


/*a cualquiera de los formatos le podemos añadir NO PREOCUPARSE MUCHO POR ESTA :
(() =>{
    document.addEventListener('DOMContentLoaded', () => 
    console.log('iniciando js con función flecha'))
})()*/


/*forma anueva de escribir con ECM6
document.addEventListener('DOMContentLoaded', () => console.log('iniciando js con función flecha'))
*/


/* funcion anónima 
document.addEventListener('DOMContentLoaded', function(){
    console.log('funcion anónima')
})*/


/*funcion con nombre
function iniciar(){
    console.log('iniciado js')
}

document.addEventListener('DOMContentLoaded', iniciar)*//* --> iniciar es la funcion , se pone sin parentesis
por que si no no estamos creando una funcion que responde al evento,  se ejecutaría automaticamente */