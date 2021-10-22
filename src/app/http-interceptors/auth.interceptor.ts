import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private auth: AuthService) {}

	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const authToken = String(this.auth.getAuthorizationToken());

		const authReq = req.clone({
			headers: req.headers.set('Authorization', 'Bearer ' + authToken),
		});
		return next.handle(authReq);
	}
}
