// import { Injectable } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { serverPath } from 'src/app/serverVariables';
// import {Message, MessageService} from 'primeng/api';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   loginForm: FormGroup;
//  public submitted: boolean=false;
//   constructor(
//     public formBuilder: FormBuilder,
//     private http: HttpClient,
//   ) {
//     this.loginForm = this.formBuilder.group({
//       employeeId: [null, [Validators.required]],
//       password: [null, [Validators.required]]
//     });
//   }

//   login() {
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

//   }

// }
