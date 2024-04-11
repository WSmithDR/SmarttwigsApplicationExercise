"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgamesByTitleController = void 0;
const getByTitle_service_1 = require("../../services/game/getByTitle.service");
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
