import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonasDAOService {
  protected baseUrl = 'http://localhost:43210/personas';
  constructor(private http: HttpClient) { }
  query(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  get(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  add(item: any) {
    return this.http.post(this.baseUrl, item);
  }
  change(item: any) {
    return this.http.put(this.baseUrl, item);
  }
  remove(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
