import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-modes',
  templateUrl: './payment-modes.component.html',
  styleUrls: ['./payment-modes.component.css']
})
export class PaymentModesComponent implements OnInit {

  constructor(private _router:Router) { }
onlinepay(){
  this._router.navigate(['/onlinepay'])
}
thanku(){
  this._router.navigate(['/thanks']);
}
  ngOnInit(): void {
  }

}
