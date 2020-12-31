import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, ICourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses:Course[] = [
    {id:1, title:'Java Core', topic:'Java', description:''},
    {id:2, title:'JDK 8 Lambdas', topic:'Java', description:''},
    {id:3, title:'JDK 9 Flows', topic:'Java', description:''},
    {id:4, title:'Spring Boot', topic:'Spring', description:''},

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
