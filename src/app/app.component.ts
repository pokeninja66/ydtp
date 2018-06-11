import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyPtMIrqgYps4zi1SZM6Lk4XYcAyU-Wec',
      authDomain: 'testing-a2591.firebaseapp.com',
      databaseURL: 'https://testing-a2591.firebaseio.com',
      projectId: 'testing-a2591',
      storageBucket: 'testing-a2591.appspot.com',
      messagingSenderId: '361739031728'
    });


  }
}
