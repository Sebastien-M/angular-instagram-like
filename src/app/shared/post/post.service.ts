import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Injectable()
export class PostService {
  private urlAPI:string = 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.urlAPI);
  }
  addPost(post:Post){
    return this.http.post<Post>(this.urlAPI,post);
  }
}
