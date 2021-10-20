import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { chaats } from '../Model/chaats';
import { ChaatserviceService } from '../chaatservice.service';
import { AddCartService } from '../add-cart.service';
import { OnlineServiceService } from '../online-service.service';
@Component({
  selector: 'app-chaat',
  templateUrl: './chaat.component.html',
  styleUrls: ['./chaat.component.css']
})
export class ChaatComponent implements OnInit {

  chat:chaats[]=[];

  //Player object to be used in forms.
  chaats:chaats ={
    cid:0,
    cname: "",
   
    cprice: 0,
    cimage: ""
  };
  postuser:chaats={
   cid:0,
   cname:"",
   cimage:"",
   cprice:0,
   
 };
  msg:string="";
  flag:boolean=false;
 
 
 
  //Injecting Player service inside this component.
  constructor(private online:OnlineServiceService,private router:Router, private obj:ChaatserviceService,private jwtHelper:JwtHelperService,private chatcart:AddCartService)
  {
  }
  buy_api(chat:chaats)
  {
    this.online.onlinechat(chat);

        this.router.navigate(['/buy']);
      }
      addcrt(){
        this.router.navigate(['/cart']);
      }
      chaatCart(chaat: chaats) {
        this.chatcart.chattocart(chaat);
        window.alert('Your product has been added to the cart!');
  }
   ngOnInit(): void 
   {
    
     
       this.obj.getAllUsers().subscribe(data=>{
         this.chat=data;
         //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
         //Logging the response recieved from web api.
         console.log(this.chat);
       })
     
   }
 
  
 
   delete_api(id:number):void
   {
     {{debugger}}
     this.obj.deleteUser(id).subscribe(data=>{
       this.msg="Deleted";
       alert(this.msg);
     })
     
   }
   post_api(chat:chaats):void{
     this.obj.createUser(chat).subscribe(data=>
       {
         this.msg="Added"
       });
       console.log(this.msg);
   }
   put_api(id:number,chat:chaats,):void
   {
     this.obj.updateUser(id,chat).subscribe(data=>{
         this.msg="Updated"
       }
     );
     console.log(this.msg);
   }
   Move():void{
     this.router.navigate(['/drink-api']);
   }
   Buy():void{
     this.router.navigate(['/Buy']);
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

}
