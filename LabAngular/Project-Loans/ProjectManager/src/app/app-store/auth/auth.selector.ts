import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthState} from './auth.state';



const featureAuth = createFeatureSelector<IAuthState>('feature_auth');


export const fullnameSelector = createSelector(featureAuth, state => state.items?.fullname);
export const idSelector = createSelector(featureAuth, state => state.items?.id);
export const ac_tokenSelector = createSelector(featureAuth, state => state.accessToken);
export const rf_tokenSelector = createSelector(featureAuth, state => state.items?.refreshToken);
export const roleSelector = createSelector(featureAuth, state => state.items?.role);
export const phonenumberSelector = createSelector(featureAuth, state => state.items?.phonenumber);
export const emailSelector = createSelector(featureAuth, state => state.items?.email);
export const usernameSelector = createSelector(featureAuth, state => state.items?.username);
export const isAuthenticatedSelector = createSelector(featureAuth, state => state.isAuthenticated);
export const statusSelector = createSelector(featureAuth, state => state.status);
export const errorSelector = createSelector(featureAuth, state => state.error);
