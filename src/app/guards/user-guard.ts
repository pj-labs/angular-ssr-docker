import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard  {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
    return false;
  }
}
