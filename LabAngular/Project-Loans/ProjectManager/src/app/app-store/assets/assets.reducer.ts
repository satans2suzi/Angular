import {Action, createReducer, on} from '@ngrx/store';
import {IAssetsState} from './assets.state';
import {AssetsActions} from './index-assets.store';
import {IResAssetModel} from '../../shared/models/assets/asset.model';



const initialState: IAssetsState = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  items: null,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  position: null,
  error: '',
  status: 'idle',
  message: '',
  paginator: {
    page: 0,
    recordData: 0,
    totalPage: 0
  }
};


// @ts-ignore
// @ts-ignore
const reducer = createReducer(
  initialState,
  on(AssetsActions.actionGetAsset,
    AssetsActions.actionCreateAsset,
    AssetsActions.actionUpdateAsset,
    AssetsActions.actionDeleteAsset, (state, action) => {
      return {
        ...state,
        status: 'loading'
      };
    }),
  on(AssetsActions.actionGetAssetsPerPage,
    AssetsActions.actionGetAsset,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
     (state, action) => {
      return {
        ...state,
        status: 'loading',
      };
    }),
  on(//AssetsActions.actionGetAssetsSuccess,
    AssetsActions.actionGetAssetsPerPageSuccess,
    (state, {assets, message, recordData, recordPerPage, page, totalPage}) => {
      return {
        ...state,
        items: assets,
        status: 'idle',
        message: message,
        paginator: {
          page: page,
          recordPerPage: recordPerPage,
          recordData: recordData,
          totalPage: totalPage,
        }
      };
    }),
  on(AssetsActions.actionGetAssetSuccess,
    (state, {asset, message}) => {
      return {
        ...state,
        items: asset,
        position: asset[0].asset_placed,
        status: 'idle',
        message: message
      };
    }
  ),
  on( AssetsActions.actionUpdateAssetSuccess,
    (state, {message}) => {
      return {
        ...state,
        status: 'idle',
        message: message
      };
    }
  ),
  on(AssetsActions.actionDeleteAssetSuccess,
    AssetsActions.actionCreateAssetSuccess,
    (state, {message}) => {
      return {
        ...state,
        status: 'idle',
        message: message
      };
    }
  ),
  on(AssetsActions.actionGetAssetsFailure,
    AssetsActions.actionGetAssetFailure,
    AssetsActions.actionGetAssetsPerPageFailure,
    AssetsActions.actionCreateAssetFailure,
    AssetsActions.actionUpdateAssetFailure,
    AssetsActions.actionDeleteAssetFailure,
    (state, {error}) => {
      return {
        ...state,
        error: error
      };
    }),
);

export function assetsReducer(state: IAssetsState | undefined, action: Action) {
  return reducer(state, action);
}
