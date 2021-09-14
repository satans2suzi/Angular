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
import {SpinnerComponent} from './components/spinner/spinner.component';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from './shared/shared.module';
import {AppEffect} from './app-store/app.effects';
import {forRootReducer, metaReducers} from './app-store/app.stories';
import {AppStoreModule} from './app-store/app-store.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PostsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule,
    AppStoreModule,
    SharedModule,
    StoreModule.forRoot(forRootReducer, {
      metaReducers,
      runtimeChecks : {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability:true
      }
    }),
    EffectsModule.forRoot(AppEffect),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
    AuthModule,
    DashboardModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
