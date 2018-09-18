/**
 * Servicio AJAX
 */
export class FetchService {
    constructor() {//LE PASAMOS LOS PARAMTROS AL conect() PARA NO TENER QUE INSTANCIAR UNA 
        //Y OTRA VEZ NEW FETCH
        this.oDatos = {}
    }
    send(url, config) {
        this.url = url
        this.config = config
        return new Promise( (resolve, reject) => {
            fetch(this.url, this.config)
            .then(
                (response) => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        reject( 
                            { status : response.status,
                            statusText: response.statusText}
                        )
                    }
                }
            ).then(
                (data) => { resolve( data )}
            )
        }
        )        
    }
}
