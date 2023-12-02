import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent  implements OnInit  {
 public changeToCheckout: boolean=false;

  constructor(

  ) {
   
  }
  ngOnInit(): void {

  }
  onClickToCheckOut(){
    this.changeToCheckout=true
    console.log("in")
  }
  onClickToCheckIn(){
    this.changeToCheckout=false
    console.log("out")
  }
}
