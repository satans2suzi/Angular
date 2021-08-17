import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  ngOnInit(): void {

    console.log(this.formLogin.value);
  }
  
  signIn (): any {
    this.authService.signIn(this.formLogin.value)
    .subscribe(res =>{
      console.log(res);
    });
  }

}
