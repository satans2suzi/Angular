import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable, timer} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {

  constructor(private _authService: AuthService) {
  }

  NoWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let controlVal = control.value;
      if (typeof controlVal === 'number') {
        controlVal = `${controlVal}`;
      }
      // const isWhitespace = (controlVal || '').trim().length === 0;
      const isWhitespace = controlVal.indexOf(' ') >= 0;
      const isValid = !isWhitespace;
      return isValid ? null : {whitespace: 'value is only whitespace'};
    };
  }


  validateUserNameExists(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log(control.value);
    return (timer(300)).pipe(
      switchMap(() => this._authService.checkIfUsernameExists(control.value)
        .pipe(
          map(isValid => {
            return isValid ? null : {'usernameAlreadyExists': true};
          })
        ))
    );
  }

  validateEmailExists(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log(control.value);
    return (timer(300)).pipe(
      switchMap(() => this._authService.checkIfEmailExists(control.value)
        .pipe(
          map(isValid => {
            return isValid ? null : {'emailAlreadyExists': true};
          })
        ))
    );
  }

  confirmPasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      // console.log(controlName, matchingControlName)
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmPasswordMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        return matchingControl.setErrors({confirmPasswordMatch: true});
      } else {
        return matchingControl.setErrors(null);
      }
    };
  }


}
