import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { serverPath } from 'src/app/serverVariables';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  public changeToCheckout: boolean = false;
  userData: any | null;
  userAttendanceData: any | undefined;
  timerInterval: any;
  // Assuming timerDisplay is a property in your component
timerDisplay: string = '';
  userImage: any;
  checkindate: string | undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {

  }
  ngOnInit(): void {
    this.userData = sessionStorage.getItem('user');
    this.getLastAttendance();
  }
  getLastAttendance(){
    let userDetails = JSON.parse(this.userData)
    this.userImage=userDetails.data.profileImage
    console.log(this.userImage)
    let filter ="?filterByUserId="+userDetails.data._id
    return this.http.get(serverPath.getlastattendance+filter).subscribe(userData => {
      this.userAttendanceData=userData
    if(this.userAttendanceData.loginTime && !this.userAttendanceData.logoutTime){
      this.changeToCheckout = true;
      this.checkindate=this.userAttendanceData.loginTime;
      this.startTimer(this.userAttendanceData.loginTime);
    }
    }, ((err) => {
      console.log(err)
    })
    )
  }
  onClickToCheckOut() {
    this.changeToCheckout = true;
    let userDetails = JSON.parse(this.userData)
    // let currentTime=moment()
    // if(moment(this.checkindate).isSame(currentTime,'day')){
    //   this.getLastAttendance();
    // }
    this.checkindate = moment().format()
    let checkInData = {
      loginTime: this.checkindate,
      userId: userDetails.data._id
    }
    return this.http.post(serverPath.attendance, checkInData).subscribe(userData => {
      this.getLastAttendance();
    }, ((err) => {
      console.log(err)
    })
    )
  }
  onClickToCheckIn() {
    this.changeToCheckout = false;
    let userDetails = JSON.parse(this.userData)
    clearInterval(this.timerInterval);
    let checkindate = moment().format()
    let checkInData = {
      logoutTime: checkindate,
      userId: userDetails.data._id
    }
    return this.http.post(serverPath.attendance, checkInData).subscribe(userData => {
    }, ((err) => {
      console.log(err)
    })
    )
  }



startTimer(startTime: string) {
  const loginTime = new Date(startTime).getTime();

  this.timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - loginTime;

    // Convert elapsed time to a readable format (hours, minutes, seconds)
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    this.ref.detectChanges();
    // Set the timer display
    this.timerDisplay = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

}
