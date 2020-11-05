import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movies'; //Model film
import { MovieService } from '../movie.service'; //nhiem vu lay du lieu
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movies[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }
  getMovies(): void{
    this.movieService.getMovies().subscribe(movies => this.movies = this.movies.slice(1,5))
    console.log(this.movies)
  }
}
