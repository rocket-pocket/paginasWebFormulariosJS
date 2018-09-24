export class ContentUnoComponent{
    constructor(){
        this.msg = 'Daniel'
    }
    render(){
        const div = document.createElement('section')/* como se le pone un class?? */
        div.className = 'section-uno'
        div.innerHTML = `<article><p>hola soy ${this.msg}, mira que imágen más                          chula</p><img src="./assets/Monster.svg" alt=""></article>
                        `
        return div
    }
}