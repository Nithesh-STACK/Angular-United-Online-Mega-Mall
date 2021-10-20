import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../Model/Products';
import { Router } from '@angular/router';
import { AddCartService } from '../add-cart.service';
import { OnlineServiceService } from '../online-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:products[]=[];

  //Player object to be used in forms.
  products:products ={
    
    productid:0,
    productname: " ",
    productprice:0, 
    productImage: ""                                                                                    
  };
  constructor(private obj:ProductService,private _router:Router,private cart:AddCartService,private online:OnlineServiceService)
  {
  }

      addcrt(){
        this._router.navigate(['/cart']);
      }
      proCart(pro: products) {
        this.cart.procart(pro);
        window.alert('Your product has been added to the cart!');
  }
  buy_api(pro:products)
  {
    this.online.onlinepro(pro);

        this._router.navigate(['/buy']);
      }
  ngOnInit(): void {
  

    this.obj.getAllUsers().subscribe(data=>{
      this.product=data;
      //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.products);
    });
  }
 

}
