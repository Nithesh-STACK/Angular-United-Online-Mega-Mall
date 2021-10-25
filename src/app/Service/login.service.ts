import { Injectable } from '@angular/core';
import { Login } from '../Model/Login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  req:string="https://localhost:44311/api/Auth";
  constructor(private http:HttpClient,private _router:Router) { }

  Login(login:Login):Observable<any>
  {
    return this.http.post(this.req,login,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
          'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'}
    )}
    getToken() {
      return localStorage.getItem('jwt')
    }
 
    loggedIn() {
      return !!localStorage.getItem('jwt')    
    }
    logoutUser() {
      localStorage.removeItem('jwt')
      this._router.navigate(['/login'])
    }
  
  }