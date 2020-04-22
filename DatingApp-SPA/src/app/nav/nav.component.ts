import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {

  }
  constructor(public authServices: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('Login Successfully');
    }, error => {
      this.alertify.error('Failed to login');
    });
  }

  loggedIn() {
    return this.authServices.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
