import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn!: boolean;

  constructor(private authService: AuthService) {

  }

  title = 'ProjectManager';

  ngOnInit(): void {
    this.checkIsLoggedIn();
  }

  checkIsLoggedIn() {
    this.authService.isLoggedIn()
      .subscribe(
        value => {
          return this.isLoggedIn = value;
        }
      );
  }

  ngOnDestroy(): void {
  }
}
