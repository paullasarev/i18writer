import { combineReducers } from 'redux';
import {user, UserState} from "./services/user";


export type IStoreState = {
  user: UserState;
};

export default combineReducers({ user });
