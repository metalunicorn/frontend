import { RouterReducerState } from '@ngrx/router-store';
import { IAuthState, initialAuthState } from './auth.state';
import { initialUserState, IUserState } from './user.state';

export interface IAppState {
	router?: RouterReducerState;
	auth: IAuthState;
	user: IUserState;
}

export const initialAppState: IAppState = {
	user: initialUserState,
	auth: initialAuthState,
};

export function getInitialState(): IAppState {
	return initialAppState;
}
