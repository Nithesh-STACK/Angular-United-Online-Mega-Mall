import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _router:Router,private _activateroute:ActivatedRoute,private jwtHelper:JwtHelperService) { }
btnbook(){
  this._router.navigate(['/book'])
}
btnchat(){
  this._router.navigate(['/chat'])
}
product(){
  this._router.navigate(['/product'])
}
movie(){
  this._router.navigate(['/movie'])
}
chat(){
  this._router.navigate(['/chat'])
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
  ngOnInit(): void {
  }

}
