"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameController = void 0;
const services_1 = require("../../services");
const createGameController = async (req, res) => {
    try {
        const game = await (0, services_1.createGame)(req.body);
        res.status(201).json(game);
    }
    catch (error) {
        console.error('Error creating game:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createGameController = createGameController;
