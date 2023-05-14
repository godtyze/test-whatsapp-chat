export interface UserState {
  credentials: UserCredentials;
  isAuth: boolean;
}

export interface UserCredentials {
  idInstance: string;
  apiTokenInstance: string;
}
