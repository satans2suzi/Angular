import {createAction, props} from '@ngrx/store';
import {
  IFormAssetPlacementModel, IResAssetPlacementModel,
  IResAssetsPlacementModel
} from '../../shared/models/assets/asset-placement.model';

const GET_ASSETS_PLACEMENT = '[ASSET_PLACEMENT] Get Assets Placement';
const GET_ASSETS_PLACEMENT_SUCCESS = '[ASSET_PLACEMENT] Get Assets Placement Success';
const GET_ASSETS_PLACEMENT_FAILURE = '[ASSET_PLACEMENT] Get Assets Placement Failure';

const GET_ASSET_PLACEMENT = '[ASSET_PLACEMENT] Get Asset Placement';
const GET_ASSET_PLACEMENT_SUCCESS = '[ASSET_PLACEMENT] Get Asset Asset Placement Success';
const GET_ASSET_PLACEMENT_FAILURE = '[ASSET_PLACEMENT] Get Asset Asset Placement Failure';

const CREATE_ASSET_PLACEMENT = '[ASSET_PLACEMENT] Create Asset Placement';
const CREATE_ASSET_PLACEMENT_SUCCESS = '[ASSET_PLACEMENT] Create Asset Placement Success';
const CREATE_ASSET_PLACEMENT_FAILURE = '[ASSET_PLACEMENT] Create Asset Placement Failure';

const UPDATE_ASSET_PLACEMENT = '[ASSET_PLACEMENT] Update Asset Placement';
const UPDATE_ASSET_PLACEMENT_SUCCESS = '[ASSET_PLACEMENT] Update Asset Placement Success';
const UPDATE_ASSET_PLACEMENT_FAILURE = '[ASSET_PLACEMENT] Update Asset Placement Failure';

const DELETE_ASSET_PLACEMENT = '[ASSET_PLACEMENT] Delete Asset Placement';
const DELETE_ASSET_PLACEMENT_SUCCESS = '[ASSET_PLACEMENT] Delete Asset Placement Success';
const DELETE_ASSET_PLACEMENT_FAILURE = '[ASSET_PLACEMENT] Delete Asset Placement Failure';

// export const actionGetAssetsPlacement = createAction(GET_ASSETS_PLACEMENT);
// export const actionGetAssetsPlacementSuccess = createAction(GET_ASSETS_PLACEMENT_SUCCESS, props<{ items: IResAssetPlacementModel[],message: string }>());
// export const actionGetAssetsPlacementFailure = createAction(GET_ASSETS_PLACEMENT_FAILURE, props<{ error: string }>());

export const actionGet = createAction(GET_ASSET_PLACEMENT, props<{ ids: string[], page: number }>());
export const actionGetSuccess = createAction(GET_ASSET_PLACEMENT_SUCCESS, props<{
  items: IResAssetPlacementModel[],
  message: string,
  totalPage: number
}>());
export const actionGetFailure = createAction(GET_ASSET_PLACEMENT_FAILURE, props<{ error: string }>());

export const actionCreate = createAction(CREATE_ASSET_PLACEMENT, props<{ assetID: string, payload: IFormAssetPlacementModel }>());
export const actionCreateSuccess = createAction(CREATE_ASSET_PLACEMENT_SUCCESS, props<{ message: string }>());
export const actionCreateFailure = createAction(CREATE_ASSET_PLACEMENT_FAILURE, props<{ error: string }>());

export const actionUpdate = createAction(UPDATE_ASSET_PLACEMENT, props<{ id: string, payload: IFormAssetPlacementModel }>());
export const actionUpdateSuccess = createAction(UPDATE_ASSET_PLACEMENT_SUCCESS, props<{ message: string }>());
export const actionUpdateFailure = createAction(UPDATE_ASSET_PLACEMENT_FAILURE, props<{ error: string }>());

export const actionDelete = createAction(DELETE_ASSET_PLACEMENT, props<{ id: string }>());
export const actionDeleteSuccess = createAction(DELETE_ASSET_PLACEMENT_SUCCESS, props<{ message: string }>());
export const actionDeleteFailure = createAction(DELETE_ASSET_PLACEMENT_FAILURE, props<{ error: string }>());
