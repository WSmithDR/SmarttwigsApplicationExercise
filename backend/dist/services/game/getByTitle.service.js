"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getgamesByTitle = void 0;
const game_model_1 = __importDefault(require("../../models/game.model"));
const getgamesByTitle = async (title) => {
    return await game_model_1.default.find({ title });
};
exports.getgamesByTitle = getgamesByTitle;
