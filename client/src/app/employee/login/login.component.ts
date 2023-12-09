import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { serverPath } from 'src/app/serverVariables';
import { Router, ActivatedRoute } from '@angular/router';
// import {Message, MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
 public submitted: boolean=false;
  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      employeeId: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  login() {
    const items:any = {
      name: "muhaz",
      token: "asdfghjk1234cSdfr"
    }

    const itemsString = JSON.stringify(items);
    sessionStorage.setItem("user", itemsString);
          this.router.navigate(['/home']);
//     this.submitted=true;
//     if (this.loginForm.invalid) {
//       return;
//     }
//     let loginData = this.loginForm.value;
//     return this.http.post(serverPath.login, loginData).subscribe(userData => {
//       sessionStorage.setItem("user", JSON.stringify(userData));
      
//  //   this.submitted=false;

//     }, ((err) => {
//       console.log(err)
//     })
//     )

  }
}
