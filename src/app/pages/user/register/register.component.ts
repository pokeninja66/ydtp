import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.authService.register(this.email, this.password);
    this.route.navigate(['/login']);
  }

}
