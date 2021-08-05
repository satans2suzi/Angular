import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.dev';
import {Observable} from 'rxjs';
import {AuthModel} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(data: any): Observable<AuthModel> {
    const url = environment.AUTH_BASE_URL + environment.AUTH.REGISTER;
    return this.httpClient.post<AuthModel>(url, data);
  }

  login(data: any): any {
    const url = environment.AUTH_BASE_URL + environment.AUTH.LOGIN;
    return this.httpClient.post<any>(url, data);
  }
}
