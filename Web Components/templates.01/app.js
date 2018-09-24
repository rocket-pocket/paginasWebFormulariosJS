function main() {
    const template = document.querySelector("#sample-template");
    console.dir(template.content)
    document.body.appendChild(template.content)

    let title = 'Ejemplo del uso de HTML Templates'
    const myTemplate = document.createElement('header')
    myTemplate.innerHTML = `
        <h1>${title}</h1>
    `
}



document.addEventListener('DOMContentLoaded', main)