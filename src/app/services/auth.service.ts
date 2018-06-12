import {Injectable} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public routing: Router) {
  }

  register(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
    ;
  }

  login(email: string, password: string) {
    // console.log('email:' + email);
    // console.log('password:' + password);

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
      //  alert('User is signed in.');
        // console.log(user);


        //window.location.assign('/fake');
        // emi fuck it ne moga da opravq routinga
        this.routing.navigate(['/fake']);
      } else {
        // alert('No user is signed in.');

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
            response => {
              sessionStorage.setItem('currentUser', response.user['email']);
              window.location.assign('/fake');
              //  this.routing.navigate(['/fake']);
            }
          )
          .catch(
            error => console.log('errors:' + error)
          );

      }
    });
  }

  logout() {
    firebase.auth().signOut()
      .then(function () {
       // alert('Logout successful');
      })
      .catch(function (error) {
        alert('Logout failed! try again!');
      });
  }
}
