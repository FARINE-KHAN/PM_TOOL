import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { serverPath } from 'src/app/serverVariables';
import { ActivatedRoute, Router } from '@angular/router'
interface Role {
  id:number,
  name: String
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public submitted: boolean = false;
  roles: Role[] | undefined
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,

  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.pattern('[A-Za-z][A-Za-z]*$')]],
      lastName: ["", [Validators.pattern('[A-Za-z][A-Za-z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{6,}$")]],
      confirmPassword: ['', [Validators.required]],
      team: [''],
      role: ['']

    }, {
      validator: this.passwordMatchValidator()
    });
  }
  ngOnInit(): void {
    this.roles = [
      { id: 1,name: "Manager" },
      {id: 2, name: "Employee" },
      {id: 3, name: "HR" },
      {id:4 , name: "Accountant" }
    ]

  }
  submit() {
    this.submitted = true;
    console.log(this.registerForm)
    if (this.registerForm.invalid) {
      return;
    }
    let registerData = this.registerForm.value;
    registerData.role=this.registerForm.value.role.name;
    delete registerData.team;

    return this.http.post(serverPath.register, registerData).subscribe(userData => {
      this.router.navigate(['/employee/login']);

    }, ((err) => {
      console.log(err)
    })
    );
  }
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      // Check if passwords match
      if (password !== confirmPassword) {
        return { 'passwordMismatch': true };
      }

      return null;
    };
  }
  onSelectRole(e:any){
  console.log(e)
  }
}
