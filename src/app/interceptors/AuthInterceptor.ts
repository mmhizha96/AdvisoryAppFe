import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('authToken');
    let authReq = req;

    if (authToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Check for successful operations and show success messages
          if (event.status >= 200 && event.status < 300) {


            const successMessage = event.body?.message;
            if (successMessage) {
              this.toastr.success(successMessage, 'Success');
            }
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side error
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          } else {
            errorMessage = `Server-side error: ${error.status} ${error.message}`;
          }
        }

        // Handle specific status codes
        if (error.status === 401) {
          // Unauthorized error, redirect to login
          this.router.navigate(['/login']);
        }
        else if(error.status === 0)
          {
            errorMessage="server unreachable please check your connect "
          }
           if(error.status === 422)
            {
              const errors = error.error.errors;
              for (const key in errors) {
                if (errors[key]) {
                  errors[key].forEach((message: string) => {
                    this.toastr.error(message, 'Error');
                  });
                }
              }
            }
else{
  this.toastr.error(errorMessage, 'Error');
  
}

        // Show error notification


        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
