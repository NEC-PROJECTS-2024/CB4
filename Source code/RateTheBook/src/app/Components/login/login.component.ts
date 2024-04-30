import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService){

  }
  msg:String = ""
  login(form:NgForm){
    this.msg = this.auth.getToken(form.form.value.userId)
    console.log(this.msg);
  }
}
