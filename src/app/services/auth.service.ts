import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'spicywhim', password: '123', roles: ['USER'] },
  ];

  public loggedUser!: string;
  public isLoggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router) {}

  public logOut(): void {
    this.isLoggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;

    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
    this.router.navigate(['login']);
  }

  public signIn(user: User): Boolean {
    let validUser: Boolean = false;

    this.users.forEach((currentUser) => {
      if (
        user.username == currentUser.username &&
        user.password == currentUser.password
      ) {
        validUser = true;
        this.loggedUser = currentUser.username;
        this.isLoggedIn = true;
        this.roles = currentUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
      }
    });

    return validUser;
  }

  public isAdmin(): Boolean {
    if (!this.roles) {
      return false;
    }

    return this.roles.indexOf('ADMIN') > -1;
  }
}
