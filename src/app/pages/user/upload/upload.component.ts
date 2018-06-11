import {Component, OnInit} from '@angular/core';

import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {finalize, map} from 'rxjs/operators';
import * as firebase from 'firebase';
import {unwrapResolvedMetadata} from '@angular/compiler';
import {Observable} from 'rxjs';
import {Post} from '../../../services/ser/model/postItem';
import {PostService} from '../../../services/ser/post.service';


// for the image data
interface Image {
  path: string;
  filename: string;
  downloadURL?: string;
  $key?: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // for the picture upload
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  public currenUser: string;
  uploadItem: Post = {

    title: '',
    description: '',
    category: '',
    imageUrl: '',
    dateAdded: '',
    author: this.getCurrentUser()

  };

  public defaultCategory: number;
  Categories = [
    {id: 1, name: 'Random'},
    {id: 2, name: 'Animu tankus'},
    {id: 3, name: 'The comrades are coming'},
    {id: 4, name: 'American capitalism'}
  ];

  constructor(private afs: AngularFireStorage, private postService: PostService) {

  }

  ngOnInit() {
    this.defaultCategory = 1;

  }

  getCurrentUser() {
    this.currenUser = sessionStorage.getItem('currentUser');
    return this.currenUser.toString();
  }

  choseCategory(id) {

    switch (id) {
      case 1:
        this.uploadItem.category = 'Random';
        break;
      case 2:
        this.uploadItem.category = 'Animu tankus';
        break;
      case 3:
        this.uploadItem.category = 'The comrades are coming';
        break;
      case 4:
        this.uploadItem.category = 'American capitalism';
    }


  }

  // add the data to the Model
  onSubmit() {

    // some simple validation
    if (this.uploadItem.title != '' && this.uploadItem.description != '') {

      // default category
      if (this.uploadItem.category == '') {
        this.uploadItem.category = 'Random';
      }

      this.uploadItem.dateAdded = new Date().toLocaleString();


      this.postService.addPost(this.uploadItem);

      // clear
      this.uploadItem.title = '';
      this.uploadItem.description = '';
      this.uploadItem.category = '';
      this.uploadItem.imageUrl = '';


    }

  }


  upload3uploadHarder(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afs.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => (this.uploadItem.imageUrl = url));
      })
    )
      .subscribe();

    console.log(this.uploadItem);
  }

}
