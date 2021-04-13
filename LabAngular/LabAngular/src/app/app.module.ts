
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './summary.pipe';
import { ComponentAPIComponent } from './component-api/component-api.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomDrictiveComponent } from './custom-drictive/custom-drictive.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponent } from './post/post.component'
import { PostService } from './services/post.service';
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    SummaryPipe,
    ComponentAPIComponent,
    NgIfComponentComponent,
    SwitchCaseComponent,
    NgForComponent,
    InputFormatDirective,
    CustomDrictiveComponent,
    ContactFormComponent,
    SingupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'posts', component: PostComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
