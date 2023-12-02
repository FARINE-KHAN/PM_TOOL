import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean =false;
  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
  ) {
 
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const storedUserData = sessionStorage.getItem("user");
    if (storedUserData) {
      this.userLoggedIn = true;
    }else{
      this.userLoggedIn = false;
    }
    this.cd.detectChanges();

  }
  onLogout(){
    sessionStorage.removeItem("user");
    // window.location.reload();
    this.router.navigate(['/employee/login']);

   }
   onLogin(){
    this.router.navigate(['/employee/login']);
   }

}
