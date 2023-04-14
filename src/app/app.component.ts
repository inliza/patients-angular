import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'patients-angular';
  constructor(public service: AuthService,  private router: Router) { }

  ngOnInit(): void {
    if(!this.service.isUserLoggedIn()){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['home']);
    }
  }
}
