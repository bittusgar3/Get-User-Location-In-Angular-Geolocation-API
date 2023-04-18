import { Component, OnInit } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'location';
  location:any;
  locationjs: any;

  constructor(private commanService:CommonService){}


  ngOnInit(){
    this.commanService.getLocation().subscribe((Response)=>{
      console.log(Response);
      this.location= Response;
    });


  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
    this.locationjs = position.coords;
  });

  }
}
