import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAssetsPlacementState} from './assets-placement.state';


const featureAssetsPlacement = createFeatureSelector<IAssetsPlacementState>('feature_assets_placement');


export const itemsSelector = createSelector(featureAssetsPlacement, state => state.items);
export const totalPage = createSelector(featureAssetsPlacement, state => state.paginator.totalPage);
