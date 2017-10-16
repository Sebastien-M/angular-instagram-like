import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  private urlAPI:string = 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }

  getPosts(){

  }
}
