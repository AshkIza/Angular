import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '../../models/topic';


@Component({
  selector: 'app-add-and-edit',
  templateUrl: './add-and-edit.component.html',
  styleUrls: ['./add-and-edit.component.css']
})
export class AddAndEditComponent implements OnInit {
  //reactive forms - dynamically creating formGroup and adding formControls to it
  editMode:boolean = false;
  courseId:number= -1;
  courseForm =  this.formBuilder.group({
    title: ['',  Validators.required],
    topic: ['',  Validators.required],
    description: ['']
  });

  constructor(private formBuilder:FormBuilder, 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private courseservice:CourseService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.editMode = param.get('id') !== null;
      //console.log(' edit mode' + id);
      if(this.editMode){
        this.courseId =  Number(param.get("id"));
        this.courseservice.getCourseById(this.courseId).subscribe(item=> {
          //console.log('item -->' + item);
          this.courseForm.get('title')?.setValue(item?.title);
          this.courseForm.get('topic')?.setValue(item?.topic?.name);
          this.courseForm.get('description')?.setValue(item?.description);
        });
      }
    });
  }

  save():void{
    let course = new Course();
    let topic = new Topic();
    console.log('course' + this.courseForm.get("title")?.value);
    if(this.editMode){
      course.id = this.courseId;
      this.courseId = -1;
    }
    course.title = this.courseForm.get("title")?.value;
    course.description = this.courseForm.get("description")?.value;
    topic.name = this.courseForm.get("topic")?.value;
    course.topic = topic;
    console.log('course' + course.title);
    this.courseservice.addOrUpdateCourse(course);
    this.courseservice.getAllCourses().subscribe(item => {
      console.log('refresh after update');
    });
    this.router.navigateByUrl('courses');
  }

}
