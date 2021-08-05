import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthModel} from '../../models/auth.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService
  ) {
  }

  formRegister: any;

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      firstname: [],
      lastname: [],
      username: [],
      phonenumber: [],
      email: [],
      password: [],
    });
  }

  register(): any {
    this.authService.register(this.formRegister.value)
      .subscribe(response => {
          console.log(response);
          this.router.navigate(['/auth/login']);
        },
        error => {
          console.log(error);
        });
  }
}
