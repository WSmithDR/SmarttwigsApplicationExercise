"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// config.ts
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const env = {
    port: parseInt(process.env.PORT || '3000', 10),
    mongoDB: process.env.MONGO_DB || ""
};
exports.default = env;
