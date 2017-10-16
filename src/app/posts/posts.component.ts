import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post/post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    let response = this.postService.getPosts().subscribe((answer)=>{
      // console.log(answer);
      for (let i = 0; i < Object.keys(answer).length; i++) {
          this.posts.push(answer[i]);
        }
    });
  }

}
