import {createAction, props} from '@ngrx/store';
import {IFormAssetModel, IResAssetModel, IResAssetsModel} from '../../shared/models/assets/asset.model';

const GET_ASSETS = '[ASSET] Get Assets';
const GET_ASSETS_SUCCESS = '[ASSET] Get Assets Success';
const GET_ASSETS_FAILURE = '[ASSET] Get Assets Failure';

const GET_ASSET = '[ASSET] Get Asset';
const GET_ASSET_SUCCESS = '[ASSET] Get Asset Success';
const GET_ASSET_FAILURE = '[ASSET] Get Asset Failure';

const GET_ASSETS_PERPAGE = '[ASSET] Get Asset Per Page';
const GET_ASSETS_PERPAGE_SUCCESS = '[ASSET] Get Asset Per Page Success';
const GET_ASSETS_PERPAGE_FAILURE = '[ASSET] Get Asset Per Page Failure';

const CREATE_ASSET = '[ASSET] Create Asset';
const CREATE_ASSET_SUCCESS = '[ASSET] Create Asset Success';
const CREATE_ASSET_FAILURE = '[ASSET] Create Asset Failure';

const DELETE_ASSET = '[ASSET] Delete Asset';
const DELETE_ASSET_SUCCESS = '[ASSET] Delete Asset Success';
const DELETE_ASSET_FAILURE = '[ASSET] Delete Asset Failure';

const UPDATE_ASSET = '[ASSET] Update Asset';
const UPDATE_ASSET_SUCCESS = '[ASSET] Update Asset Success';
const UPDATE_ASSET_FAILURE = '[ASSET] Update Asset Failure';


export const actionGetAssets = createAction(GET_ASSETS);
export const actionGetAssetsSuccess = createAction(GET_ASSETS_SUCCESS, props<{ assets: IResAssetModel[], message: string }>());
export const actionGetAssetsFailure = createAction(GET_ASSETS_FAILURE, props<{ error: string }>());

export const actionGetAssetsPerPage = createAction(GET_ASSETS_PERPAGE, props<{ page: number }>());
export const actionGetAssetsPerPageSuccess = createAction(GET_ASSETS_PERPAGE_SUCCESS, props<{
  assets: IResAssetModel[],
  message: string,
  recordData: number,
  recordPerPage: number,
  page: number,
  totalPage: number
}>());
export const actionGetAssetsPerPageFailure = createAction(GET_ASSETS_PERPAGE_FAILURE, props<{ error: string }>());

export const actionGetAsset = createAction(GET_ASSET, props<{ id: string }>());
export const actionGetAssetSuccess = createAction(GET_ASSET_SUCCESS, props<{ asset: IResAssetModel[], message: string }>());
export const actionGetAssetFailure = createAction(GET_ASSET_FAILURE, props<{ error: string }>());

export const actionCreateAsset = createAction(CREATE_ASSET, props<{ payload: IFormAssetModel }>());
export const actionCreateAssetSuccess = createAction(CREATE_ASSET_SUCCESS, props<{ message: string }>());
export const actionCreateAssetFailure = createAction(CREATE_ASSET_FAILURE, props<{ error: string }>());

export const actionUpdateAsset = createAction(UPDATE_ASSET, props<{ id: string, payload: IFormAssetModel }>());
export const actionUpdateAssetSuccess = createAction(UPDATE_ASSET_SUCCESS, props<{ message: string }>());
export const actionUpdateAssetFailure = createAction(UPDATE_ASSET_FAILURE, props<{ error: string }>());

export const actionDeleteAsset = createAction(DELETE_ASSET, props<{ id: string }>());
export const actionDeleteAssetSuccess = createAction(DELETE_ASSET_SUCCESS, props<{ message: string }>());
export const actionDeleteAssetFailure = createAction(DELETE_ASSET_FAILURE, props<{ error: string }>());
