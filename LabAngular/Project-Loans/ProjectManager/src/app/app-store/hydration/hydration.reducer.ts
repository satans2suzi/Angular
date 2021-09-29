import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {AUTH_LOGOUT_SUCCESS} from '../auth/auth.action';
import {IAppState} from '../reducer.index';
import {IAssetsState} from '../assets/assets.state';


export function hydrationMetaReducer<State extends {}>(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action: ', action);
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    if (action.type === AUTH_LOGOUT_SUCCESS) {
      state = {} as State;
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
