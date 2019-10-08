import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).catch((errorResponse: HttpErrorResponse) => {
      const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
      if (error.status === 401 || error.status === 400) {
        this.router.navigate(['auth/login']);
      }
      return Observable.throw(errorResponse);
    });


  }
}




