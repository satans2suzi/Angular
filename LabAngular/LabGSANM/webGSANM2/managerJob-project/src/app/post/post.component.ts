import { Component, OnInit } from '@angular/core';
// import {Http} from '@angular/http';
import {PostService} from "../services/post.service";
import {AppError} from "../common/errors/app-error";
import {NotFoundError} from "../common/errors/not-found-error";
import {InputError} from "../common/errors/input-error";
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
    }, error => {
      alert('Url wrong');
      console.log(error);
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
        console.log(response.status);
      },(error: AppError) => {
        if (error instanceof InputError){
          // this.form.setErrors(error.originalError);
          console.log(error)
        }
        alert('An unexpected error occurred')
      });
  }

  updatePost(post: any){
    this.service.updatePost(post).subscribe(
      response =>{
        console.log(response.json())
      }
    );
  }

  deletePost(post: number){
    this.service.deletePost(342).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1)
        console.log(index)
      },
      (error: AppError) => {
        if (error instanceof NotFoundError){
          alert('This post has already been deleted')
        }else{
          alert('An unexpected error occurred.')
          console.log(error)
        }
      });
  }
}
