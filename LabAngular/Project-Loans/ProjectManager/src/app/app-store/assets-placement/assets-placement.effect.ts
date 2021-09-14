import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AssetService} from '../../shared/services/assets/assets.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Store} from '@ngrx/store';
import {IAssetsPlacementState} from './assets-placement.state';
import {AssetPlacementActions} from './index-assets-placement.store';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AssetsPlacementService} from '../../shared/services/assets/assets-placed.service';
import {of} from 'rxjs';

@Injectable()
export class AssetsPlacementEffect {
  constructor(private readonly _action$: Actions,
              private readonly _assetPlacementService: AssetsPlacementService,
              private readonly _spinner: NgxSpinnerService,
              private readonly _store: Store<IAssetsPlacementState>,) {
  }

  getAssets$ = createEffect(
    () => this._action$.pipe(
      ofType(AssetPlacementActions.actionGet),
      switchMap((payload) => this._assetPlacementService.getAssetsPlacement(payload.ids, payload.page).pipe(
        map((result) => AssetPlacementActions.actionGetSuccess({items: result.data, message:result.mesasge?.name, totalPage:result.totalPage })),
        catchError(err => of(AssetPlacementActions.actionGetFailure({error: err})))
      )),
    )
  )

}
