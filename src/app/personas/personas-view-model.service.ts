import { PersonasDAOService } from './personas-dao.service';
import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core/index';

@Injectable()
export class PersonasViewModelDAOService {
  private listado: Array<any> = new Array<any>();
  private elemento: any = {};
  private modo: 'list' | 'add' | 'edit' | 'delete' | 'view' = 'list';
  private idOriginal: number = null;
  private PK = 'id';

  constructor(private log: LoggerService, private dao: PersonasDAOService) { }

  get Listado() { return this.listado; }
  get Elemento() { return this.elemento; }
  get Modo() { return this.modo; }

  private load() {
    this.dao.query().subscribe(
      datos => { this.listado = datos; },
      err => { this.log.error(err.toString()); }
    );
  }

  list() {
    this.load();
    this.modo = 'list';
  }

  add() {
    this.elemento = {};
    this.modo = 'add';
  }

  edit(id: number) {
    this.dao.get(id).subscribe(
      datos => {
        this.elemento = datos;
        this.idOriginal = this.elemento[this.PK];
        this.modo = 'edit';
        },
        err => { this.log.error(err.toString()); }
    );
  }

  view(id: number) {
    this.dao.get(id).subscribe(
      datos => {
        this.elemento = datos;
        this.modo = 'view';
        },
      err => { this.log.error(err.toString()); }
    );
  }

  delete(id: number) {
    if (!window.confirm('¿Seguro?')) { return; }
    this.dao.remove(id).subscribe(
      datos => { this.list(); },
      err => { this.log.error(err.toString()); }
    );
  }

  cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }

  send() {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          datos => { this.cancel(); },
          err => { this.log.error(err.toString()); }
        );
        break;
      case 'edit':
        this.dao.change(this.elemento).subscribe(
          datos => { this.cancel(); },
          err => { this.log.error(err.toString()); }
        );
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}

@Injectable()
export class PersonasViewModelService {
  private listado: Array<any> = new Array<any>();
  private elemento: any = {};
  private modo: 'list' | 'add' | 'edit' | 'delete' | 'view' = 'list';
  private idOriginal: number = null;
  private PK = 'id';

  constructor(private log: LoggerService) { }

  get Listado() { return this.listado; }
  get Elemento() { return this.elemento; }
  get Modo() { return this.modo; }

  private load() {
    if (this.listado.length === 0) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 34 },
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 105 },
        { id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 55 },
        { id: 4, nombre: 'Capitan', apellidos: 'Tan', edad: 18 },
      ];
    }
  }

  list() {
    this.load();
    this.modo = 'list';
  }

  add() {
    this.elemento = {};
    this.modo = 'add';
  }

  edit(id: number) {
    let rslt = this.listado.find(ele => ele[this.PK] == id);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.idOriginal = this.elemento[this.PK];
      this.modo = 'edit';
    } else {
      this.log.error('Elemento no encontrado.');
    }
  }

  view(id: number) {
    let rslt = this.listado.find(ele => ele[this.PK] == id);
    if (rslt) {
      this.elemento = Object.assign({}, rslt);
      this.modo = 'view';
    } else {
      this.log.error('Elemento no encontrado.');
    }
  }

  delete(id: number) {
    if (!window.confirm('¿Seguro?')) { return; }
    let ind = this.listado.findIndex(ele => ele[this.PK] == id);
    if (ind > -1) {
      this.listado.splice(ind, 1);
      this.list();
    } else {
      this.log.error('Elemento no encontrado.');
    }
  }

  cancel() {
    this.elemento = {};
    this.idOriginal = null;
    this.list();
  }

  send() {
    switch (this.modo) {
      case 'add':
        this.listado.push(this.elemento);
        this.cancel();
        break;
      case 'edit':
        const ind = this.listado.findIndex(ele => ele[this.PK] == this.idOriginal);
        if (ind > -1) {
          this.listado[ind] = this.elemento;
          this.cancel();
        } else {
          this.log.error('Elemento no encontrado.');
        }
        break;
      case 'view':
        this.cancel();
        break;
    }
  }
}

