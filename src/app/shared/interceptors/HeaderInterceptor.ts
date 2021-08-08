import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwtToken = localStorage.getItem("jwt");
        if(!jwtToken){
            return next.handle(httpRequest)
            .pipe(
                catchError((error: HttpErrorResponse) => {

                    let errorMessage;
           
                    if (error.error instanceof ErrorEvent) {
           
                      // client-side error
           
                      errorMessage = `Error: ${error.error.message}`;
           
                    } else {
           
                      // server-side error
           
                      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
           
                    }
                    console.log(errorMessage);
                    return throwError(errorMessage);

                })
            );
        }

        return next.handle(httpRequest.clone(
            {
                //header del token para todas las peticiones que salgan
                headers: httpRequest.headers.set('Authorization',`Bearer ${jwtToken}`)
            }
        ))
        .pipe(
            catchError((error: HttpErrorResponse) => {

                let errorMessage;
       
                if (error.error instanceof ErrorEvent) {
       
                  // client-side error
       
                  errorMessage = `Error: ${error.error.message}`;
       
                } else {
       
                  // server-side error
       
                  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       
                }
                console.log(errorMessage);
                return throwError(errorMessage);

            })
        ); 
    }

}