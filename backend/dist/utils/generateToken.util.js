"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const jwtSecret = env_1.default.jwtSecret;
const generateToken = (email) => {
    const payload = {
        email
    };
    return jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
