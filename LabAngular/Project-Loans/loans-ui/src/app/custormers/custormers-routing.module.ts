import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustormersComponent } from './custormers.component';

const routes: Routes = [{ path: '', component: CustormersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustormersRoutingModule { }
