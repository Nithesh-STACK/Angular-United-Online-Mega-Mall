import { Component, OnInit } from '@angular/core';
import { EmpService } from '../Service/emp.service';
import { Employe } from '../app/Model/Employe';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
emp:Employe[]=[];
  constructor(private ser:EmpService) { 

  }

  ngOnInit(): void {
    this.emp=this.ser.getallemployes();
    console.log(this.emp);
  }
  fetchEmploye():void
  {
    this.emp=this.ser.getallemployes();
    console.log(this.emp);
  }

}
