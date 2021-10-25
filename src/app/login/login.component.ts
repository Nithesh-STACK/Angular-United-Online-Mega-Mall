import { Login } from '../Model/Login'; 
import { LoginService } from '../Service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  user:Login={
    name:"",
    password :""
  }
  login:Login={
    name:'',
    password:''
  }
  constructor(private obj :LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  regclick():void{
    this.router.navigate(['/reg'])
  }
  post_api(login:Login):void
  {
    this.obj.Login(login).subscribe(data=>
      {
        const token=data;
        localStorage.setItem("jwt",token);     
        sessionStorage.setItem('user',login.name) ;
        this.router.navigate(['/cat']);
      })
  }
  
 
}

