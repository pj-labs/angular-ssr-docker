import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private cookieService: CookieService,) {
  }

  public isUserLoggedIn(): boolean {
    return this.cookieService.check("token");
  }

  logout() {
    this.cookieService.delete("token");
    this.router.navigate(['login'])
  }

  login() {
    this.cookieService.set('token', this.generateToken())
  }

  private generateToken() {
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
