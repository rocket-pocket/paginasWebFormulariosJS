import { PageController } from '../page.controller.js';

class About extends PageController{
    constructor() {
    super('about', 'acerca de') 
    }
}

document.addEventListener('DOMContentLoaded', () => { new About()})




