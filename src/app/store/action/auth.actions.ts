import { createAction, props } from '@ngrx/store';

export enum EAuthActions {
	LoginUser = '[User] Login',
	LoginSuccess = '[User] Login Success',
	LogInFailure = '[User] Login Failure',
}

export const loginUser = createAction(
	EAuthActions.LoginUser,
	props<{ login: string; password: string }>()
);

export const loginSuccess = createAction(
	EAuthActions.LoginSuccess,
	props<{ payload: string }>()
);

export const logInFailure = createAction(
	EAuthActions.LogInFailure,
	props<{ payload: any }>()
);

export type AuthActions = {
	type: string;
	payload: any;
};
