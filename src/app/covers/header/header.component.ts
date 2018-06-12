import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged = null;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {

    this.isLogged = sessionStorage.getItem('currentUser');

    console.log('you are logged as:' + this.isLogged);
  }

  Logout() {
    this.authService.logout();
    this.isLogged = null;
  }

}
