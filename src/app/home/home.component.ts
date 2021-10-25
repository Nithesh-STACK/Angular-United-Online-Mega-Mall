import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _loginservice:LoginService,private _router:Router,private _activateroute:ActivatedRoute)
{


}
btnclick():void{
  this._router.navigate(['login'])
}
regclick():void{
  this._router.navigate(['/reg'])
}

  ngOnInit(): void {
  }

}
