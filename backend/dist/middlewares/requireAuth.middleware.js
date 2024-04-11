"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const authenticateMiddleware = (req, res, next) => {
    // Verificar si hay un token en el encabezado de autorización
    const token = req.headers.authorization;
    const jwtSecret = env_1.default.jwtSecret;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    // Verificar y decodificar el token
    try {
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret); // Aquí 'SECRET_KEY' es tu clave secreta para firmar el token
        if (!decoded)
            res.status(401).json({ message: 'Unauthorized: Error decoding the token' });
        // Los datos del usuario están en 'decoded', puedes hacer lo que necesites con ellos
        // Continuar con la siguiente función de middleware o controlador
        next();
    }
    catch (error) {
        // Si hay algún error al verificar el token, responde con un error de autenticación
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
exports.authenticateMiddleware = authenticateMiddleware;
