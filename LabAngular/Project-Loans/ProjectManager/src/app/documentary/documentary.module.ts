import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentaryRoutingModule } from './documentary-routing.module';
import { DocumentaryComponent } from './documentary.component';


@NgModule({
  declarations: [
    DocumentaryComponent
  ],
  imports: [
    CommonModule,
    DocumentaryRoutingModule
  ]
})
export class DocumentaryModule { }
