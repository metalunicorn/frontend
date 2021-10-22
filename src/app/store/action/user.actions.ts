import { Action, createAction, props } from '@ngrx/store';

export enum EUserActions {
	GetUsers = '[User] Get Users',
	GetUsersSuccess = '[User] Get Users Success',
	GetUser = '[User] Get User',
	GetUserSuccess = '[User] Get User Success',
}

export const getUsers = createAction(
	EUserActions.GetUsers,
	props<{ page: number }>()
);

export const getUsersSuccess = createAction(EUserActions.GetUserSuccess);

export const getUser = createAction(EUserActions.GetUser);

export const getUserSuccess = createAction(EUserActions.GetUsersSuccess);

export type UserActions = {
	type: string;
	payload: any;
};
