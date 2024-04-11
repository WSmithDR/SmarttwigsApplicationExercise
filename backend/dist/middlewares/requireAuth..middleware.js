"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = (req, res, next) => {
    const token = req.headers.authorization || req.headers["postman-token"];
    console.log("Token: ", token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        // Decodificar el token para obtener el ID de usuario
        const decoded = jsonwebtoken_1.default.verify(token, 'secret_key');
        console.log("Decoded: ", decoded);
        if (!decoded.email) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.requireAuth = requireAuth;
/*export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || req.headers["postman-token"];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  try {
    // Decodificar el token para obtener el ID de usuario
    const decoded: any = jwt.verify(token as string, 'secret_key');
    
    // Establecer el ID de usuario en el objeto req
    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
*/ 
