import { Email, Password, Token, Username } from './../../types/auth.types.d';


export interface IUser extends Document {
  username: Username;
  password: Password;
  email: Email
}

export interface IlogInUser2 extends Omit<IUser,'username'>{}

export interface IloggedUser extends IUser{
  token: Token
}

