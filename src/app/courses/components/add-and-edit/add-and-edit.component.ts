import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-and-edit',
  templateUrl: './add-and-edit.component.html',
  styleUrls: ['./add-and-edit.component.css']
})
export class AddAndEditComponent implements OnInit {
  //reactive forms - dynamically creating formGroup and adding formControls to it

  courseForm =  this.formBuilder.group({
    title: ['',  Validators.required],
    topic: ['',  Validators.required],
    description: ['']
  });

  constructor(private formBuilder:FormBuilder, 
    private router:Router,
    private courseservice:CourseService) { }

  ngOnInit(): void {
 
  }

  save():void{
    let course = new Course();
    console.log('course' + this.courseForm.get("title")?.value);

    course.title = this.courseForm.get("title")?.value;
    course.topic = this.courseForm.get("topic")?.value;
    course.description = this.courseForm.get("description")?.value;
    console.log('course' + course.title);
    this.courseservice.addOrUpdateCourse(course);
    this.router.navigateByUrl('courses');
  }

}
