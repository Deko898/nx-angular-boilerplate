import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorFacade } from '@nx-angular-boilerplate/store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorFacade: ErrorFacade) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              this.errorFacade.throw401Error(error);
              break;
            case 404:
              this.errorFacade.throw404Error(error);
              break;
            default:
              throwError(() => new Error(error.error));
              break;
          }
        }
        return throwError(() => new Error(error));
      })
    );
  }
}
