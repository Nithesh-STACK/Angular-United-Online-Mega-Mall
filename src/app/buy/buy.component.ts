import { Component, OnInit } from '@angular/core';
import { ShipmentDetail } from '../Model/ShipmentDetail';
import { BuyService } from '../Service/buy.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AddCartService } from '../Service/add-cart.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  user:ShipmentDetail={
    buyersName: "",
    age:0,
    addressDetails: "",
    mobileNumber: 0
  }

  //Player object to be used in forms.

  constructor(private obj :BuyService,private router:Router) { }
  buy_api(shipment:BuyService):void
  {
    {debugger}
    this.obj.createUser(this.user).subscribe(data=>
      {
        this.router.navigate(['/payment']);
      })
  }
  disitem(){
    return sessionStorage.getItem("name");
  }

 paymodes(){
   this.router.navigate(['/pay']);
 }
  ngOnInit(): void {
  }

}
