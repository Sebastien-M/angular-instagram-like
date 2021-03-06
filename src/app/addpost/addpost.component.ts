import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  description:string;
  picturelink:string;
  nouveauPost = {
    description:"",
    likes:0,
    picture:"",
    id:null

  }
  constructor(private postService:PostService) { }

  ngOnInit() {
  }
  addPost(){
    this.postService.getPosts().subscribe((resp)=>{
      let len = Object.keys(resp).length;
      this.nouveauPost.id = len;
      this.postService.addPost(this.nouveauPost).subscribe((answer)=>{
        console.log(answer);
      });
    });

    
  }
}