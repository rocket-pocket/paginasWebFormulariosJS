export class Usuario{
    name : string      /* hay que declarar las prpiedades fuera del constructor y puedo
                aprovechar para declarar el tipo*/
    profesion: number
    lastName : 'string'
    edad: number
    constructor(name: string){/* hay que declaralo en el parametro */
        this.name = name
        name = 'Daniel'
        
        
    }

    saludar(){
        console.log(user1)
        console.log(this)
    }
}
let user1: Usuario = new Usuario(name)
user1.name = 'Jose'
user1.profesion = 25
user1.saludar()