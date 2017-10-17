import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post/post.service';
import { Post } from '../shared/post';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];
  user;

  constructor(private postService:PostService, private authservice:AuthService) { }

  ngOnInit() {
    this.getPosts();
    this.user = this.authservice.user;
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
