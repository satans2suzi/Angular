import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  DoCheck,
  NgModule,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsManagerRoutingModule } from './assets-manager-routing.module';
import { AssetsManagerComponent } from './assets-manager.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { DetailsAssetComponent } from './details-asset/details-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AssetsManagerComponent,
    AddAssetComponent,
    DetailsAssetComponent,
    UpdateAssetComponent
  ],
  imports: [
    CommonModule,
    AssetsManagerRoutingModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AssetsManagerModule {
}
