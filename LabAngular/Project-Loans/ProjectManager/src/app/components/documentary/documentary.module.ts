import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentaryRoutingModule } from './documentary-routing.module';
import { ListDocumentaryComponent } from './list-documentary/list-documentary.component';


@NgModule({
  declarations: [
    ListDocumentaryComponent
  ],
  imports: [
    CommonModule,
    DocumentaryRoutingModule
  ]
})
export class DocumentaryModule { }
