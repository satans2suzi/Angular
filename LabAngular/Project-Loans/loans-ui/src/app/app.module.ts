import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckLazyGuard } from './guards/check-lazy.guard';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    SiteFrameworkModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    NgbModule,
    JwtModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    AuthGuard,
    CheckLazyGuard,
    CookieService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
