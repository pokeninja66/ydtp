import {Component, OnInit} from '@angular/core';

import {PostService} from '../../services/ser/post.service';
import {Post} from '../../services/ser/model/postItem';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  posts: Post[];

  currentUser = null;

  editPost: boolean = false;
  postToEdit: Post;


  constructor(private ps: PostService) {
    this.ps.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });

    this.currentUser = sessionStorage.getItem('currentUser');

  }

  ngOnInit() {
  }

  deletePost(event, post) {
    this.ps.deletePost(post);
  }

  updatePost(event, post) {
    this.editPost = true;
    this.postToEdit = post;

    // console.log(this.postToEdit);
  }

  UpdateThePost(post: Post) {
    this.ps.updatePost(post);
    this.editPost = false;
    this.editPost = null;
  }

}
