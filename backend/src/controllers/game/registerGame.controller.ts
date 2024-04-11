import { Request, Response } from 'express';
import { createGame } from '../../services/game/create.service';

export const createGameController = async (req: Request, res: Response): Promise<void> => {
  try {
    const game = await createGame(req.body);
    res.status(201).json(game);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};