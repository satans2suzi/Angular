import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { MoviesComponent } from './movies/movies.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { Movies } from '../models/movies'
const routes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailComponent}
]


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
