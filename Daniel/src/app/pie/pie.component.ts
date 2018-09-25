import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit { /*implements es el interfaz y necesita  ngOnInit() {
} si, o, si */

  empresa: string
  lugar: string

  constructor() { }

  ngOnInit() {/* si ya esta hecho el DOM lo pones aqui */
    this.empresa = 'CAS'
    this.lugar = 'Getáfe'
  }

}
