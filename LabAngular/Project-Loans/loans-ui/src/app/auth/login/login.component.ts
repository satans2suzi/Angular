import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {

  }

  formLogin: any;
  errorMessage = '';
  username = '';
  firstname = '';
  lastname = '';
  email = '';
  isLogin = '';

  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      username: [],
      password: []
    });
  }

  login(): any {
    this.authService.login(this.formLogin.value)
      .subscribe((result: any) => {
        if (result) {
          return this.router.navigate(['/dashboard'])
            .then(() => {
              window.location.reload();
            });
        } else {
          return this.router.navigate(['/auth/login']);
        }
      }, (error: any) => {
        this.errorMessage = error.error.error;
        console.log('Lỗi', error.error.error);
      });
  }

}
