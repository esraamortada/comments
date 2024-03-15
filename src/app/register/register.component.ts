import { Component ,OnInit } from '@angular/core';
import{FormControl ,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registrationForm : FormGroup =new FormGroup({
    first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    age: new FormControl(null,[Validators.required,Validators.min(16),Validators.max(80)]),
    password: new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{2,8}$`)]),
    
  })
  
  constructor(private _AuthService:AuthService ,private _Router:Router){

  }
  ngOnInit(): void {
   
  }

  submit(registrationForm:FormGroup){
    console.log(registrationForm);
    if(registrationForm.valid){
    this._AuthService.register(registrationForm.value).subscribe((response)=>{
      if(response.message == 'success')
      {
        this._Router.navigate(['login']);
      }
      

    })
    }

  }

}
