import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from "./article.model";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article : Article;
  @HostBinding('attr.class') cssClass ='row';

  // votes: number;
  // title: string;
  // link: string;
  constructor() {

    // this.title = "Angular";
    // this.link = "http://angular.io";
    // this.votes = 10;
  }
   voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(){
    this.article.voteDown();
    return false
  }
  ngOnInit(): void {
  }

}
