import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ErrorModel} from '../../../shared/models/error/errors.models';
import {Observable, of, Subject, Subscription} from 'rxjs';
import {CustomValidators} from '../../../shared/vadidator/validate.vadidator';
import {delay, filter, map, startWith, switchMap, take, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../app-store/reducer.index';
import * as AuthActions from '../../../app-store/auth/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  formRegister!: FormGroup;
  formSubmit$ = new Subject<any>();
  subcription$!: Subscription


  constructor(private readonly _formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly _authService: AuthService,
              private readonly _customValidators: CustomValidators,
              private readonly _store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.initForm();
    this.formSubmit$
      .pipe(
        tap(() => this.formRegister.markAsDirty()),
        switchMap(() =>
          this.formRegister.statusChanges.pipe(
            startWith(this.formRegister.status),
            filter((status) => status !== 'PENDING'),
            take(1)
          )
        ),
        filter((status) => status === 'VALID')
      )
      .subscribe((validationSuccessful) => this.submitForm());
  }

  initForm(): void {
    this.formRegister = this._formBuilder.group({
        fullname: ['',
          Validators.compose(
            [Validators.required]
          )
        ],
        username: ['',
          Validators.compose([
            Validators.required,
            // this.customValidators.NoWhitespaceValidator(),
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern(/^[a-z\d]+$/i)
          ]),
          this._customValidators.validateUserNameExists.bind(this)
        ],
        phonenumber: ['',
          Validators.compose([
            Validators.required,
            Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})$/i),
            this._customValidators.NoWhitespaceValidator()
          ])],
        email: ['',
          Validators.compose([
            Validators.required,
            Validators.email,
            this._customValidators.NoWhitespaceValidator(),
          ]),
          this._customValidators.validateEmailExists.bind(this)
        ],
        password: ['',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
          ])
        ],
        confirmPassword: ['',
          Validators.compose([
            Validators.required,

          ])
        ]
      },
      {
        validators: this._customValidators.confirmPasswordMatch('password', 'confirmPassword')
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
  }

  submitForm(): void {
    this._store.dispatch(AuthActions.actionAuthRegister({payload: this.formRegister.value}));
    // this.subcription$ = this._authService.register(this.formRegister.value)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       alert('Đăng ký thành công');
    //       return this._router.navigate(['login']);
    //     },
    //     error: (error: ErrorModel) => {
    //       console.log(error.error.message.name);
    //       alert(error.error.message.name);
    //     },
    //     complete: () => {
    //       console.log('complete');
    //     }
    //   });
  }

  ngOnDestroy(): void {
    // this.subcription$.unsubscribe();
  }
}
