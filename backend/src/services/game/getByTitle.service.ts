import Igame from "../../interfaces/game.interface";
import game from "../../models/game.model";

export const getgamesByTitle = async (title: string): Promise<Igame[]> => {
  return await game.find({ title });
};
