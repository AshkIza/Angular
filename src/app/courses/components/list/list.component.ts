import { Input } from '@angular/core';
import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/models/user';
import { Course, ICourse } from '../../models/course';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection :ChangeDetectionStrategy.Default
})
export class ListComponent implements OnInit , OnChanges{
  showDetails:boolean;
  courses:ICourse[] | undefined;
  @Input() user:User;

  constructor(private courseService:CourseService, 
    private router:Router, 
    private cdr: ChangeDetectorRef) { }
  
 

  ngOnInit(): void {
    this.showDetails = true;
    if(this.user){
      this.courseService.getCoursesFor(this.user).subscribe(item => {
        this.courses = new Array().concat(item);
        this.showDetails = false;
      });
    }else{
      this.courseService.getAllCourses().subscribe(item => {
        this.courses = new Array().concat(item);
      })
    }



  
  
    console.log('ngOnInit' + this.courses);
  }

  delete(course:Course):void{
    this.cdr.detectChanges();
    this.courseService.deleteCourse(course);
    console.log("course" + course.title + "deleted!");
    this.courseService.getAllCourses().subscribe(item => {
      this.courses = new Array().concat(item);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.cdr.markForCheck();
  }

  view(course:Course):void{
    this.router.navigateByUrl('courses/view/' + course.id);
  }

}
