/* import { Usuario } from "./usuario"; */


interface Direccion {/* es como una clase que define unas propiedades y se usan para
                        ejecutar el comando implements */
    calle: string
    poblacion: string
}


/* let user1: object = new Usuario() */

/* let user1: Usuario = new Usuario() */
class Usuario {

    /*  public name: string
     public lastName: string
     public edad: number
 
     constructor(name, lastName, edad) {
         this.name = name
         this.lastName = lastName
         this.edad = edad
     }  */
 
     constructor(public name: string , 
                 public lastName: string, 
                 private edad: number,
                 public direccion: Direccion) {} /* variable privada no te permite cambiar su valor a no ser */
                    
 
 
     saludar() {
         console.log('Hola')
         console.log(`${this.name} ${this.lastName} tienes ${this.edad} años ?` )
     }
     crecer(pEdad){
        this.edad = pEdad
     }
 
 }
 let user1: Usuario = new Usuario('Pepe', 'Perez',  34,
                        {calle: 'pez', poblacion: 'madrid'})
 
 
 user1.crecer(52)/* para acceder a propiedades privadas */
 //Usuario { name: 'Pepe', lastName: 'Perez', edad: 52 } 
 user1.saludar()

 

 
