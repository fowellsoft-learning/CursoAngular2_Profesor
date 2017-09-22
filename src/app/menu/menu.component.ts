import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu = [
    { href: '', texto: 'Home' },
    { href: '/demos', texto: 'Demos' },
    { href: '/chisme/de/calcular', texto: 'Calculadora' },
    { href: '/personas', texto: 'Personas' },
    { href: '/personas/1', texto: 'Carmero' },
    { href: '/pepito/grillo', texto: 'Pepito' },
    { href: '/falsa', texto: 'Falsa' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
