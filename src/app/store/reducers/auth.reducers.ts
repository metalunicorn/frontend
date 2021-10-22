import { AuthActions, EAuthActions } from '../action/auth.actions';
import { IAuthState, initialAuthState } from '../state/auth.state';

export const authKey = 'auth';

export const authReducers = (
	state = initialAuthState,
	action: AuthActions
): IAuthState => {
	switch (action.type) {
		case EAuthActions.LoginSuccess: {
			return {
				...state,
				accessToken: action.payload,
			};
		}

		case EAuthActions.LogInFailure: {
			return {
				...state,
				errorMessage: 'Incorrect login and/or password',
			};
		}

		default:
			return state;
	}
};
