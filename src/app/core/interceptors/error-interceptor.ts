import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const tester=inject(ToastrService)
  // return next(req).pipe(
  //   catchError((err:HttpErrorResponse)=>{


  //     tester.error(err.error.message ,'social')
  //     return throwError(()=>err)
  //   })
  // )
  
  return next(req).pipe(
    catchError((err)=>{

        tester.error(err.error.message,'social')
      return throwError(()=>err)
    })
  )

};
