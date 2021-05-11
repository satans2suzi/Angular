import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaoCaoComponent } from './bao-cao/bao-cao.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { DuLieuComponent } from './du-lieu/du-lieu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TaiSanComponent } from './tai-san/tai-san.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { SignupComponent } from './signup/signup.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BaoCaoComponent,
    CongViecComponent,
    DuLieuComponent,
    NavbarComponent,
    SlidebarComponent,
    FooterComponent,
    HomeComponentComponent,
    TaiSanComponent,
    NhanVienComponent,
    SignupComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
