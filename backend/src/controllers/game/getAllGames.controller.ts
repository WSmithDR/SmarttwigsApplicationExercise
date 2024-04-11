import { Request, Response } from 'express';
import { getAllgames } from '../../services/game/getAll.service';
export const getAllgamesController = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const { games, total } = await getAllgames(page, limit);

    res.status(200).json({
      games,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};