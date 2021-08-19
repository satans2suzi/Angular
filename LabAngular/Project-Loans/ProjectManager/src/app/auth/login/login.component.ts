import { ResSignIn } from './../../core/models/auth/signin.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  formLogin = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  observer = {
    next: (val1: any) => console.log(val1),
    error: (err1: any) => console.error(err1),
    complete: () => console.log('complete'),
  };
  ngOnInit(): void {
    console.log(this.formLogin.value);
  }

  signIn(): void {
    this.authService.signIn$(this.formLogin.value)
    .subscribe(this.observer);
  }
}
