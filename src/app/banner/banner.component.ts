import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
city;
timein;
timeout;

  constructor(private hotelService : HotelService) { }

  ngOnInit(): void {
  }
onformsubmit(){
this.hotelService.create(
  {
    city:this.city,
    timein:this.timein,
    timeout:this.timeout,

  }
).subscribe(x=>{
  console.log(x);
  alert("done");
  this.city="";
  this.timein="";
  this.timeout="";


});
}


}

