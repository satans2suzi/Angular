import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AssetService} from '../../shared/services/assets/assets.service';
import {IAssetsState} from './assets.state';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AssetsActions} from './index-assets.store';
import {catchError, delay, map, tap, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';


@Injectable()
export class AssetsEffects {
  constructor(private readonly _action$: Actions,
              private readonly _assetService: AssetService,
              private readonly _spinner: NgxSpinnerService,
              private readonly _store: Store<IAssetsState>,
              private readonly _router: Router) {
  }

  getAssets$ = createEffect(
    () => this._action$.pipe(
      ofType(AssetsActions.actionGetAssets),
      tap(() => this._spinner.show()),
      delay(1000),
      switchMap(() => this._assetService.getAssets().pipe(
        map((result) => AssetsActions.actionGetAssetsSuccess({assets: result.data, message: result.mesasge?.name})),
        catchError(err => of(AssetsActions.actionGetAssetsFailure({error: err}))),
      )),
      tap(() => this._spinner.hide()),
    )
  );

  getAssetsPerPage$ = createEffect(
    () => this._action$.pipe(
      ofType(AssetsActions.actionGetAssetsPerPage),
      tap(() => this._spinner.show()),
      delay(300),
      mergeMap(payload => this._assetService.getAssetsPerPage(payload.page.toString()).pipe(
        map((result) => AssetsActions.actionGetAssetsPerPageSuccess({
          assets: result.data,
          message: result.mesasge?.name,
          recordPerPage: result.recordPerPage,
          recordData: result.recordData,
          page: result.page,
          totalPage: result.totalPage
        })),
        catchError(err => of(AssetsActions.actionGetAssetsFailure({error: err}))),
        tap(() => this._spinner.hide()),
      )),
    )
  );

  createAsset$ = createEffect(
    () => this._action$.pipe(
      ofType(AssetsActions.actionCreateAsset),
      tap(() => this._spinner.show()),
      delay(300),
      switchMap((payload) => this._assetService.createAsset(payload.payload)),
      map((result) => AssetsActions.actionCreateAssetSuccess({message: result.mesasge?.name})),
      catchError(err => of(AssetsActions.actionCreateAssetFailure({error: err}))),
      tap(() => this._spinner.hide()),
    )
  );

  deleteAsset$ = createEffect(
    () => this._action$.pipe(
      ofType(AssetsActions.actionDeleteAsset),
      tap(() => this._spinner.show()),
      delay(300),
      switchMap((payload) => this._assetService.deleteAsset(payload.id)),
      map((result) => AssetsActions.actionDeleteAssetSuccess({message: result.mesasge?.name})),
      catchError(err => of(AssetsActions.actionDeleteAssetFailure({error: err}))),
      tap(() => this._spinner.hide()),
    )
  );

  getAsset$ = createEffect(
    () => this._action$.pipe(
      ofType(AssetsActions.actionGetAsset),
      tap(() => this._spinner.show()),
      delay(300),
      switchMap((payload) => this._assetService.getAsset(payload.id).pipe(
        map((result) => AssetsActions.actionGetAssetSuccess({asset: result.data, message: result.mesasge?.name})),
        catchError(err => of(AssetsActions.actionGetAssetFailure({error: err}))),
        tap(() => this._spinner.hide())
      ))
    )
  );
}
