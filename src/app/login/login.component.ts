import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  user = new User();
  connexionFailed = 0;

  constructor( private authService : AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() { // onLoggedIn
    console.log(this.user);

    let isValidUser: Boolean = this.authService.signIn(this.user);

    if(isValidUser){
      this.router.navigate(['/']);
    } else {
      this.connexionFailed = 1;
    }
  }
}
