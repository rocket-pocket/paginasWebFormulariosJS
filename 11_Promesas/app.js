function main() {

    function asincrono (callback) {
        setTimeout(() => { 
            const msj = 'Ha pasado un rato'
            callback(msj) /*-> le pasamos como funcion callback 
                                para que se ejecute al terminar*/
        },3000)
        /* set time out lo que hace nos permite 
        pasar una funcion y esa funciona se ejecuta en x segundos, 
        en el fondo es como un addeventlistener (handler) */
    }

    function pintar(msg) {
        console.log(msg)
    }

    function addDOM(msg) {
        document.querySelector('#output').innerHTML = msg
    }
    
    asincrono(pintar)
    asincrono(addDOM)
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)