"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_model_1 = __importDefault(require("../../models/game.model"));
// Route to create a new game
const addgame = async (req, res) => {
    try {
        const { title, description } = req.body;
        // Validate request parameters
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        // Create a new game instance
        const newgame = new game_model_1.default({
            title,
            description,
        });
        // Save the game to the database
        const savedgame = await newgame.save();
        res.status(201).json(savedgame);
    }
    catch (error) {
        console.error('Error creating game:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.default = addgame;
