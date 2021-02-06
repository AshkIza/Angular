import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredentials } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userCredForm :FormGroup;
  userId:number;
  @Output() memberloggedIn = new EventEmitter<String>();


  constructor(private fb :FormBuilder, 
    private userService:UserServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.userCredForm = this.fb.group({
      usernameoremail : ['', Validators.required],
      password : ['', [Validators.required]]
    });
    this.userId = -1;
  }

  login():void{
    let nameoremail  = this.userCredForm.get("usernameoremail")?.value;
    let password = this.userCredForm.get("password")?.value;
    let email = undefined;
    let username = undefined;
    if(nameoremail!== undefined &&  nameoremail.includes("@")){
      email = nameoremail;
    }else{
      username = nameoremail;
    }
    let userCred = new UserCredentials(email,username,password);
    this.userId = this.userService.authenticate(userCred);

    if(this.userId != -1){
      this.memberloggedIn.emit(String(this.userId));
      this.userService.broadcastLoginChange(String(this.userId));
      this.router.navigateByUrl('users/user-profile/' + this.userId);
    }else{
      this.userCredForm.markAllAsTouched();
    }
  }

  hidden():boolean{
    console.log(this.userCredForm);
    console.log(this.userId);
    return (this.userCredForm.get("usernameoremail")?.untouched || this.userCredForm.get("password")?.untouched ) || (this.userId !=- 1);
  }


}
