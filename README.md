# NgCourseUi

This project was generated with **Angular 11.0 / Bootstrap 4.0 / font-awesome.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 


## Dockerize your Angular Application

within the root directory, Dockerfile helps to build your docker image. This Angular application will be hosted within an Nginx (dockerized) Server.

    1- ng build --prod  
       
       The build artifacts will be stored in the `dist/` directory (production build)
    
    2- docker build . -t ng-course-ui
    
       this will build your docker image as 'ng-course-ui'. you can see this image by running 'docker images'
      
    3- docker run -p 80:80 ng-course-ui
    
       this will create a container instance from this image (mapping docker port 80 to host port 80)
       
    4- your dockerized angular app should be available from 'localhost:80'


## Access the docker image from DockerHub
You can access the image from https://hub.docker.com/r/ashkan2020/cloudnative/tags?page=1&ordering=last_updated
  
    docker pull ashkan2020/cloudnative:ng-course-ui
    
