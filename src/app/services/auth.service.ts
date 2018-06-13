import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) {
  }

  nav(to){
    this.route.navigate(['/' + to]);
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

    /*
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        //  alert('User is signed in.');
        // console.log(user);

        // this.nav('home');
        //window.location.assign('/fake');
        // emi fuck it ne moga da opravq routinga
        //  this.route.navigate(['/fake']);
      } else {
        // alert('No user is signed in.');



      }
    });
    */
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          sessionStorage.setItem('currentUser', response.user['email']);

          // this.nav('upload');
          // this.route.navigate(['/upload']);
          // window.location.assign('/fake');
          window.location.href = window.location.origin;
          // this.route.navigate(['/upload']);
        }
      )
      .catch(
        error => console.log('errors:' + error)
      );

   // window.location.href = window.location.origin;
    //  this.route.navigate(['/fake']);
  }

  logout() {
    firebase.auth().signOut()
      .then(function () {
        // alert('Logout successful');
      })
      .catch(function (error) {
        alert('Logout failed! try again!');
      });

    sessionStorage.clear();
   // this.route.navigate(['/fake']);
  }
}
