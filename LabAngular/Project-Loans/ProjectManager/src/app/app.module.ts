import {DashboardModule} from './components/dashboard/dashboard.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthModule} from './components/auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {SiteFrameworkModule} from './components/site-framework/site-framework.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {environment} from '../environments/environment';
import {PostsComponent} from './components/posts/posts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MaterialModule} from './material.module';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    AuthModule,
    DashboardModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
