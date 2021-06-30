import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = new FormGroup({
    user_name: new FormControl(),
    full_name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    re_password: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
