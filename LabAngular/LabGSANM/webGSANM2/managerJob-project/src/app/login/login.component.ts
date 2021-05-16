import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rfLogin = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  get username() {
    return this.rfLogin.get('username');
  }
}
