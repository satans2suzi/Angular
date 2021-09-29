import {IAuthState} from './auth/auth.state';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {authReducer} from './auth/auth.reducer';
import {hydrationMetaReducer} from './hydration/hydration.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {featureKeyAuth} from './auth/auth.reducer';


export interface IAppState {
  [featureKeyAuth]: IAuthState;
  router: RouterReducerState;
}


export const forRootReducer: ActionReducerMap<IAppState> = {
  [featureKeyAuth]: authReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer[] =
  !environment.production ? [hydrationMetaReducer] : [];
