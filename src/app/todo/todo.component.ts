import { Component, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, Input } from '@angular/core';
import { User } from '../users/models/user';
import { Todo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges {
  title:string;
  deadline:string;
  addItem:boolean;
  list:Todo[] =[];
  @Output() mytodo = new EventEmitter<Todo[]>();
  @Input() user:User;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('TodoComponent, addItem ' + this.addItem);
  }

  ngOnInit(): void {
    this.reset();
    this.addItem = false;
    if(this.user && this.user.todoList && this.user.todoList.length > 0){
      this.list = new Array().concat(this.user.todoList);
    }
  }

  add():void{
    this.addItem = true;
  }
  save():void{
    let newitem = new Todo(this.title, this.deadline);
    this.list.push(newitem);
    this.list = new Array().concat(this.list);
    this.reset();
    this.addItem = false;
    this.mytodo.emit(this.list);
  }

  reset():void{
    this.title = '';
    this.deadline = '';
  }


}
