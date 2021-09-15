import {ActionReducer, INIT, UPDATE} from '@ngrx/store';
import {IAppState} from '../reducer.index';
import {IAssetsState} from '../assets/assets.state';


export const hydrationMetaReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action: ',action);
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
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
