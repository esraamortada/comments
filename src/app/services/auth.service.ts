import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData =new BehaviorSubject(null);
  savUserData(){
    let encodedUser = JSON.stringify(localStorage.getItem('userToken'))
    this.userData.next(jwtDecode(encodedUser));
  }

  constructor(private _HttpClient:HttpClient ,private _Router:Router) {

   }
   register(formData:object):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/register`,formData)
   }
   login(formData:object):Observable<any>{
    return this._HttpClient.post(``,formData)
   }
   logOut(){
    this.userData.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['login'])
   }
}
 