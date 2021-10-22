import { EUserActions, UserActions } from '../action/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userKey = 'user';

export const userReducers = (
	state = initialUserState,
	action: UserActions
): IUserState => {
	switch (action.type) {
		case EUserActions.GetUsersSuccess: {
			return {
				...state,
				totalPage: action.payload.totalPage,
				users: [...state.users, ...action.payload.data],
			};
		}
		case EUserActions.GetUserSuccess: {
			return {
				...state,
				selectedUser: action.payload,
			};
		}

		default:
			return state;
	}
};
