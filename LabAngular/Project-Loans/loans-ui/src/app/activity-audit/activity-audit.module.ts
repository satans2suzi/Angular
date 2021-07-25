import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityAuditRoutingModule } from './activity-audit-routing.module';
import { ActivityAuditComponent } from './activity-audit.component';


@NgModule({
  declarations: [
    ActivityAuditComponent
  ],
  imports: [
    CommonModule,
    ActivityAuditRoutingModule
  ]
})
export class ActivityAuditModule { }
