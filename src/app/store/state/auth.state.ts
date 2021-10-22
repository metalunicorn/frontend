import { IAuth } from 'src/app/models/auth.inteface';

export interface IAuthState {
	accessToken: string;
	errorMessage: string;
}

export const initialAuthState: IAuthState = {
	accessToken: '',
	errorMessage: '',
};
