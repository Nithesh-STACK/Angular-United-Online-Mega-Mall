import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnlinePay } from './Model/OnlinePay';
import { Book } from './Model/Book';
import { chaats } from './Model/chaats';
import { products } from './Model/Products';
import { Booking } from './Model/Booking';
@Injectable({
  providedIn: 'root'
})
export class OnlineServiceService {
  req:string="https://localhost:44344/api/Cart/OnlinePay";

  constructor(private http:HttpClient) { }
  createUser(onlinepay:OnlinePay):Observable<OnlinePay>
    {
      return this.http.post<OnlinePay>(this.req,onlinepay,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
          
        })
      });
}
items: Book[] = [];
  /* . . . */
  chatitem:chaats[]=[];
  pro:products[]=[];
  mov:Booking[]=[];
    onlinebook(book:Book) {
      this.items.push(book);
    }
  onlinechat(chaat:chaats){
    this.chatitem.push(chaat);
  }
  onlinepro(prod:products){
    this.pro.push(prod);
  }
  onlinebooking(movie:Booking){
    this.mov.push(movie);
  }
  getchat(){
    return this.chatitem;
  }
    getItems() {
      return this.items;
    }
  getpro(){
    return this.pro;
  }
  getmovies(){
    return this.mov;
  }
}
