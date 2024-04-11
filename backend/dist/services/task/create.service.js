"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGame = void 0;
const game_model_1 = __importDefault(require("../../models/game.model"));
const createGame = async (gameData) => {
    return await game_model_1.default.create(gameData);
};
exports.createGame = createGame;
