import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SlidebarComponent } from './main/slidebar/slidebar.component';
import { ReportComponent } from './content/report/report.component';
import { SeachReportComponent } from './content/seach-report/seach-report.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NavDemoComponent } from './demo/nav-demo/nav-demo.component';
import { SlideBarDemoComponent } from './demo/slide-bar-demo/slide-bar-demo.component';
import { ContentTableDemoComponent } from './demo/content-table-demo/content-table-demo.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { SendReportDemoComponent } from './demo/send-report-demo/send-report-demo.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { Table2DemoComponent } from './demo/table2-demo/table2-demo.component';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SlidebarComponent,
    ReportComponent,
    SeachReportComponent,
    NavDemoComponent,
    SlideBarDemoComponent,
    ContentTableDemoComponent,
    SendReportDemoComponent,
    Table2DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
