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

  constructor(private ps: PostService) {
    this.ps.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

}
