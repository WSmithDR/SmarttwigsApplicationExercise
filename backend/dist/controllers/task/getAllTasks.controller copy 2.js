"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgamesByTitleController = exports.getgameByIdController = void 0;
const getByTitle_service_1 = require("../../services/game/getByTitle.service");
const getgameByIdController = async (req, res) => {
    try {
        const gameId = req.params.id;
        const game = await (0, getByTitle_service_1.getgameById)(gameId);
        if (!game) {
            res.status(404).json({ message: 'game not found' });
        }
        else {
            res.status(200).json(game);
        }
    }
    catch (error) {
        console.error('Error fetching game by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getgameByIdController = getgameByIdController;
const getgamesByTitleController = async (req, res) => {
    try {
        const title = req.query.title;
        const games = await (0, getByTitle_service_1.getgamesByTitle)(title);
        res.status(200).json(games);
    }
    catch (error) {
        console.error('Error fetching games by title:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getgamesByTitleController = getgamesByTitleController;
