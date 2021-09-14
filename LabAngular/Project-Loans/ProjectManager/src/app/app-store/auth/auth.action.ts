import {createAction, props} from '@ngrx/store';
import {IDataLoginModel, IFormLoginModel} from '../../shared/models/auth/login.model';
import {IFormRegisterModel} from '../../shared/models/auth/register.model';


const AUTH_LOGIN = '[AUTH] Login';
const AUTH_LOGIN_SUCCESS = '[AUTH] Login Success';
const AUTH_LOGIN_FAILURE = '[AUTH] Login Failure';

const AUTH_LOGOUT = '[AUTH] Logout';
const AUTH_LOGOUT_SUCCESS = '[AUTH] Logout Success';
const AUTH_LOGOUT_FAILURE = '[AUTH] Logout Failure';


const AUTH_REGISTER = '[AUTH] Register';
const AUTH_REGISTER_SUCCESS = '[AUTH] Registern Success';
const AUTH_REGISTER_FAILURE = '[AUTH] Register Failure';



const CHECK_TOKEN = '[AUTH] Check Token';
const CHECK_TOKEN_SUCCESS = '[AUTH] Check Token Success';
const CHECK_TOKEN_FAILURE = '[AUTH] Check Token Failure';


const GET_TOKEN = '[AUTH] Get Token';
const GET_TOKEN_SUCCESS = '[AUTH] Get Token Success';
const GET_TOKEN_FAILURE = '[AUTH] Get Token Failure';

const HANDLE_REDIRECT = '[AUTH] Handel Redirect';
const HANDLE_REDIRECT_SUCCESS = '[AUTH] Handel Redirect Success';

export const actionAuthLogin = createAction(AUTH_LOGIN, props<{ payload: IFormLoginModel }>());
export const actionAuthLoginSuccess = createAction(AUTH_LOGIN_SUCCESS, props<{ users: IDataLoginModel }>());
export const actionAuthLoginFailure = createAction(AUTH_LOGIN_FAILURE, props<{ error: any }>());

export const actionAuthLogout = createAction(AUTH_LOGOUT);
export const actionAuthLogoutSuccess = createAction(AUTH_LOGOUT_SUCCESS);
export const actionAuthLogoutFailure = createAction(AUTH_LOGOUT_FAILURE);


export const actionCheckToken = createAction(CHECK_TOKEN);
export const actionCheckTokenSuccess = createAction(CHECK_TOKEN_SUCCESS, props<{ isAuthenticated: boolean }>());
export const actionCheckTokenFailure = createAction(CHECK_TOKEN_FAILURE, props<{ isAuthenticated: boolean }>());

export const actionGetToken = createAction(GET_TOKEN);
export const actionGetTokenSuccess = createAction(GET_TOKEN_SUCCESS);
export const actionGetTokenFailure = createAction(GET_TOKEN_FAILURE, props<{ error: any }>());


export const actionAuthRegister = createAction(AUTH_REGISTER, props<{ payload: IFormRegisterModel }>());
export const actionAuthRegisterSuccess = createAction(AUTH_REGISTER_SUCCESS);
export const actionAuthRegisterFailure = createAction(AUTH_REGISTER_FAILURE, props<{ error: any }>());


// export const actionHandelRedirect = createAction(HANDLE_REDIRECT);
// export const actionHandelRedirectSuccess = createAction(HANDLE_REDIRECT_SUCCESS, props<{targetRoute: string}>());


// export type AuthActions =
//   | ActionType<typeof authLogin>
//   | ActionType<typeof authLoginSuccess>
//   | ActionType<typeof authLoginFailed>
//   | ActionType<typeof authLogout>;
