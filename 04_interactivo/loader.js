class Loader{
    constructor(){
        this.verMas = document.querySelector('#mas')
        this.parteOculta = document.querySelector('.hide')

        this.verMas.addEventListener('click', this.mostrarForm.bind(this))
    }
    mostrarForm(){
        this.parteOculta.classList.toggle('hide')
    }
}

document.addEventListener('DOMContentLoaded', () =>{new Loader()})