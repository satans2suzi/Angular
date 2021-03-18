import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './summary.pipe';
import { ComponentAPIComponent } from './component-api/component-api.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomDrictiveComponent } from './custom-drictive/custom-drictive.component';
import { ContactFormComponent } from './contact-form/contact-form.component'

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
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
