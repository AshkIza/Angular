import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/todo/models/todo';
import { User, UserCredentials,Address } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users : Array<User> = new Array<User>();
  nextId : number;
  currentUser:User | undefined;
  name:Subject<string> = new Subject();

  broadcastLoginChange(text:string) {
            this.name.next(text);
  }

  constructor() { 
    this.nextId = 0;
    this.currentUser = undefined;

    let userCred = new UserCredentials('admin@google.com', 'admin', 'password');
    let address = new Address(' ', '12 lucas street', 'toronto', 'ontario');
    let user = new User('admin', 'user', 905124657, address, userCred);
    this.nextId = this.nextId + 1;
    user.setId(this.nextId);

    this.users.push(user);
    this.users = new Array().concat(this.users);//immutability issue and change
  }

  addUser(user:User):number{
    this.nextId = this.nextId + 1;
    user.setId(this.nextId);
    this.users.push(user);
    console.log(this.users);
    return this.nextId;
  }

  authenticate(userCred :UserCredentials):number{
    this.currentUser = this.users.find(user => {
      if(userCred.emailaddress){
        return userCred.equalsEmail(user.userCredential);
      }
      return userCred.equalsUserName(user.userCredential);
    });
    
    return this.currentUser === undefined ? -1 : this.currentUser.id;
  }
  getUser(id:number):User | undefined{
    console.log('user service getUser()');
    console.log(this.users);

    return this.users.find(user => user.id === id);
  }
  addTodoForUser(user:User, list:Todo[]):void{
      user.setTodoList(list);
  }
}
