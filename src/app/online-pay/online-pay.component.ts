import { Component, OnInit } from '@angular/core';
import { OnlinePay } from '../Model/OnlinePay'; 
import { OnlineServiceService } from '../Service/online-service.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-online-pay',
  templateUrl: './online-pay.component.html',
  styleUrls: ['./online-pay.component.css']
})
export class OnlinePayComponent implements OnInit {
  book = this.obj.getItems();
chat=this.obj.getchat();
pro=this.obj.getpro();
movie=this.obj.getmovies();
  constructor(private obj:OnlineServiceService,private _router:Router) { }
user:OnlinePay={
  cardHolderName: "",
  debitCardNumber: "",
  expiryDate:"",
  cvvPin:""
}
online_api(online:OnlineServiceService):void
{
  this.obj.createUser(this.user).subscribe(data=>
    {
      this._router.navigate(['/thanks']);
    })
}
thanku(){
  this._router.navigate(['thanks']);
}
  ngOnInit(): void {
  }

}
