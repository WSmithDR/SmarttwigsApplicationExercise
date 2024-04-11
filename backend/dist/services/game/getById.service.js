"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgameById = void 0;
const game_model_1 = __importDefault(require("../../models/game.model"));
const getgameById = async (gameId) => {
    return await game_model_1.default.findById(gameId);
};
exports.getgameById = getgameById;
