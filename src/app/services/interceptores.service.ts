import { Injectable } from '@angular/core';
import {
  HttpHeaders, HttpErrorResponse, HttpClient, HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LoggerService } from '../../my-core/index';

@Injectable()
export class AuthService {
  isAuth = false;
  authToken: string;

  getAuthorizationHeader() {
    return this.authToken;
  }

  get isAutenticated() {
    return this.isAuth;
  }
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  get isAutenticated() {
    return this.auth.isAutenticated;
  }
  login(usr: string, pwd: string) {
    return new Observable(observable =>
      this.http.post('http://localhost:4321/login', { name: usr, password: pwd })
        .subscribe(
          data => {
            this.auth.isAuth = data['success'];
            this.auth.authToken = this.auth.isAuth ? data['token'] : null;
            observable.next(this.auth.isAuth);
          },
          (err: HttpErrorResponse) => {
            observable.error(err);
          }
        )
    );
  }
  logout() {
    this.auth.isAuth = false;
    this.auth.authToken = null;
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.withCredentials || !this.auth.isAutenticated) { return next.handle(req); }
    // Get the auth header from the service.
    const authHeader = this.auth.getAuthorizationHeader();
    // Clone the request to add the new header.
    const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}

export class TimingInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      })
      ;
  }
}

