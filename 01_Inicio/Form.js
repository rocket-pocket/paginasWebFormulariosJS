export class Form{
    constructor(){
        this.inputName = document.querySelector('#nombre')
        this.btnEnviar = document.querySelector('#enviar')
        this.btnBorrar = document.querySelector('#borrar')
        this.output = document.querySelector('#output')
        console.log(this)
        this.btnEnviar.addEventListener('click', this.enviar.bind(this))
        this.btnBorrar.addEventListener('click', this.borrar.bind(this))
    }

    enviar(){
        if (this.inputName.value == '') {
            this.output.innerHTML =  'no me vaciles'
        }else{
            this.inputName.value /* para recoger el nombre */
            this.output.innerHTML =  `hola ${this.inputName.value}` /* escribir mensaje */
        }
        
    }
    borrar(){
        this.inputName.value = ''
        this.output.innerHTML = ''
    }
}
/*a cualquiera de los formatos le podemos añadir NO PREOCUPARSE MUCHO POR ESTA :
(() =>{
    document.addEventListener('DOMContentLoaded', () => 
    console.log('iniciando js con función flecha'))
})()
*/


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