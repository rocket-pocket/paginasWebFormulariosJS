export class Interactivo{
    constructor(){
        this.inputName = document.querySelector('#nombre_i')
        this.output = document.querySelector('#output_i')

        this.inputName.addEventListener('input', this.escribir.bind(this)) /* evento input */


    }
    escribir(){
        this.inputName.value
        if (this.inputName.value){
            this.output.innerHTML = `hola ${this.inputName.value}`
        }else{
            this.output.innerHTML = ''
        }
    }
}