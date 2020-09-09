import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieComponent } from '../src/app/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { ReactiveFormsModule} from '@angular/forms';


describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let movieService: MovieService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ReactiveFormsModule],
      declarations: [ MovieComponent ],
      providers: [MovieService]
    })
    .compileComponents();
    movieService = TestBed.get(MovieService);
    spyOn(movieService, 'addMovie').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check onSubmit method existence

  // test to check ngOnInit method existence
 
  // test to check clearForm method existence
  
  // test to check onSubmit is verifying form is valid or not
 
  // test to check onSubmit is calling MovieService or not
});
