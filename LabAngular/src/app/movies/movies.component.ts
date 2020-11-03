import { Component, OnInit } from '@angular/core';
import { Movies } from "../../models/movies";
import { fakeMovies } from "../fake-movies"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie : Movies = {
    id: 1,
    name: "Star War",
    releaseYear: 1992
  }
  fakeMovies = fakeMovies;
  constructor() { }

  ngOnInit(): void {
  }

}
