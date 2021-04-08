
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
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
