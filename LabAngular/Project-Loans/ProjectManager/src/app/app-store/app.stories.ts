import {IAuthState} from './auth/auth.state';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {authReducer} from './auth/auth.reducer';
import {hydrationMetaReducer} from './hydration/hydration.reducer';
import {routerReducer} from '@ngrx/router-store';
import {environment} from '../../environments/environment';



export interface IAppState {
  // feature_auth: IAuthState
}

export const forRootReducer: ActionReducerMap<IAppState> = {
  feature_auth: authReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer[] =
  !environment.production ? [hydrationMetaReducer] : [];
