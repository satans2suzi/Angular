import {Action, createReducer, on} from '@ngrx/store';
import {IAssetsPlacementState} from './assets-placement.state';
import {AssetPlacementActions} from './index-assets-placement.store';


export const initialState: IAssetsPlacementState = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  items: null,
  message: '',
  status: 'idle',
  error: '',
  paginator: {
    totalPage: 0
  }
};


const reducer = createReducer(
  initialState,
  on(AssetPlacementActions.actionGet,
    state => {
      return {
        ...state,
        status: 'loading'
      };
    }),
  on(AssetPlacementActions.actionGetSuccess,
    (state, {items, message, totalPage}) => {
      return {
        ...state,
        items: items,
        status: 'idle',
        message: message,
        paginator: {
          totalPage: totalPage
        }
      };
    }),
  on(AssetPlacementActions.actionGetFailure,
    (state, {error}) => {
      return {
        ...state,
        status: 'idle',
        error: error
      };
    }),
  on(AssetPlacementActions.actionCreate,
    state => {
      return {
        ...state,
        status: 'loading'
      };
    }),
  on(AssetPlacementActions.actionCreateSuccess,
    (state, {message}) => {
      return {
        ...state,
        message: message,
        status: 'idle'
      };
    }),
  on(AssetPlacementActions.actionCreateFailure,
    (state, {error}) => {
      return {
        ...state,
        error: error,
        status: 'idle'
      };
    }),
  on(AssetPlacementActions.actionUpdate,
    state => {
      return {
        ...state,
        status: 'loading'
      };
    }),
  on(AssetPlacementActions.actionUpdateSuccess,
    (state, {message}) => {
      return {
        ...state,
        message: message,
        status: 'idle'
      };
    }),
  on(AssetPlacementActions.actionUpdateFailure,
    (state, {error}) => {
      return {
        ...state,
        error: error,
        status: 'idle'
      };
    }),
  on(AssetPlacementActions.actionDelete,
    state => {
      return {
        ...state,
        status: 'loading'
      };
    }),
  on(AssetPlacementActions.actionDeleteSuccess,
    (state, {message}) => {
      return {
        ...state,
        message: message,
        status: 'idle'
      };
    }),
  on(AssetPlacementActions.actionDeleteFailure,
    (state, {error}) => {
      return {
        ...state,
        error: error,
        status: 'idle'
      };
    })
);


export function assetsPlacementReducer(state: IAssetsPlacementState | undefined, action: Action) {
  return reducer(state, action);
}
