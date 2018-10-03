import { Component, OnInit, Input } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';

@Component({
  selector: 'cas-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() contacto: ContactoIf
  fullname: string;
  constructor() { }

  ngOnInit() {
    this.fullname = `${this.contacto.name.title}. ${this.contacto.name.first} ${this.contacto.name.last}`
  }

}
