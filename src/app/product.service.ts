import { Injectable } from '@angular/core';
import { products } from './Model/Products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44387/api/ProductsBooking";

  
  //Method to get the list of all players from the API.
  getAllUsers():Observable<products[]>
  {  

    return this.http.get<products[]>(this.req);
  }
}
