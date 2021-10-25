import { Injectable } from '@angular/core';
import { AddCart } from '../Model/AddCart';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from '../Model/Book';
import { chaats } from '../Model/chaats';
import { products } from '../Model/Products';
@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  req:string="https://localhost:44344/api/Cart";
  req1:string="https://localhost:44344/api/Cart/";

  items: Book[] = [];
  /* . . . */
  chatitem:chaats[]=[];
  pro:products[]=[];
    addToCart(book:Book) {
      this.items.push(book);
    }
  chattocart(chaat:chaats){
    this.chatitem.push(chaat);
  }
  procart(prod:products){
    this.pro.push(prod);
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
    clearCart(items:Book) {
      this.items.splice(this.items.indexOf(items),1);
    }
    clearChat(chatitem:chaats) {
      this.chatitem.splice(this.chatitem.indexOf(chatitem),1);
    }
    clearPro(pro:products) {
      this.pro.splice(this.pro.indexOf(pro),1);
    }
  
    // getcartbyid(crt:AddCart):Observable<any>{
    //   return this.http.get<any>(this.req+crt,{
    //     headers:new HttpHeaders({
    //       'Content-Type':'application/json;charset=UTF-8',
    //       'Access-Control-Allow-Origin':'*',
    //       'Access-Control-Allow-Method':'*'
    //     })
    //   });
    // }
  constructor(private http:HttpClient) { }
}
