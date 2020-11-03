import { Component } from '@angular/core';
import { Movies } from "../models/movies";
import { fakeMovies } from "./fake-movies"
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movie : Movies = {
    id: 1,
    name: "Star War",
    releaseYear: 1992
  }
  fakeMovies = fakeMovies;
  title = 'LabAngular';
  faCoffee = faCoffee;
  faAddressCard = faAddressCard;
}
