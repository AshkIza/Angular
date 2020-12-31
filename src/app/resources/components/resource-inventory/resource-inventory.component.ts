import { Component, OnInit } from '@angular/core';
import { IBookResource } from '../../models/book-resource';

@Component({
  selector: 'app-resource-inventory',
  templateUrl: './resource-inventory.component.html',
  styleUrls: ['./resource-inventory.component.css']
})
export class ResourceInventoryComponent implements OnInit {

   books: IBookResource[] = [
    {
      title: 'Angular CRUD',
      topic: 'Angular',
      authur: 'Bijith NV',
      link: 'https://www.youtube.com/watch?v=6m45I75RD_M',
      publishedYear:2017
    },
    {
      title: 'Angular Tutorial for Beginners',
      topic: 'Angular',
      authur: 'Mosh',
      link: 'https://www.youtube.com/watch?v=k5E2AVpwsko',
      publishedYear:2019
    },
    {
      title: 'Learn Angular 7 in 50 Minutes',
      topic: 'Angular',
      authur: 'DesignCourse',
      link: 'https://www.youtube.com/watch?v=5wtnKulcquA',
      publishedYear:2017
    },
    {
      title: 'Angular In 60 Minutes',
      topic: 'Angular',
      authur: 'Travery Media',
      link: 'https://www.youtube.com/watch?v=KhzGSHNhnbI',
      publishedYear:2019
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
