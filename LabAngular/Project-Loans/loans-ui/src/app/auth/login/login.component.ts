import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

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

  formLogin: any;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: [],
      password: []
    });
  }

  login(): any {
    this.authService.login(this.formLogin.value)
      .subscribe((response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      }, (error: any) => {
        console.log(error);
      });

  }
}
