import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityAuditComponent } from './activity-audit.component';

const routes: Routes = [{ path: '', component: ActivityAuditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityAuditRoutingModule { }
