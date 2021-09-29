import { IRouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<RouterReducerState<IRouterStateUrl>>('router');

export const getCurrentRoute = createSelector(getRouterState, (router) => router.state);
