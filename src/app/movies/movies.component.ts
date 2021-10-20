import { Component, OnInit } from '@angular/core';
import { Booking } from '../Model/Booking';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { OnlineServiceService } from '../online-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  booking:Booking[]=[];

  bookings:Booking={
    id:0,
    movieName:" ",
    price:0,

    movieDescription:" ",

    moviePoster:" "
  };
  

  constructor(private obj:MoviesService,private _router:Router,private online:OnlineServiceService)
  {
  }
  online_api(booking:Booking)
  {
    this.online.onlinebooking(booking);

        this._router.navigate(['/onlinepay']);
      }
 
  ngOnInit(): void {
    this.obj.getAllUsers().subscribe(data=>{
      this.booking=data;
      //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.booking);
    });
  }

}
