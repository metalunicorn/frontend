import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CoresService {
	url = 'http://localhost:3000/users';
	constructor(private http: HttpClient) {}

	getUsers(page: number): Observable<any> {
		console.log('page', page);
		return this.http.get(this.url, { params: { page, limit: '20' } });
	}
}
