import { HttpEvent, HttpHandler, HttpRequest,HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import Swal from "sweetalert2";
import { AuthService } from "../services/auth.service";

@Injectable()
export class Http_Interceptor implements HttpInterceptor{
    constructor(private service: AuthService){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let token = localStorage.getItem('token');
        if(token){
            request = request.clone({
                setHeaders:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
        }
        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) =>{},(err:Response)=>{
                if(err.status === 401){
                    console.error("Unhautorized");
                    Swal.fire({
                        icon: 'info',
                        title: "Unhautorized",
                        text: 'Please login again',
                      });
                      this.service.logout();
                }
            })
        );
    }
}