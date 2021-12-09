import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {HomeService} from '../service/home.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: string | undefined;
  userDisplayName: string | undefined;

  constructor(private authService: AuthService,
              private homeService: HomeService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
    this.getUserInfo();
  }

  logout() {
    this.authService.logout();
  }

  private getUserInfo() {
    this.homeService.getUserInfo().subscribe(data => {
      this.userDisplayName = data.firstName + ' ' + data.lastName
    })
  }
}
