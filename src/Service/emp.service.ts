import { Injectable } from '@angular/core';
import { Employe } from '../app/Model/Employe';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emplist:Employe[]=[
    {
      eid:1,
      ename:"Nit",
      salary:566,
      photoURL:'/assets/img/thanku.jpg'

    },
    {
      eid:2,
      ename:"Villa",
      salary:598,
      photoURL:'/assets/img/thanku.jpg'


    }
  ]

loggedIn:boolean=false;


  //login method.
  login():void
  {
      this.loggedIn=true;
  }
  
  //logout method.
  logout():void
  {
      this.loggedIn=false;
  }

  //isLoggedIn method.
  isLoggedIn():boolean
  {
    return this.loggedIn;
  }
  
  constructor() { 
  }
getallemployes():Employe[]{
  return this.emplist;
}
  }

