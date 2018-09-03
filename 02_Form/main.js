document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').addEventListener('submit',
    function (oEv){
        oEv.preventDefault()/* para que no envie */
        console.log('evento submit')
    } 
)
    document.querySelector('button').addEventListener('click', 
    function (){
        console.log('evento click')
    } 
)

})