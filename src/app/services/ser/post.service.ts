import {Injectable} from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Post} from '../../services/ser/model/postItem';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<Post>('test', ref => ref.orderBy('dateAdded', 'desc'));
    //  this.posts = this.postsCollection.valueChanges();

    this.posts = this.postsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Post;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    this.postsCollection.add(post);
  }

  deletePost(post: Post) {
    this.postDoc = this.afs.doc(`test/${post.id}`);
    this.postDoc.delete();
  }

  updatePost(post: Post) {
    this.postDoc = this.afs.doc(`test/${post.id}`);
    this.postDoc.update(post);
  }

}
