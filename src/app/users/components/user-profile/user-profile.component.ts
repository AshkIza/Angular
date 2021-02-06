import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/todo/models/todo';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User | undefined;

  constructor(private userService:UserServiceService,
              private activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id");
      if(id){
        this.user= this.userService.getUser(Number(id));
      }
    });
  }

  clickMessage(event : any){
    let todos:Todo[] = [];
    for (let i = 0; i < event.length; i++) {
      todos.push(event[i]);
    }
    if(this.user){
      this.userService.addTodoForUser(this.user, todos);
    }

    console.log('todos ' + todos);

  }

}
