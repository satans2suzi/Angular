import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuricataManagerRoutingModule } from './suricata-manager-routing.module';
import { SuricataManagerComponent } from './suricata-manager.component';


@NgModule({
  declarations: [
    SuricataManagerComponent
  ],
  imports: [
    CommonModule,
    SuricataManagerRoutingModule
  ]
})
export class SuricataManagerModule { }
