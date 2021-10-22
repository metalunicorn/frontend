import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export interface credentials {
	login: string;
	password: string;
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	url = 'http://localhost:3000/auth/login';
	constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

	login(credentials: credentials): Observable<{ access_token: string }> {
		return this.http.post<any>(this.url, credentials).pipe(shareReplay());
		// .pipe(
		// 	map((response: any) => {
		// 		localStorage.setItem('loggedInUser', response.access_token);
		// 		return response;
		// 	})
		// );
	}

	getAuthorizationToken() {
		return localStorage.getItem('token');
	}

	isAuthenticated(): boolean {
		const token = localStorage.getItem('token');
		if (!token) {
			return false;
		}
		return !this.jwtHelper.isTokenExpired(token);
	}
}
