import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { User } from 'src/app/users/models/user';
import { environment } from 'src/environments/environment';
import { IBookResource } from '../models/book-resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  headers:HttpHeaders= new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  getFor(user:User):Observable<IBookResource[]> {
    let book:IBookResource = {
      id:123,
      authur:'bootstrap',
      description:'bootrstap styles',
      isb:'',
      online_resource:true,
      title: '',
      urlLink: 'https://angular.io/guide/inputs-outputs',
      topic:undefined
    }
    console.log('getFor ' + user.firstname)
   return  from(new Array().concat(book));
  }

  getAll():Observable<IBookResource[]> {    
    return this.http.get<IBookResource[]>(environment.backendURL + 'books', { 'headers': this.headers });
  }

  getById(id:number):Observable<IBookResource | undefined> {
    if(id === undefined){
      return of(undefined);
    }
    //console.log('getCourseById');
    return this.http.get<IBookResource>(environment.backendURL + 'books/' + id , { 'headers': this.headers });
  }

  addOrUpdate(book:IBookResource):void {
    if(book.id === undefined){//insert
      this.http.post<IBookResource>(environment.backendURL + 'books', book).subscribe(
        data => { console.log('post method' + data); }
      );
      return;
    } 
  }
}
