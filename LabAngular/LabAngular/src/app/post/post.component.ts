import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  // private url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
      console.log(response.status)
    }, (error) => {
      alert("list aaaaa")
      console.log(error.status);
    })
  }
  creatPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      // console.log(response.json());
    });
  }
  updatePost(post) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response.json());
    });
    // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {

    });
  }
}
