import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, pluck, take, takeLast, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAssetsState} from '../../../app-store/assets/assets.state';
import {AssetsActions, AssetsSelector} from '../../../app-store/assets/index-assets.store';
import {IResAssetModel} from '../../../shared/models/assets/asset.model';

@Component({
  selector: 'app-details-assets',
  templateUrl: './details-assets.component.html',
  styleUrls: ['./details-assets.component.css']
})
export class DetailsAssetsComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Chi tiết tài sản';
  idAsset!: string;
  asset$ = this._store.select(AssetsSelector.itemsSelector);
  notifier = new Subject();
  private subcsription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private _store: Store<IAssetsState>) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck('id'),
      take(1),
    ).subscribe(res => this.idAsset = res);
    this.getAsset();

  }

  getAsset(): void {
    this._store.dispatch(AssetsActions.actionGetAsset({id: this.idAsset}));
  }

  ngAfterViewInit(): void {
    this._store.select(AssetsSelector.positionSelector)
      .pipe(tap(val => {
          this.notifier;
          console.log(val);
        }),
        takeLast(1))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

}
