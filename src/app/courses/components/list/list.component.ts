import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course, ICourse } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses:ICourse[] | undefined;

  constructor(private courseService:CourseService, private router:Router) { }

  ngOnInit(): void {
   this.courseService.getAllCourses().subscribe(item => {
      this.courses = item;
    })
    console.log(this.courses);
  }

  delete(course:Course):void{
    this.courseService.deleteCourse(course);
    console.log("course" + course.title + "deleted!");
  }

  view(course:Course):void{
    this.router.navigateByUrl('courses/view/' + course.id);
  }

}
