import { success } from 'redux-saga-requests';
import {CREATE_NEW_USER, UserActions} from "./userActions";

export type UserState = {
  userName: string;
};

const initialState: UserState = { userName: '' };

export const user = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case success(CREATE_NEW_USER):
      return {
        ...state,
      };
    default:
      return state;
  }
};
