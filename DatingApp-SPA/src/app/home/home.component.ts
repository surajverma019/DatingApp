import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerModel = false;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  registerToggle() {
    //this.registerModel = !this.registerModel;
    this.registerModel = true;
  }

  cancleRegisterMode(registerModel : boolean){
    this.registerModel = registerModel;
  }

}
