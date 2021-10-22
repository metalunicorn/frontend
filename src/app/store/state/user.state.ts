import { IUser } from 'src/app/models/user.interface';

export interface IUserState {
	users: IUser[];
	selectedUser: IUser;
	totalPage: number | null;
}

export const initialUserState: IUserState = {
	users: [],
	selectedUser: {
		id: '',
		firstName: '',
		lastName: '',
		passwordHash: '',
		login: '',
		email: '',
		sex: '',
		birthday: '',
	},
	totalPage: null,
};
