import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { } from '../../models/auth.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  formRegister: any;

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      firstname: [],
      lastname: [],
      username: [],
      phonenumber: [],
      email: [],
      password: [],
    });
  }

  register(): any {
    this.authService.register(this.formRegister.value)
      .subscribe(res => {
        console.log(res.message.name);
        this.isSuccessful = true;
        this.router.navigate(['/auth/login']);
      }, (error: any) => {
        console.log(error.error.error)
        // this.errorMesage = errorr
        this.router.navigate(['/auth/register']);
      })
  }
}
