class main{
    constructor(){
        this.btnStart = document.querySelector('.btn-start')
        this.btnStartHidden = document.querySelector('.btn-start-hidden')
        this.header = document.querySelector('.hidden-header')       
        console.log(this.btnStart)
        this.ocultoStart = document.querySelector('.hidden-1')
        this.ocultoMain = document.querySelector('.hidden-2')
        console.log(this.ocultoMain)
        console.log(this.ocultoStart)
        this.btnSignIn = document.querySelector('.btn-sign-in')
        this.btnStart.addEventListener('click', this.mostrarEntrada.bind(this))
        this.btnSignIn.addEventListener('click', this.passCorrecto.bind(this))
    }
    mostrarEntrada(){
        this.ocultoStart.classList.toggle('hidden-1')
        console.log('has picnhado')
        //this.btnStart = document.querySelector('.btn-start-hidden')
        this.btnStart.classList.remove('btn-start')
        this.btnStart.classList.add('btn-start-hidden')
    }
    passCorrecto(){
        this.ocultoMain.classList.toggle('hidden-2')
        this.header.classList.toggle('hidden-header')
    }
}
document.addEventListener('DOMContentLoaded', () => {new main()})