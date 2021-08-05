import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SiteFrameworkModule} from './site-framework/site-framework.module';
import {UsersModule} from './users/users.module';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
