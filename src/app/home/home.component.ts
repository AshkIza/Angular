import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  COPY_RIGHT:string = 'https://github.com/AshkIza/Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
