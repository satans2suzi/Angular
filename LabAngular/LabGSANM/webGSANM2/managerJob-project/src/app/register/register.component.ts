import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, Form} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rfRegister: FormGroup;

  constructor() {
    this.rfRegister = new FormGroup({
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique
      ),
      fullname: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25)
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      faPhoneNumbers: new FormArray([]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  ngOnInit(): void {

  }

  get username() {
    return this.rfRegister.get('username');
  }

  get fullname() {
    return this.rfRegister.get('fullname');
  }

  get password() {
    return this.rfRegister.get('password');
  }

  get email() {
    return this.rfRegister.get('email');
  }

  get phoneNumbers() {
    return this.rfRegister.get('faPhoneNumbers') as FormArray;
  }

  login() {
    this.rfRegister.setErrors({
      invalidLogin: true
    });
  }

  // tslint:disable-next-line:variable-name
  addPhoneNumber(number: HTMLInputElement) {
    number.value = '';
    this.phoneNumbers.push(new FormControl(number.value));
  }
// tslint:disable-next-line:variable-name
  removePhoneNumber(phonenumber: FormControl) {
    const index = this.phoneNumbers.controls.indexOf(phonenumber);
    this.phoneNumbers.removeAt(index);
  }
}
