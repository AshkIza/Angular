import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Course, ICourse } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'courses',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewedCourse:Course | undefined;

  constructor(private activatedRout:ActivatedRoute, 
    private router:Router,
    private courseservice:CourseService) { }

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(param => {
      let id =  Number(param.get("id"));
      console.log(' id ::::' + id);
      this.courseservice.getCourseById(id).subscribe(item=> {
        console.log('item -->' + item);
        this.viewedCourse = item;
      });
    });
    console.log('viewedCourse ->>> ' + this.viewedCourse?.title)
  }

  redirect():void{
    this.router.navigateByUrl('/courses/add/' + this.viewedCourse?.id)
  }

}
