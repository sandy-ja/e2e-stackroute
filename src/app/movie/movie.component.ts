import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  form;

  // message to be display if Movie added or not
  message = '';
  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) {
    this.form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      story: new FormControl('', Validators.required)
  });

  }

  ngOnInit() {
  }

  // Implement onSubmit method to save a Movie, verify form is valid or not
  // Display message 'Title and Story should not be empty!!! Please verify details' if form is invalid
  // Display message 'Failed to add Movie!!' while error handling
  // Display message 'Movie added' if Movie is added
  onSubmit() {

    if (this.form.valid) {
      this.movieService.addMovie(this.form.value).subscribe(
        data => {
          this.message = 'Movie added';
          this.clearForm();
        },
        err => {
          this.message = 'Failed to add Movie!!';
        }
      );
    } else {
      this.message = 'Title and Story should not be empty!!! Please verify details';
    }
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
    this.form.reset({
      title: '',
      story: ''
     });
  }

}
