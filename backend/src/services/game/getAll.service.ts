import game, { IGame } from "../../models/game.model";


export const getAllgames = async (page: number, limit: number): Promise<{ games: IGame[], total: number }> => {
  try {
    const games = await game.find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await game.countDocuments();

    return { games, total };
  } catch (error) {
    throw new Error('Error fetching games');
  }
};