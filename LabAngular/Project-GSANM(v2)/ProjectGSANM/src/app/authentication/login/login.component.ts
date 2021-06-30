import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    user_name: new FormControl(),
    password: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
