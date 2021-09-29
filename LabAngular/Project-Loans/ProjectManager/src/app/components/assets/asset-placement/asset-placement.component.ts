import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAssetsState} from '../../../app-store/assets/assets.state';
import {AssetsSelector} from '../../../app-store/assets/index-assets.store';
import {map, take, takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {IAssetsPlacementState} from '../../../app-store/assets-placement/assets-placement.state';
import {
  AssetPlacementActions,
  AssetPlacementSelector
} from '../../../app-store/assets-placement/index-assets-placement.store';

@Component({
  selector: 'app-asset-placement',
  templateUrl: './asset-placement.component.html',
  styleUrls: ['./asset-placement.component.css']
})
export class AssetPlacementComponent implements OnInit, OnDestroy {

  idsAssetPlacement!: any;
  currentPage = 1;
  notifier = new Subject();
  AssetPlacement$ = this._storeAssetPlacement.select(AssetPlacementSelector.itemsSelector);
  totalPage$ = this._storeAssetPlacement.select(AssetPlacementSelector.totalPage);

  constructor(private readonly _storeAsset: Store<IAssetsState>,
              private readonly _storeAssetPlacement: Store<IAssetsPlacementState>) {
  }

  ngOnInit(): void {
    this._storeAssetPlacement.dispatch(AssetPlacementActions.actionGet({ids: this.idsAssetPlacement, page: this.currentPage}));
  }

  getAssetsPlacement(): void {
    this._storeAssetPlacement.dispatch(AssetPlacementActions.actionGet({ids: this.idsAssetPlacement, page: this.currentPage}));
  }

  nextPage(): void {
    // this._storeAssetPlacement.dispatch(AssetPlacementActions.actionGet({ids: this.idAssetPlacement, page: ++this.currentPage}));
  }

  previewPage(): void {
    // this._storeAssetPlacement.dispatch(AssetPlacementActions.actionGet({ids: this.idAssetPlacement, page: --this.currentPage}));
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
