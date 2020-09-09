import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  // Implement addMovie method using HttpClient for a saving a movie details
  addMovie(movie): Observable<any> {
    return this.http.post(environment.API, {
     title: movie.title,
     story: movie.story
    }, httpOptions);
  }

  getMovies(): Observable<any> {
    return this.http.get(environment.API);
  }

  // Implement deleteMovie method to delete a movie
  deleteMovie(id: any): Observable<any> {
    return this.http.delete(environment.API + '/' + id + '/');
  }
}
