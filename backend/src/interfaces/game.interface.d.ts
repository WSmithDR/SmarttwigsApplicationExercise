import { Document } from 'mongoose';

export interface IPlayer extends Document{
  name: string
  points: number
}

export interface IGame extends Document {
  player_1: IPlayer
  player_2: Ipalyer
  winner: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Igame