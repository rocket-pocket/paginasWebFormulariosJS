class App{
    constructor(header){
        this.header = header
    }
    render(){
        this.header = document.createElement('header')
        this.header.innerHTML= '<h1>este es e header</h1>'
        
        let final = document.body.appendChild(this.header).render()
        return this.header
    }
}

document.addEventListener('DOMContentLoaded', () => {new App()})