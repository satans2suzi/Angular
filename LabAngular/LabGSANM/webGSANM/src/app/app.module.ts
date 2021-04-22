import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaoCaoComponent } from './bao-cao/bao-cao.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { DuLieuComponent } from './du-lieu/du-lieu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaoCaoComponent,
    CongViecComponent,
    DuLieuComponent,
    NavbarComponent,
    SlidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
