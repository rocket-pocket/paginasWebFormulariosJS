import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logo: string
  logoAlt: string
  constructor() { }

  ngOnInit() {
    this.logo = '../src/assets/logo.svg'
    this.logoAlt = 'logotipo de angular'
  }

}
