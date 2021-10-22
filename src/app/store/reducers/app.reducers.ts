import { routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { authReducers } from './auth.reducers';
import { userReducers } from './user.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
	router: routerReducer,
	auth: authReducers,
	user: userReducers,
};
