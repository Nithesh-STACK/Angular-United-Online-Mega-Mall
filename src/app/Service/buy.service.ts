import { Injectable } from '@angular/core';
import { ShipmentDetail } from '../Model/ShipmentDetail';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BuyService {
    constructor(private http:HttpClient) { }
    //Variable to store the request URL for accessing API.
    req:string="https://localhost:44352/api/Shipment";
    createUser(shipment:ShipmentDetail):Observable<ShipmentDetail>
    {
      return this.http.post<ShipmentDetail>(this.req,shipment,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
          
        })
      });
  }
}
