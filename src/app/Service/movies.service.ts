import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../Model/Booking';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }
  req:string="https://localhost:44303/api/Booking";
  getAllUsers():Observable<Booking[]>
  {
    return this.http.get<Booking[]>(this.req);
  }
}
