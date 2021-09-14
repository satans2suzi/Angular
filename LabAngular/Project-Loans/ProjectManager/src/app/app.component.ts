import {AfterViewInit, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth/auth.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAuthState} from './app-store/auth/auth.state';
import {isAuthenticatedSelector} from './app-store/auth/auth.selector';
import * as AuthActions from './app-store/auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAuthenticated$ = this._store.select(isAuthenticatedSelector);

  constructor(private readonly _store: Store<IAuthState>,
              private readonly _authService: AuthService) {

  }

  title = 'ProjectManager';

  ngOnInit(): void {
    this._store.dispatch(AuthActions.actionCheckToken());
  }

}
