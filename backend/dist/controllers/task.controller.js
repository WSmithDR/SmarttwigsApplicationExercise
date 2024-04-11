"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgamesByTitleController = exports.getgameByIdController = exports.getAllgamesController = exports.createGameController = void 0;
const getByTitle_service_1 = require("../services/game/getByTitle.service");
const createGameController = async (req, res) => {
    try {
        const game = await (0, getByTitle_service_1.createGame)(req.body);
        res.status(201).json(game);
    }
    catch (error) {
        console.error('Error creating game:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createGameController = createGameController;
const getAllgamesController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const { games, total } = await (0, getByTitle_service_1.getAllgames)(page, limit);
        res.status(200).json({
            games,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        });
    }
    catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllgamesController = getAllgamesController;
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
