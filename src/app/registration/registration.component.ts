import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/Registration';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    user:Registration={
      loginId:"",
      password :""
    }
   
    constructor(private obj :RegistrationService,private router:Router) { }
  

    reg_api(registration:RegistrationService):void
    {
      {debugger}
      this.obj.createUser(this.user).subscribe(data=>
        {
          this.router.navigate(['/login']);
        })
    }
    
   
  ngOnInit(): void {
  }

}
