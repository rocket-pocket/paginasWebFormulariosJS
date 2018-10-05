import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cas-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  /* encapsulation: ViewEncapsulation.ShadowDom */
})
export class ArticuloComponent implements OnInit {
 @Input()autor: string
  @Input()titulo: string
  /* @Input()contenido: string */
  

  constructor() { }

  ngOnInit() {
  }

}
