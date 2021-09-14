import {IDataLoginModel} from '../../shared/models/auth/login.model';

export interface IAuthState {
  isAuthenticated: boolean;
  items: IDataLoginModel;
  error?: string;
  status: 'idle' | 'loading' | 'error';
  accessToken: string;
  refreshToken: string;
}
