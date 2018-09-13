function main() {
/* una apromesa es un objeto qe tiene un valor en el futuro */
    function promesas() {
        return new Promise(
            (resolve) => {
                setTimeout (() => resolve('Ha pasado un rato'), 3000)
            }
        )
    }

    function promesas2(){
        return new Promise( (resolve,reject) => {
            /* cuando todo a ido mal ejecutas resolve
                cuando ha ido mal ejecutas reject
                resolve & reject son parametros del sistema al
                instanciar el objecto new Promise */
            setTimeout(()=>{}, 3000)
            /* es una manera artificial de hacer una promesa
            normalmente no se pone */
            let comida = 'comida Preparada'
            /* ya esta la cimda preparada */
            if(comida){
                resolve(comida)/*-> ahora aviso al señor*/
            }else{
                reject('error')
            }
            
        })                    
    }

    promesas2().then(//puedo pner dos funciones , then es un catch and                                                      throw
        /*se le pasan dos parámetros: response y error que automaticamente recogerán el resolve y el reject en funcion del orden*/
        (response) => {console.log(response)}, /* -> una cuando resolve */ 
        (error) => {console.log(error)} //-> y otra cuando reject
    )

    /* function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    .then(pintar */

    promesas().then(
        (response) => { console.log(response)}
    )

    console.log('Ultima linea')


}

document.addEventListener('DOMContentLoaded', main)

/* en una funcion arrow si solo hay un parametro puedo quitar los parentesis
y si solo hay una línea no le pongo las llaves */