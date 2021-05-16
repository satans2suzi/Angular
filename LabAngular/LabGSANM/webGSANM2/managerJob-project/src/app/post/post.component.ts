import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {PostService} from "../services/post.service";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getPost().subscribe(response => {
      this.posts = response.json();
      console.log(response.json());
    });
  }
  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';
    this.service.creatPost(post).subscribe(
      response => {
        // @ts-ignore
        post['id'] = response.json().id;
        this.posts.splice(0,0,post);
        console.log(post);
      }
    );
  }

  updatePost(post: any){
    this.service.updatePost(post).subscribe(
      response =>{
        console.log(response.json())

      }
    );
    // this.http.put(this.url,JSON.stringify(post));
  }

  deletePost(post: any){
    this.service.deletePost(post).subscribe(
      response =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1)
      }
    );
  }
}
