import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: LoginModel;
 
  constructor(
    public service: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
      this.login = new LoginModel();

  }

  public signin(){
    this.service.login(this.login).subscribe((data:any)=>{
      localStorage.setItem('token', data.data);
      this.router.navigate(['home']);
    }, err=> {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error.message
      });
    })
  }

}
