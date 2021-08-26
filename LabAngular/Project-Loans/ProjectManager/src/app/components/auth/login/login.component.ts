import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ErrorModel} from '../../../shared/models/error/errors.models';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  formLogin$!: Observable<FormGroup>;
  private initialFormValue: unknown;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn(): void {
    this.authService.login(this.formLogin.value)
      .subscribe(
        // this.observer
        result => {
          console.log(result);
          return this.router.navigate(['/']);
        },
        (error: ErrorModel) => {
          alert(error.error.message.name);
        }
      );
  }
}
