import { Component, OnInit } from '@angular/core';
import { Movies } from "../../models/movies";
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : Movies[];
  constructor( private movieService: MovieService) { }

  getMoviesFromService(): void{
    // this.movies = this.movieService.getMovies()
    this.movieService.getMovies().subscribe(
      updateMovies =>{
        this.movies = updateMovies;
        console.log(`this.movie = ${JSON.stringify(this.movies)}`);
      }
    )
  }

  ngOnInit(): void {
    this.getMoviesFromService();
  }
  selectedMovie: Movies;
  onSelect(movie: Movies): void{
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`)
    // alert(`${JSON.stringify(this.selectedMovie)}`)
  }
}
