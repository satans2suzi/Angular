import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  log(x: any) {
    console.log(x);
  }
  get username(): any {
    console.log(this.username.get('username'));
    return this.username.get('username');
  }
}
