# Movie App 

## Problem Statement

Movie App containes list of movies. These are the operations that can be  performed in this Movie App.

 - We can add a movie with details like title, story. 
 - we can view all the movies
 - We can delete a movie.

 The APIs for performing these tasks are given below.

## Know your APIs
    
     - POST    - http://localhost:3000/movies         - add a new movie
     - GET     - http://localhost:3000/movies         - get all movies
     - DELETE  - http://localhost:3000/movies/{id}/   - delete a movie by its id   
     
## TECH STACK

- Angular8
- Jasmine
- Protractor
- json-server

## PREREQUISITES

  1. Install dependencies npm install
  2. Run the frontend `npm run start` which shall run on port:4200  
  3. Use `json-server --watch db.json` for APIs availabilty using json-server


## Instructions

1. Your are expected to write tests in the given boilerplate so that you can complete   this assignment. All unit test related files are in test folder and e2e tests related files are in e2e
2. All the detailed instructions are given inside the project
3. Understand the comments in the project and write tests
4. After writing the tests, unit test your code by running `npm run test` or `ng test` and end-to-end test by running `npm run e2e` or `ng e2e`.
