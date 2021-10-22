import { IAppState } from '../state/app.state';

export const selectErrorMessage = (state: IAppState) => state.auth.errorMessage;

export const selectUsers = (state: IAppState) => state.user.users;

export const selectTotalPage = (state: IAppState) => state.user.totalPage;
