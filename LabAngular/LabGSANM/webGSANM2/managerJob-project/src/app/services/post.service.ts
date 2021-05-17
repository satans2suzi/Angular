import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs/Observable'
// import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch'
import {AppError} from "../common/errors/app-error";
import {InputError} from "../common/errors/input-error";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private  http: Http) { }
  getPost(){
    return this.http.get(this.url);
    };

  creatPost(post : any){
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400){
          return Observable.throw(new InputError(error.json()))
        }
        return Observable.throw(new AppError((error.json())))
      });
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id,JSON.stringify({title: 'Updating...'}))
  }

  deletePost(post: any){
    return this.http.delete(this.url+'/'+post.id)
      .catch((error: Response) => {
        if (error.status === 404){
          return Observable.throw(new AppError());
        }
        return Observable.throw(new AppError(error))

    });
  }
}
