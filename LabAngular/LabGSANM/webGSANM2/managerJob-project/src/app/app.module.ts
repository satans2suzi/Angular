import {ErrorHandler, NgModule} from '@angular/core';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BaocaoComponent } from './baocao/baocao.component';
import { PostComponent } from './post/post.component';
import { PostService } from "./services/post.service";
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from "./services/auth.service";
import {OrderService} from "./services/order.service";
import {fakeBackendProvider} from "./helpers/fake-backend";
import {MockBackend} from "@angular/http/testing";
import { DemoClientHttpComponent } from './demo-client-http/demo-client-http.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BaocaoComponent,
    PostComponent,
    AdminComponent,
    NoAccessComponent,
    HomeComponent,
    DemoClientHttpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    AuthService,
    OrderService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
