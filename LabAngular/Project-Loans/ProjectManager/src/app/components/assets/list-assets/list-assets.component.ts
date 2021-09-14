import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AssetsActions, AssetsSelector} from '../../../app-store/assets/index-assets.store';
import {IAssetsState} from '../../../app-store/assets/assets.state';
import {Observable, Subject} from 'rxjs';
import {IResAssetModel} from '../../../shared/models/assets/asset.model';
import {pluck, take, takeUntil, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrls: ['./list-assets.component.css']
})
export class ListAssetsComponent implements OnInit, OnDestroy {
  title = 'Danh sách tài sản';
  assets$ = this._store.select(AssetsSelector.itemsSelector);
  currentPage!: number;
  // totalPages!: number;
  totalPages$ = this._store.select(AssetsSelector.recordTotalPageSelector);
  notifier = new Subject();
  formAsset!: FormGroup;

  constructor(private readonly _store: Store<IAssetsState>,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _router: Router,
              private readonly _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getParamsUrl();
    this.getAssets();
    this.initForm();
  }

  getParamsUrl(): void {
    this._activatedRoute.params
      .pipe(
        pluck('page'),
        take(1))
      .subscribe(result => this.currentPage = result);
  }

  getAssets(): void {
    this._store.dispatch(AssetsActions.actionGetAssetsPerPage({page: this.currentPage}));
  }

  nextPage(): void {
    this._router.navigate([`assets/list/${++this.currentPage}`]);
    this.getAssets();
  }

  previewPage(): void {
    this._router.navigate([`assets/list/${--this.currentPage}`]);
    this.getAssets();
  }


  initForm(): void {
    this.formAsset = this._formBuilder.group({
      asset_name: ['', Validators.required],
      asset_brand: ['', Validators.required],
      asset_type: ['', Validators.required],
      asset_serial_number: ['', Validators.required],
      asset_date_of_issue: ['', Validators.required],
      asset_price: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[\d]+$/i)
      ])]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formAsset.controls;
  }

  submitForm(): void {
    this._store.dispatch(AssetsActions.actionCreateAsset({payload: this.formAsset.value}));
    const ref = document.getElementById('cancel');
    ref?.click();
  }

  deleteAsset(id: string): void {
    this._store.dispatch(AssetsActions.actionDeleteAsset({id: id}));
    this.getAssets();
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

  // detailAsset(id: string): void {
  //   this._store.dispatch(AssetsActions.actionGetAsset({id: id}));
  //   this._router.navigate([`/assets/details/${id}`]);
  // }
}
