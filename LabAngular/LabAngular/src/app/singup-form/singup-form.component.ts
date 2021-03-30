import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {
  signupForm = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email, UsernameValidators.cannotContainSpace]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

  })
  constructor() { }

  ngOnInit(): void {
  }

  get username() {
    // console.log(this.signupForm.get('username'));
    return this.signupForm.get('account.username');
  }
  get password() {
    return this.signupForm.get('account.password');
  }
  login() {
    // this.signupForm.setErrors({
    //   invalidLogin: true;
    // });
  }
}
