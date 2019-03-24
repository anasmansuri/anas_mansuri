import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  rForm:FormGroup;
  post:any;
  email:string='';
  password:string='';

  constructor(private fb:FormBuilder){
    this.rForm=fb.group({
      'email':[null,Validators.compose([Validators.required])],
      'password':[null,Validators.compose([Validators.compose([Validators.required,Validators.minLength(8)])])]
    });
  }

  loginFunction(value){
    this.email=value.email;
    this.password=value.password;
    alert('email='+this.email+'\npassword='+this.password);
  }
}
