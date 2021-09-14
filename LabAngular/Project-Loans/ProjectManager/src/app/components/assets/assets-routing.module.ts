import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListAssetsComponent} from './list-assets/list-assets.component';
import {DetailsAssetsComponent} from './details-assets/details-assets.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'list/1',
    pathMatch: 'full'
  },
  { path: 'list/:page', component: ListAssetsComponent },
  { path: 'details/:id', component: DetailsAssetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
