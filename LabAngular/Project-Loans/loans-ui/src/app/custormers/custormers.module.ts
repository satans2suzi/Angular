import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustormersRoutingModule } from './custormers-routing.module';
import { CustormersComponent } from './custormers.component';


@NgModule({
  declarations: [
    CustormersComponent
  ],
  imports: [
    CommonModule,
    CustormersRoutingModule
  ]
})
export class CustormersModule { }
