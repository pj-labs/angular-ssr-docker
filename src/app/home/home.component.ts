import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: string | undefined;

  constructor(private authService: AuthService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
  }

  logout() {
    this.authService.logout();
  }
}
