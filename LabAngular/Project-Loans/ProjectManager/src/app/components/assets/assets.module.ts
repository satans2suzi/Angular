import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { ListAssetsComponent } from './list-assets/list-assets.component';
import { DetailsAssetsComponent } from './details-assets/details-assets.component';


@NgModule({
  declarations: [
    ListAssetsComponent,
    DetailsAssetsComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule
  ]
})
export class AssetsModule { }
