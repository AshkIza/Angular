FROM nginx:1.18.0-alpine


##copy /dist contents to nginx
COPY /dist/ng-course-ui /usr/share/nginx/html

## how to build this image?
## docker build -t ng-course-ui .
## docker images
## docker run -p 80:80 ng-course-ui


