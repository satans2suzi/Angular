import { AbstractControl, ValidationErrors } from '@angular/forms'
// import { rejects } from 'node:assert';
// import { resolve } from 'node:path';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }
  static shouldBeUniue(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({ shouldBeUniue: true })
        } else {
          resolve(null)
        }
      }, 2000)
    });

  }
}
