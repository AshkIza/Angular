# NgCourseUi

This project was generated with **Angular 11.0, Bootstrap 4.0 and font-awesome.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 


## Dockerize your Angular Application

within the root directory, Dockerfile helps to build your docker image.

    1- ng build --prod  
       
       production build (The build artifacts will be stored in the **`dist/`** directory)
    
    1- docker build . -t ng-course-ui
    
      this will build your docker image as 'ng-course-ui'. you run see this image by running 'docker images'
      
    2- docker run -p 80:80 ng-course-ui
    
       this will create a container instance from this image (mapping docker port 80 to host port 80)
       
    3- your dockerized angular app should be available from 'localhost:80'
