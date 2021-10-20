import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Model/Book'; 
import { BookService } from '../Service/Book.service';
import { Router,ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BuyService } from '../buy.service';
import { AddCartService } from '../add-cart.service';
import { OnlineServiceService } from '../online-service.service';
@Component({
  selector: 'app-Book-data',
  templateUrl: './Book-data.component.html',
  styleUrls: ['./Book-data.component.css']
})
export class BookDataComponent implements OnInit {
  
  //Array to store the player objects.
  Books:Book[]=[];

  //Player object to be used in forms.
  Book:Book ={
    id:0,
    name: "",
    category:"",
    price: 0,
    photo: "",
    plotDescription: ""
  };
  
 
addcrt(){
  this._router.navigate(['/cart']);
}

  //Injecting Player service inside this component.
  constructor(private online:OnlineServiceService,private cart:AddCartService,private obj:BookService,private _router:Router,private _activateroute:ActivatedRoute,private jwtHelper:JwtHelperService)
  {
  }
 
  ngOnInit(): void {

    this.obj.getAllUsers().subscribe(data=>{
    this.Books=data;
      //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.Books);
    });
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  Logout():void{
    localStorage.removeItem("jwt");
    this._router.navigate(['/login']);
  }
 
  buy_api(book:Book)
  {
    this.online.onlinebook(book);

        this._router.navigate(['/buy']);
      }
      addToCart(book: Book) {
        this.cart.addToCart(book);
        window.alert('Your product has been added to the cart!');
  }
  


}
