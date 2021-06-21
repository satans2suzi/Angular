import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Auth/home/home.component';
import { AdminComponent } from './Auth/admin/admin.component';
import { LoginComponent } from './Auth/login/login.component';
import { NoAccessComponent } from './Auth/no-access/no-access.component';
import {FormsModule} from '@angular/forms';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import { HelpersComponent } from './Auth/helpers/helpers.component';
import { NotFoundComponent } from './Auth/not-found/not-found.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { OrderService } from 'src/services/order.service';
import { AuthService } from 'src/services/auth.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './Auth/helpers/helpers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    // HelpersComponent,
    NotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OrderService,
    AuthService,
    { provide: ErrorHandler, useFactory: AppErrorHandler},
    //For Createing a mockbackend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
