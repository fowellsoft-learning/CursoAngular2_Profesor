import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/interceptores.service';
import { Router } from '@angular/router';

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
    { href: '/admin', texto: 'Administrar'},
    { href: '/setting', texto: 'Configurar' },
    { href: '/admin/users', texto: 'Users' },
  ];

  btnLogin = 'LogIn';
  
  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit() {
    this.btnLogin = this.auth.isAutenticated ? 'LogOut' : 'LogIn';
  }

  login(usr: string, pwd: string) {
    if (this.auth.isAutenticated) {
      this.auth.logout();
      this.btnLogin = 'LogIn';
    } else {
      this.auth.login(usr, pwd).subscribe(
        data => this.btnLogin = data ? 'LogOut' : 'LogIn',
        error => { }
      );
    }
  }

}
