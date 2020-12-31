import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, ICourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses:Course[] = [
    {id:0, title:'	Google Certified Associate Cloud Engineer Certification - Udemy', topic:'GCP', description:'Get hands on with Google Cloud Platform (GCP) and become a Google Certified Associate Cloud Engineer (ACE)'},
    {id:1, title:'	Grokking the System Design Interview', topic:'Distributed Systems', description:'This course is a complete guide to master the system design interviews. It is created by hiring managers who’ve been working at Google, Facebook, Microsoft, and Amazon.'},
    {id:2, title:'Spring Boot', topic:'Spring', description:'Spring Core, Spring MVC, Spring initializr, embedded server, '},
    {id:3, title:'Spring Data', topic:'Spring', description:'Spring Data jpa, Spring Data mongodb, hibernate, CrudRepository'},
    {id:4, title:'Angular 7 Crash Course', topic:'Angular', description:'Typescript, Webpack, Angular-cli, Dependency Injections, Components, Services, Routers, Reactive Forms,'},
    {id:5, title:'Java Core', topic:'Java', description:'Collections, Streams, ExecutorService'},
    {id:6, title:'JDK 8 Lambdas', topic:'Java', description:'Functions, BiFunctions, Operators, Producers, Consumers'},
    {id:7, title:'JDK 9 Flows', topic:'Java', description:'RxJava, Flow.Publisher, Flow.Subscriber'},

  ];

  constructor() { }

  getAllCourses():Observable<ICourse[]> {
    return of(this.courses);
  }

  getCourseById(id:number):Observable<ICourse | undefined> {
    if(id === undefined){
      return of(undefined);
    }
    let course = this.courses.find(item => item.id === id);
    return of(course);
  }

  addOrUpdateCourse(course:ICourse):void{
    this.courses.sort();
    console.log('addOrUpdateCourse' + course);
    if(!course.id){//inset
      course.id = this.courses.length + 1;
      this.courses.push(course);
      return;
    }
    //update
    let existingCourse = this.courses.find(item => item.id = course.id);
    existingCourse = course;
  }

  deleteCourse(course:ICourse):void{
    let index = this.courses.findIndex(item => item.id=course.id);
    this.courses.splice(index, 1);
    console.log('deleteCourse ' + course);
  }


}
