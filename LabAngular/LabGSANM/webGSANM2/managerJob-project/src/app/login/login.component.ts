import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean
  rfLogin = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', Validators.required)
  });
  constructor( private router: Router,
               private authService: AuthService) {

  }

  ngOnInit(): void {
  }
  get username() {
    return this.rfLogin.get('username');
  };
  signIn(credentials: any){
    // this.authService.login(credentials)
    //   .subscribe(response => {
    //     // @ts-ignore
    //     if (response)
    //       this.router.navigate(['/'])
    //     else
    //       this.invalidLogin = true;
    //
    //   });
  }
}
