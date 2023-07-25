import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		private httpClient: HttpClient,
		private router: Router,
		private cookieService: SsrCookieService,
	) {}

	public isUserLoggedIn(): boolean {
		return this.cookieService.check('token');
	}

	logout() {
		this.cookieService.delete('token');
		this.router.navigate(['login']);
	}

	login() {
		return this.httpClient.get('http://localhost:3000/login').pipe(
			map((response: any) => {
				// login successful if there's a Spring Session token in the response
				if (response.body || response.token) {
					this.cookieService.set('token', response.token);
				}
				return response;
			}),
		);
	}
}
