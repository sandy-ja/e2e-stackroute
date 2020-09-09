import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from '../src/app/services/movie.service';


describe('MovieService', () => {
  let httpMock: HttpTestingController;
  let service: MovieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test the service for addMovie method

  // test the service for getMovie method

  // test the service for deleteMovie method

  afterEach( () => {
       httpMock.verify();
    });
});
