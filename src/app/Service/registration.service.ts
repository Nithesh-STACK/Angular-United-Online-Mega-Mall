import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Registration } from '../Model/Registration';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44382/api/Reg";
  createUser(registration:Registration):Observable<Registration>
  {
    return this.http.post<Registration>(this.req,registration,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
}
}
