import mongoose, { Document, Schema } from 'mongoose';

export interface IGame extends Document {
  player1: { name: string; points: number };
  player2: { name: string; points: number };
  winner: string;
}

const GameSchema: Schema = new Schema({
  player1: { name: String, points: Number },
  player2: { name: String, points: Number },
  winner: String
});

export default mongoose.model<IGame>('Game', GameSchema);
