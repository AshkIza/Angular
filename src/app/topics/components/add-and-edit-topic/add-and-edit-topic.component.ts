import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-add-and-edit-topic',
  templateUrl: './add-and-edit-topic.component.html',
  styleUrls: ['./add-and-edit-topic.component.css']
})
export class AddAndEditTopicComponent implements OnInit {

   //reactive forms - dynamically creating formGroup and adding formControls to it
   topicForm =  this.formBuilder.group({
     name: ['',  Validators.required],
     details: ['']
   });
 
   constructor(private formBuilder:FormBuilder, 
     private router:Router,
     private activatedRoute:ActivatedRoute,
     private topicService:TopicService) { }
 
   ngOnInit(): void {
   }
 
   save():void{
     let topic = new Topic();
     topic.name = this.topicForm.get("name")?.value;
     topic.details = this.topicForm.get("details")?.value;
     console.log('course' + topic);
     this.topicService.addOrUpdate(topic);
     this.topicService.getAll().subscribe(item => {
       console.log('refresh after update');
     });
     this.router.navigateByUrl('courses');
   }
}
