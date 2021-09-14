import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { ListAssetsComponent } from './list-assets/list-assets.component';
import { DetailsAssetsComponent } from './details-assets/details-assets.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AssetPlacementComponent } from './asset-placement/asset-placement.component';


@NgModule({
  declarations: [
    ListAssetsComponent,
    DetailsAssetsComponent,
    AssetPlacementComponent
  ],
    imports: [
        CommonModule,
        AssetsRoutingModule,
        ReactiveFormsModule
    ]
})
export class AssetsModule { }
