import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private POST_URL = "https://jsonplaceholder.typicode.com/posts";
  constructor(public _http: HttpClient ) { }

  getPosts(){
   return this._http.get(this.POST_URL);
  }
}
