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

  getLista(){
    return new Promise((resolve, reject) => {
    this.http.get(this.url).toPromise()
    .then((response: any) => {
      console.log(response)
      this.aContactos = response.results
      resolve(this.aContactos)
    })
  })
} 
}
