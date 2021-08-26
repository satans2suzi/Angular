import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '../../material.module';
import {CustomValidators} from '../../shared/vadidator/validate.vadidator';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        MatDividerModule
    ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  providers:[CustomValidators]
})
export class AuthModule { }
