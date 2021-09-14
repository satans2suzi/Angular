import {Component, OnDestroy, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ErrorModel} from '../../../shared/models/error/errors.models';
import {Observable, Subject, Subscription} from 'rxjs';
import {delay, filter, startWith, switchMap, take, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAuthState} from '../../../app-store/auth/auth.state';
import {IFormLoginModel, IResLoginModel} from '../../../shared/models/auth/login.model';
import * as AuthActions from '../../../app-store/auth/auth.action';
import {isAuthenticatedSelector} from '../../../app-store/auth/auth.selector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin!: FormGroup;
  destroy$: Subject<void> = new Subject();
  errors!: Observable<string>;
  formSubmit$ = new Subject<any>();
  constructor(private readonly _formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly _store: Store<IAuthState>
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    this.formSubmit$
      .pipe(
        tap(() => this.formLogin.markAsDirty()),
        tap(this.destroy$),
        switchMap(() =>
          this.formLogin.statusChanges.pipe(
            startWith(this.formLogin.status),
            filter((status) => status !== 'PENDING'),
            take(1)
          )
        ),
        filter((status) => status === 'VALID')
      )
      .subscribe((validationSuccessful) => this.submitForm());
  }

  initForm(): void {
    this.formLogin = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm (): void {
    this._store.dispatch(AuthActions.actionAuthLogin({payload: this.formLogin.value}));
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
