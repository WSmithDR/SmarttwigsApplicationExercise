import Igame from "../../interfaces/game.interface";
import game from "../../models/game.model";

export const getgameById = async (gameId: string): Promise<Igame | null> => {
  return await game.findById(gameId);
};
