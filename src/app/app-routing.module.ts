import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

// Implement the routes for all components
// Add route where base path has to be redirected to 'addmovie'
const routes: Routes = [
  {path: 'addmovie', component: MovieComponent},
  {path: 'movieslist', component: MoviesListComponent},
  {path: '', redirectTo: '/addmovie', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// AppRoutingModule is responsible for routing to all the components
export class AppRoutingModule { }
