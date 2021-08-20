import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './core/services/auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn!: boolean;
  constructor( private authService: AuthService) {

  }
  title = 'ProjectManager';
  ngOnInit(): void {
    this.authService.isLoggedIn
    .subscribe(
      value => {
        this.isLoggedIn = value;
        console.log('app-component',this.isLoggedIn);
      }
    );
  }
}
