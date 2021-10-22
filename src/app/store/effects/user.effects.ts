import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { CoresService } from 'src/app/core/core.service';
import { getUsers } from '../action/user.actions';
import { IUserState } from '../state/user.state';

@Injectable()
export class UserEffects {
	getUser$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getUsers),
			exhaustMap((action) =>
				this.userService.getUsers(action.page).pipe(
					map((users) => ({
						type: '[User] Get Users Success',
						payload: users,
					})),
					catchError(() => EMPTY)
				)
			)
		);
	});

	constructor(private actions$: Actions, private userService: CoresService) {}
}
