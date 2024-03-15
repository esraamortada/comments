import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
AuthService



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private _Router:Router ,private _AuthService:AuthService ){

 }

  loginForm:FormGroup =new FormGroup({
    email: new FormControl(null,[Validators.required ,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{2,8}$`)])
  })

submit(loginForm:FormGroup){
  if(loginForm.valid){
  this._AuthService.login(loginForm.value).subscribe((response)=>{
    if(response.message =='success'){
      localStorage.setItem('userToken',response.token)
      this._AuthService.savUserData();
      this._Router.navigate(['home']);

    }
  })
}

}

}
