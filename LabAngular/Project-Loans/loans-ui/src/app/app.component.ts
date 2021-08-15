import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  checkStyle = '';
  isAuth = false;
  constructor(private authService: AuthService) {
    this.isAuth = this.authService.isLogin;
  }
  title = 'loans-ui';

  ngOnInit(): any {
    this.checkStyle = this.isAuth ? 'content-wrapper' : this.checkStyle
    console.log('app-component isAuth:', this.isAuth)

  }
}
