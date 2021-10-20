import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../add-cart.service';
import { BookDataComponent } from '../Book-data/Book-data.component';
import { AddCart } from '../Model/AddCart';
import { Book } from '../Model/Book';
import { Router } from '@angular/router';
import { chaats } from '../Model/chaats';
import { products } from '../Model/Products';
@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  Carts:AddCart[]=[];

  //Player object to be used in forms.
  Cart:AddCart ={
    id:0,
    name: "",
    category:"",
    price: 0,
    photo: "",
    plotDescription: ""
  };
  constructor(private obj:AddCartService,private _router:Router) { }
  item = this.obj.getItems();
  chat=this.obj.getchat();
  pro=this.obj.getpro();
  clearCart(item:Book) {
    this.item = [];
    return this.item;
  }
  clearchat(chat:chaats){
    this.chat=[];
    return this.chat;
  }
  clearpro(pro:products){
    this.pro=[];
    return this.pro;
  }
  buy_api():void
  {
    
        this._router.navigate(['/buy']);
      }
  ngOnInit(): void {

  }

}
