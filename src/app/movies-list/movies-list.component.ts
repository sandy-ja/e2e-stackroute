import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  content: any;

  constructor(private movieService: MovieService) { }

  // Write logic to get all movies from MovieService
  ngOnInit() {
  // fetch all the movie details
  this.movieService.getMovies().subscribe(
    data => {
      this.content = data;
    });
  }

  // Implement deleteMovie method to delete a movie
  deleteMovie(value) {
    this.movieService.deleteMovie(value).subscribe(
     data => {
      this.ngOnInit();
     });
  }

}
