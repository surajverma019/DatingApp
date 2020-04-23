import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {

  }
  constructor(public authServices: AuthService, private alertify: AlertifyService,
    private router : Router) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('Login Successfully');
    }, error => {
      this.alertify.error('Failed to login');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authServices.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
