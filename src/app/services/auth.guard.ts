import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('currentUser') != null) {
      return true;
    }
    else {
      this.router.navigate(['/login'], {queryParams: {url: state.url}});
      return false;
    }
  }

  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;

    if (sessionStorage.getItem('currentUser') != null) {
      console.log(sessionStorage.getItem('currentUser'));
      return true;
    } else {
      this.router.navigate(['/']);
      console.log(sessionStorage.getItem('currentUser'));
      return false;
    }
  }
  */

}
