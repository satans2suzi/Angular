import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsManagerComponent } from './assets-manager.component';

const routes: Routes = [{ path: '', component: AssetsManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsManagerRoutingModule { }
