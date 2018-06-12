import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit() {

    // just in case there is a logged user
   // this.authService.logout();
  }

  onLogin() {
    this.authService.login(this.email, this.password);
  }

}
