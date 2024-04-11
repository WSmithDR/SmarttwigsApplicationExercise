"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllgamesController = void 0;
const getByTitle_service_1 = require("../../services/game/getByTitle.service");
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
