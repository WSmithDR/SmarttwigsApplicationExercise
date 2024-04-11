"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllgames = void 0;
const game_model_1 = __importDefault(require("../../models/game.model"));
const getAllgames = async (page, limit) => {
    try {
        const games = await game_model_1.default.find({})
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
        const total = await game_model_1.default.countDocuments();
        return { games, total };
    }
    catch (error) {
        throw new Error('Error fetching games');
    }
};
exports.getAllgames = getAllgames;
