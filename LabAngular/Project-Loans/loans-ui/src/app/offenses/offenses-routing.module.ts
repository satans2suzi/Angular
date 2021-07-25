import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffensesComponent } from './offenses.component';

const routes: Routes = [{ path: '', component: OffensesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffensesRoutingModule { }
