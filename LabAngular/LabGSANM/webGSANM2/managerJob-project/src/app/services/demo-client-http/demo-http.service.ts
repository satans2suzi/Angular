import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {UsersModels} from "../../models/users.models";
import {catchError, map, tap} from "rxjs/operators";
// import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class DemoHttpService {
  private userUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {

  }
  getUser(): Observable<UsersModels[]>{
    return this.http.get<UsersModels[]>(this.userUrl).pipe(
      tap(receivedUsers => console.log(`receivedUsers = ${JSON.stringify(receivedUsers)}`)),
      catchError(error => of([]))
    );
  }
}
