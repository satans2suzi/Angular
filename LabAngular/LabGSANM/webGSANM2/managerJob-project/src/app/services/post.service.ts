import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

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
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id,JSON.stringify({title: 'Updating...'}))
  }

  deletePost(post: any){
    return this.http.delete(this.url+'/'+post.id)
  }
}
