import { Injectable } from '@angular/core';
import { LoggerService } from '../../my-core/index';

@Injectable()
export class MisDatosService {
  private nombre: string = 'Mundo';

  constructor(private log: LoggerService) { }

  public get Nombre(): string {
    return this.nombre;
  }
  public set Nombre(valor: string) {
    if (this.nombre !== valor) {
      this.log.warn(`Cambio ${this.nombre} por ${valor}`);
      this.nombre = valor;
    }
  }
  public ponMayusculas(): void {
    if (this.nombre) {
      this.nombre = this.nombre.toLocaleUpperCase();
    }
  }

}
