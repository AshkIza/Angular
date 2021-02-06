import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITopic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  headers:HttpHeaders= new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }


  getAll():Observable<ITopic[]> {    
    //.set('Access-Control-Allow-Origin', '*');
    console.log('getAll course');
    return this.http.get<ITopic[]>(environment.backendURL + 'topics', { 'headers': this.headers });
  }

  getById(id:number):Observable<ITopic | undefined> {
    if(id === undefined){
      return of(undefined);
    }
    //console.log('getCourseById');
    return this.http.get<ITopic>(environment.backendURL + 'topics/' + id , { 'headers': this.headers });
  }

  addOrUpdate(topic:ITopic):void {
    if(topic.id === undefined){//insert
      this.http.post<ITopic>(environment.backendURL + 'topics', topic).subscribe(
        data => { console.log('post method' + data); }
      );
      return;
    } 
  }

}
