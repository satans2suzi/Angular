import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsManagerRoutingModule } from './assets-manager-routing.module';
import { AssetsManagerComponent } from './assets-manager.component';


@NgModule({
  declarations: [
    AssetsManagerComponent
  ],
  imports: [
    CommonModule,
    AssetsManagerRoutingModule
  ]
})
export class AssetsManagerModule { }
