class Persona{
   /* public */ name: string
    constructor(name: string){
        this.name = name
    }
}

class PersonaMejor{
     
     constructor(public name: string){
         
     }
 }

let persona = new Persona("Pepe")
console.log(this.persona.name)

/* ejemplo para la injección de dependencias */