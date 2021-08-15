import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetsManagerComponent } from './assets-manager.component';
import { DetailsAssetComponent } from './details-asset/details-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsManagerComponent
  },
  {
    path: 'add-asset',
    component: AddAssetComponent
  },
  {
    path: 'details-asset/:id',
    component: DetailsAssetComponent
  },
  {
    path: 'update-asset/:id',
    component: UpdateAssetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsManagerRoutingModule { }
