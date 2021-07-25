import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SiteFrameworkModule} from "./site-framework/site-framework.module";
import {AuditModule} from "./audit/audit.module";
import {CustormersModule} from "./custormers/custormers.module";
import {InvoicesModule} from "./invoices/invoices.module";
import {LoansModule} from "./loans/loans.module";
import {PaymentsModule} from "./payments/payments.module";
import {SettingsModule} from "./settings/settings.module";
import {UsersModule} from "./users/users.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";

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
    AuditModule,
    CustormersModule,
    InvoicesModule,
    LoansModule,
    PaymentsModule,
    SettingsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
