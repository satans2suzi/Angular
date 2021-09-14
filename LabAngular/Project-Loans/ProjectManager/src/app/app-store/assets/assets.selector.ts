import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAssetsState} from './assets.state';

const featureAssets = createFeatureSelector<IAssetsState>('feature_assets');


export const errorSelector = createSelector(featureAssets, state => state.error);
export const itemsSelector = createSelector(featureAssets, state => state.items);
export const idAssetPlacementSelector = createSelector(featureAssets, state => state.items.map(x => x.asset_placed));
export const statusSelector = createSelector(featureAssets, state => state.status);
export const messageSelector = createSelector(featureAssets, state => state.message);

export const pageSelector = createSelector(featureAssets, state => state.paginator?.page);
export const recordDataSelector = createSelector(featureAssets, state => state.paginator?.recordData);
export const recordPerPageSelector = createSelector(featureAssets, state => state.paginator?.recordPerPage);
export const recordTotalPageSelector = createSelector(featureAssets, state => state.paginator?.totalPage);


