import { Component, Input, OnInit } from '@angular/core';
import { Movies } from "../../models/movies";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movies;
  constructor() { }

  ngOnInit(): void {
  }

}
