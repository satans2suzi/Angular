import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {assetsReducer} from './assets/assets.reducer';
import {AssetsEffects} from './assets/assets.effect';
import {assetsPlacementReducer} from './assets-placement/assets-placement.reducer';
import {AssetsPlacementEffect} from './assets-placement/assets-placement.effect';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AssetsEffects, AssetsPlacementEffect]),
    StoreModule.forFeature('feature_assets',assetsReducer),
    StoreModule.forFeature('feature_assets_placement',assetsPlacementReducer)
  ]
})
export class AppStoreModule { }
