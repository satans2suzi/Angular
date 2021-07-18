import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffensesRoutingModule } from './offenses-routing.module';
import { OffensesComponent } from './offenses.component';


@NgModule({
  declarations: [
    OffensesComponent
  ],
  imports: [
    CommonModule,
    OffensesRoutingModule
  ]
})
export class OffensesModule { }
