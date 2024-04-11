import Igame from "../../interfaces/game.interface";
import game from "../../models/game.model";

export const createGame = async (gameData: Igame): Promise<Igame> => {
  return await game.create(gameData);
};