"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization || req.headers.postmanToken;
    console.log(req.body);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'secret_key');
        req.body.userId = decoded.userId; // Establecer el ID de usuario en el objeto req
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.authMiddleware = authMiddleware;
