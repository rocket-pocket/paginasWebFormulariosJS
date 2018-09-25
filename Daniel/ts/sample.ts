function main(){
  let x : number = 23 
  /* tambien se pueden declarar e inicializarla por separado */ 
  let y : number
  y = 52
  let name : string
  name = 'pepe'
  let isCasado : any /* y le daremos el tipo que queramos */
  isCasado = 'hola'
  let verdadero : boolean
  verdadero = false
  let objeto : object 
  objeto = {
      "pepe" : 22
  }
  let array : Array<any>
  array = ['pepe' , 'maria', 'jose']
  console.log(array[1])
  console.log(isCasado)
  console.log(x)
}

main()





/* le pasamos los tipos y ya es typescript */