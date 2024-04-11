"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization || req.headers["postman-token"];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        // Decodificar el token para obtener el ID de usuario
        const decoded = jsonwebtoken_1.default.verify(token, 'secret_key');
        // Establecer el ID de usuario en el objeto req
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.verifyToken = verifyToken;
