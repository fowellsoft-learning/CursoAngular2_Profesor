import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../my-core/index';
import { MisDatosService } from '../services/mis-datos.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  mensaje: string = '(vacio)';
  listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'barcelona' },
    { id: 3, nombre: 'SEVILLA' },
    { id: 4, nombre: 'Valencia' },
  ];
  idProvincia: number = this.listado[0].id;
  visible: boolean = true;

  constructor(private srv: MisDatosService, private log: LoggerService) { }

  ngOnInit() {
  }

  public get VM() { return this.srv; }

  public saluda() {
    this.mensaje = `Hola ${this.srv.Nombre}`;
  }
  public despide() {
    this.mensaje = `Adios ${this.VM.Nombre}`;
  }
  public di(algo: string) {
    this.mensaje = `Dice ${algo}`;
  }

  public oculta() { this.visible = !this.visible; }

  public add(provincia: string) {
    this.listado.push({ id: this.listado.length + 1, nombre: provincia });
    this.idProvincia = this.listado.length;
  }

  public calcula(a: number, b: number) { return a + b; }

  idioma = 'en-US';
  resultados: any[] = [];
  ponResultado(origen: string, valor: any) {
    this.resultados.push({ pos: this.resultados.length + 1, origen: origen, valor: valor });
  }

  fontSizePx = 22;
  
}
