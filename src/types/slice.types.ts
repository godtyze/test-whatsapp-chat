export interface UserState {
  credentials: UserCredentials | null;
  isAuth: boolean;
}

export interface UserCredentials {
  idInstance: string;
  apiTokenInstance: string;
  receiverNumber: string;
}
