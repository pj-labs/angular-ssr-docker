import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private cookieService: CookieService,) {
  }

  public isUserLoggedIn(): boolean {
    return this.cookieService.hasKey("token");
  }

  logout() {
    this.cookieService.remove("token");
    this.router.navigate(['login'])
  }

  login() {
    return this.httpClient.get('http://localhost:3000/login').pipe(map((response: any) => {
      // login successful if there's a Spring Session token in the response
      if (response.body ||response.token) {
        this.cookieService.put('token', response.token);
      }
      return response;
    }));
  }
}
