import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/users/models/user';
import { IBookResource } from '../../models/book-resource';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'resource-inventory',
  templateUrl: './resource-inventory.component.html',
  styleUrls: ['./resource-inventory.component.css']
})
export class ResourceInventoryComponent implements OnInit {
  books: IBookResource[] | undefined;
  showDetails:boolean;
  @Input() user:User;

  constructor(private resourceService:ResourceService, private router:Router) { }

  ngOnInit(): void {

    this.showDetails = true;
    if(this.user){
      this.resourceService.getFor(this.user).subscribe(item => {
        this.books = new Array().concat(item);
        this.showDetails = false;
      });
    }else{
      this.resourceService.getAll().subscribe(item => {
        this.books = item;
        console.log('his.books[0].urlLink)' + this.books[0].urlLink);
      });

    }


  
    
  }

}
