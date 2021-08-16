
export const CREATE_NEW_USER = 'CREATE_NEW_USER';

export interface ICreateNewUser {
  type: typeof CREATE_NEW_USER
}

export const createNewUser = (): ICreateNewUser =>({
  type: CREATE_NEW_USER,
});

export type UserActions = ICreateNewUser;
