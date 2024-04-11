"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const getUserByUsername = async (username) => {
    return await user_model_1.default.findOne({ username });
};
exports.getUserByUsername = getUserByUsername;
