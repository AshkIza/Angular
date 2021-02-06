import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITopic, Topic } from 'src/app/topics/models/topic';
import { TopicService } from 'src/app/topics/services/topic.service';

@Component({
  selector: 'app-add-and-edit',
  templateUrl: './add-and-edit.component.html',
  styleUrls: ['./add-and-edit.component.css']
})
export class AddAndEditComponent implements OnInit {
  //reactive forms - dynamically creating formGroup and adding formControls to it
  allTopics:Topic[] | undefined;
  defaultTopic:Topic = new Topic();
  editMode:boolean = false;
  courseId:number= -1;
  courseForm =  this.formBuilder.group({
    title: ['',  Validators.required],
    topic: ['' ,  Validators.required],
    description: ['']
  });

  constructor(private formBuilder:FormBuilder, 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private courseservice:CourseService,
    private topicService:TopicService) { }

  ngOnInit(): void {
    this.defaultTopic = new Topic();

    this.topicService.getAll().subscribe(item => {
      this.allTopics = item;
      console.log('ngOnInit  allTopics');
    });
    
   
    this.activatedRoute.paramMap.subscribe(param => {
      this.editMode = param.get('id') !== null;
      //console.log(' edit mode' + id);
      if(this.editMode){
        this.courseId =  Number(param.get("id"));
        this.courseservice.getCourseById(this.courseId).subscribe(item=> {
          //console.log('item -->' + item);
          this.courseForm.get('title')?.setValue(item?.title);
          this.courseForm.get('topic')?.setValue(item?.topic);
          this.courseForm.get('description')?.setValue(item?.description);
          if(item?.topic !== undefined){
            this.defaultTopic = item.topic;
          }else{
            this.defaultTopic.name = 'Select a topic';
          }
        });
      }
    });

    this.setDefaults();
   
  }
  setDefaults():void{
    this.courseForm.get("topic")?.patchValue(this.defaultTopic);
  }


  save():void{
    let course = new Course();
    
    if(this.editMode){
      course.id = this.courseId;
      this.courseId = -1;
    }
    course.title = this.courseForm.get("title")?.value;
    course.description = this.courseForm.get("description")?.value;
    let topic = this.courseForm.get("topic")?.value;
    course.topic = topic;

    console.log('course' + course.title + " course.topic : " + course.topic);
    this.courseservice.addOrUpdateCourse(course);
    this.courseservice.getAllCourses().subscribe(item => {
      console.log('refresh after update');
    });
    this.router.navigateByUrl('courses');
  }
  
 
  
}
