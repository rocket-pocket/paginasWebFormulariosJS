import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ContactoIf } from '../models/contacto.model';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  aContactos: Array<ContactoIf>
  url: string;
  constructor(public http: HttpClient) { 
    this.aContactos = []
    this.url = environment.api_users

  }

/*   getLista(){
    return new Promise((resolve, reject) => {
    this.http.get(this.url).toPromise()
    .then((response: any) => {
      console.log(response)
      this.aContactos = response.results
      resolve(this.aContactos)
    }, (error) => {console.log(error)})
  })
} */ 
//es una manera mas facil de ECMA 2017 (no hay problema para utullizarla en angular por que 
//webpack lo compila a ecma 5)
async getListaAA(): Promise<Array<ContactoIf>>{
  let response:any = await this.http.get(this.url).toPromise()
  return response.results
}
}
