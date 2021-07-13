import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SlidenavComponent} from './main/slidenav/slidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SendReportComponent} from './main/send-report/send-report.component';
import {DayReportComponent} from './main/day-report/day-report.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {DemoMaterialModule} from './material-module';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { NavbarComponent } from './main/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidenavComponent,
    SendReportComponent,
    DayReportComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    CdkAccordionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
