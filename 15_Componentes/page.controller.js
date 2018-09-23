import { APPTITLE } from './page/config.js';
import { HeadComponent }  from './componentes/head.component.js'
import { HeaderComponent } from './componentes/header.component.js';
import { MenuComponent } from './componentes/menu.component.js';
import { FooterComponent } from './componentes/footer.component.js';
import { ContentUnoComponent } from './componentes/content.uno.component.js';


export class PageController{
    constructor(page, title){
        this.appTitle = APPTITLE
        this.pageTitle = (page) ? this.appTitle + ' | ' + page: this.appTitle
        this.title = title || this.appTitle
        this.contentFooter = {
                autor: 'Daniel Verdú',
                empresa: 'Dvdrones',
                lugar: 'Madrid - 2018'
        }        
        //document.head.innerHTML += new HeadComponent('Componentes').render()
        this.head = new HeadComponent(this.pageTitle).render()
        this.header = new HeaderComponent(this.title).render()
        this.menu = new MenuComponent().render()
        this.main = document.createElement('main')
        this.footer = new FooterComponent(this.contentFooter).render()
        this.contentUno = new ContentUnoComponent().render()
                

        document.head.insertAdjacentHTML('afterbegin', this.head)    
        document.body.appendChild(this.header)
        document.body.appendChild(this.menu)
        document.body.appendChild(this.main)
        document.body.appendChild(this.footer)
        document.body.appendChild(this.contentUno)
    }
}