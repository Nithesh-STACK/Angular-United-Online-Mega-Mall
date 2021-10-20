import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    sessionStorage.removeItem("user");
    this._router.navigate(['/login']);
  }
  constructor(public _loginservice:LoginService,private _router:Router,private _activateroute:ActivatedRoute,private jwtHelper:JwtHelperService) { 
  }
  getname(){
  return sessionStorage.getItem('user')
   }
   homeapi(){
     this._router.navigate(['/homes'])
   }
   privacy(){
    this._router.navigate(['/privacy']);
  }
ngOnInit():void{

}

//  sum(a:string,b:string):void{
//  this.result=Number(a)+Number(b);
//   console.log(this.result);
// }
}
