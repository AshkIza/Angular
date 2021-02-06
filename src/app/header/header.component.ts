import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/models/user';
import { UserServiceService } from '../users/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  member:string;
  loggedIn:boolean;
  welcomemessage:string;
  loggedInuser:User | undefined;

  constructor(private router:Router,
    private userService:UserServiceService) { 
      this.loggedIn = false;
      this.userService.name.subscribe((val :string) => {
        console.log('HeaderComponent Subject subscribe -> val');
        if(Number(val)){
          this.loggedInuser = userService.getUser(Number(val));
          if(this.loggedInuser){
            this.loggedIn = true;
            this.welcomemessage = 'welcome, ' + this.loggedInuser.firstname + '!';
          }
        }

        console.log(val);
    
      });
    }

  ngOnInit(): void {
  }

  goTo(path:string):void{
    console.log('HeaderComponent');
    console.log(path);
    this.router.navigateByUrl(path);
  }

  goToMyProfile():void{
    let userpath = 'users/user-profile/' + String(this.loggedInuser?.id);
    this.router.navigateByUrl(userpath);

  }

  logout():void{
    this.loggedIn = false;
    this.welcomemessage='';
  }


}
