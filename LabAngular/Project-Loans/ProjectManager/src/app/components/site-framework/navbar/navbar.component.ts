import { tap } from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAuthState} from '../../../app-store/auth/auth.state';
import * as AuthActions from '../../../app-store/auth/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly _formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly _store: Store<IAuthState>) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
      this._store.dispatch(AuthActions.actionAuthLogout());
  }
}
