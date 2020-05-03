import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const access_token = localStorage.getItem('access_token');

    if (access_token) {

      const cloned = request.clone({ setHeaders: { Authorization: "Bearer " + access_token }});

      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
