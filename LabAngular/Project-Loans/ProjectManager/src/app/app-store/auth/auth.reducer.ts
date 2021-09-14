import {Action, createReducer, on} from '@ngrx/store';
import {IAuthState} from './auth.state';
import {AuthActions} from './index-auth.store';



export const initialState: IAuthState = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  items: null,
  error: '',
  status: 'idle',
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
};


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const reducer = createReducer(
  initialState,
  on(AuthActions.actionAuthLogin, AuthActions.actionGetToken, AuthActions.actionCheckToken, state => {
    return {
      ...state,
      status: 'loading'
    };
  }),
  on(AuthActions.actionAuthLoginSuccess, (state, {users}) => {
    return {
      ...state,
      status: 'idle',
      items: users,
      accessToken: users.accessToken
    };
  }),
  on(AuthActions.actionAuthLoginFailure, (state, {error}) => {
    return {
      ...state,
      status: 'error',
      error: error
    };
  }),
  on(AuthActions.actionAuthLogout, state => {
    return {
      ...state,
      status: 'loading'
    };
  }),
  on(AuthActions.actionAuthLogoutSuccess,
    AuthActions.actionAuthLogoutFailure,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (state) => {
      return {
        ...state,
        status: 'idle',
        error: '',
        items: null,
        refreshToken: '',
        accessToken: '',
        isAuthenticated: false
      };
    }),
  on(AuthActions.actionAuthLogoutFailure,
    (state) => {
      return {
        ...state,
        status: 'idle',
        error: 'Không thể đăng xuất',
      };
    }),

  on(AuthActions.actionCheckTokenSuccess, AuthActions.actionCheckTokenFailure, (state, {isAuthenticated}) => {
    return {
      ...state,
      status: 'idle',
      isAuthenticated: isAuthenticated
    };
  }),
  // on(AuthActions.actionGetTokenSuccess, (state) => {
  //   return {
  //     ...state,
  //     status: 'idle',
  //     accessToken: state.accessToken
  //   };
  // }),
  // on(AuthActions.actionGetTokenSuccess, (state) => {
  //   return {
  //     ...state,
  //     status: 'idle',
  //     accessToken: state.accessToken
  //   };
  // }),
  on(AuthActions.actionAuthRegister, state => {
    return {
      ...state,
      status: 'loading'
    };
  }),
  on(AuthActions.actionAuthRegisterSuccess, state => {
    return {
      ...state,
      status: 'idle'
    };
  }),
  on(AuthActions.actionAuthRegisterFailure, state => {
    return {
      ...state,
      status: 'idle'
    };
  }),
);


export function authReducer(state: IAuthState | undefined, action: Action) {
  return reducer(state, action);
}
