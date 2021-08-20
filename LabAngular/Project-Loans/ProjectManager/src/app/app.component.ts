import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogin = false;
  title = 'ProjectManager';
  ngOnInit() {

  }
}
