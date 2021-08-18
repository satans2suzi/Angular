import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs/internal/operators/map';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResSignIn, SignIn } from '../../models/auth/signin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) {

  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  signIn = (data: SignIn): Observable<ResSignIn> => {
    const url = environment.AUTH_BASE_URL + environment.AUTH.LOGIN;

    return this.httpClient.post(url,data, this.httpOptions)
    .pipe(map((res: any) => {
      if(res){
        return res;
      }
    }));
  }

}
