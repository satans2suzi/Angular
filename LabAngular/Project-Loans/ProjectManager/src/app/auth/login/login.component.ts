import {ResSignInModel} from './../../core/models/auth/signin.model';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable, Observer, of} from 'rxjs';
import {AuthService} from '../../core/services/auth/auth.service';
import {ErrorModel} from '../../core/models/error/errors.models';
import {catchError, map} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() isLogin = new EventEmitter<boolean>();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  formLogin = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    console.log(this.formLogin.value);
  }

  signIn(): void {
    this.authService.signIn$(this.formLogin.value)

      .subscribe(
        // this.observer
        result => {
          console.log(result);
          this.isLogin.emit(true);
          return this.router.navigate(['dashboard']);
        },
        (error: ErrorModel) => {
          this.isLogin.emit(false);
          alert(error.error.message.name);
          return this.formLogin.reset();
        }
      );
  }
}
