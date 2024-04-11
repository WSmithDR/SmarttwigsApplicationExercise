"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgamesByTitle = exports.getgameById = exports.getAllgames = exports.createGame = void 0;
const game_model_1 = __importDefault(require("../models/game.model"));
const createGame = async (gameData) => {
    return await game_model_1.default.create(gameData);
};
exports.createGame = createGame;
const getAllgames = async (page = 1, limit = 10) => {
    const total = await game_model_1.default.countDocuments();
    const games = await game_model_1.default.find()
        .skip((page - 1) * limit)
        .limit(limit);
    return { games, total };
};
exports.getAllgames = getAllgames;
const getgameById = async (gameId) => {
    return await game_model_1.default.findById(gameId);
};
exports.getgameById = getgameById;
const getgamesByTitle = async (title) => {
    return await game_model_1.default.find({ title });
};
exports.getgamesByTitle = getgamesByTitle;
