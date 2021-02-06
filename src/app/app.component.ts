import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './users/services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ng-course-ui';
  login:string;

  constructor(private userservice:UserServiceService){
    console.log('AppComponent');
    console.log(this.userservice.currentUser);

  }

  ngOnInit(): void {
    this.login = "Member Login";
  }


  member(val: any):void{
    console.log('in AppComponent ' + val);
    this.login = 'welcome';
  }
}
