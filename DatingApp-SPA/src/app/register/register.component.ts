import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancleRegister = new EventEmitter();
  model: any = {}
  constructor(private authService: AuthService, private alertify: AlertifyService) {

  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Register Successfully');
    }, error => {
      this.alertify.error(error);
    })
    console.log(this.model);
  }

  cancel() {
    this.cancleRegister.emit(false);
    console.log('Cancelled');
  }

}
