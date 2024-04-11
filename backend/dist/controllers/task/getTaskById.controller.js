"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgameByIdController = void 0;
const services_1 = require("../../services");
const getgameByIdController = async (req, res) => {
    try {
        const gameId = req.params.id;
        const game = await (0, services_1.getgameById)(gameId);
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
