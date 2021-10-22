import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { CoresService } from 'src/app/core/core.service';
import { logInFailure, loginSuccess, loginUser } from '../action/auth.actions';

@Injectable()
export class AuthEffects {
	logIn$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(loginUser),
			exhaustMap((action) => {
				console.log('test');
				return this.authService.login(action).pipe(
					map((user) => {
						console.log(user);
						return loginSuccess({ payload: user.access_token });
					}),
					catchError((error) => {
						return of(logInFailure({ payload: error }));
					})
				);
			})
		);
	});

	logInSuccess$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(loginSuccess),
				tap((user) => {
					localStorage.setItem('token', user.payload);
					this.router.navigate(['home']);
				})
			);
		},
		{ dispatch: false }
	);

	logInFailure$ = createEffect(
		() => {
			return this.actions$.pipe(ofType(logInFailure));
		},
		{ dispatch: false }
	);

	constructor(
		private router: Router,
		private actions$: Actions,
		private authService: AuthService
	) {}
}
