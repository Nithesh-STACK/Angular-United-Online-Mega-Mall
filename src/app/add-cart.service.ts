import { Injectable } from '@angular/core';
import { AddCart } from './Model/AddCart';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Book } from './Model/Book';
import { chaats } from './Model/chaats';
import { products } from './Model/Products';
@Injectable({
  providedIn: 'root'
})
export class AddCartService {
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
    clearCart() {
      this.items = [];
      return this.items;
    }

  constructor(private http:HttpClient) { }
}
