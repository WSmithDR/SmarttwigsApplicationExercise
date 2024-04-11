import express from 'express';
import { createGameController, getAllgamesController, } from '../controllers';


const router = express.Router();

router.post('/', createGameController);
router.get('/', getAllgamesController);

export default router;
