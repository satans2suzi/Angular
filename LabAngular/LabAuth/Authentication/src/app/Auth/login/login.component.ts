import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  signIn(credentials): void {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result !== undefined){
          this.router.navigate(['/']);
        }else{
          this.invalidLogin = true;
        }
      });
  }
}
