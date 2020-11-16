import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies'; // Dữ liệu được lấy ra
import { Movies } from '../models/movies'; //models của dạng dữ liệu movie

//data sysnic Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs'

//Message Service
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Lấy dữ liệu trong local data store hoặc dữ liệu tự bịa
  getMovies(): Observable<Movies[]>{
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`)
    return of(fakeMovies);
  }
  constructor(public messageService: MessageService) { }
}
