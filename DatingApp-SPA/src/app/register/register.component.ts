import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancleRegister = new EventEmitter();
  model: any = {}
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Register Successfully');
    }, error => {
      console.log(error);
    })
    console.log(this.model);
  }

  cancel() {
    this.cancleRegister.emit(false);
    console.log('Cancelled');
  }

}
