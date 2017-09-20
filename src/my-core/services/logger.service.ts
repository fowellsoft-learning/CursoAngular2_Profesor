import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  public error(msg: string): void {
    console.error(msg);
  }

  public warn(msg: string): void {
    console.warn(msg);
  }

  public log(msg: string): void {
    console.log(msg);
  }

}
